/**
 * WBS 간트 컴포넌트
 * ─────────────────────────────────────────────────────────────
 * 홈 화면(index.html)의 "업무 현황" 간트차트와 동일한 마크업·스타일(§9 간트 차트)을
 * 쓰는 재사용 컴포넌트. 보고 화면처럼 특정 담당자의 WBS만 잘라서 보여줄 때 사용한다.
 *
 *   const wbs = renderWbsGantt(mountEl, tasks, {
 *     viewUnit : 'week',              // 'day' | 'week' | 'month' | '3month'
 *     baseDate : new Date(),          // 오늘 선(today-line) 기준일
 *     listTitle: 'WBS 항목',
 *     onSelect : task => { ... },     // 업무 클릭 (기본: 업무 상세 대시보드로 이동)
 *   });
 *   wbs.setViewUnit('month');
 *
 * tasks 는 ORG의 업무 객체 배열 ({ title, status, owner, start, end }).
 * script.js 가 먼저 로드되어 있어야 한다 (STATUS_LABEL 등 공용 상수 사용).
 */
(function (global) {

  /* 홈 화면 간트와 동일한 데이터 구간 (2026년) */
  const START_DATE = new Date(2026, 0, 1);
  const DATA_DAYS  = 365;

  const STATUS_BAR = { progress: 'bar-blue', done: 'bar-green', wait: 'bar-gray' };
  const STATUS_PCT = { progress: 50, done: 100, wait: 0 };

  function dateToOffset(str) {
    const [y, m, d] = String(str).split('-').map(Number);
    return Math.round((new Date(y, m - 1, d) - START_DATE) / 86400000);
  }
  function dateFromOffset(off) {
    const d = new Date(START_DATE);
    d.setDate(d.getDate() + off);
    return d;
  }
  function isWeekend(off) { const day = dateFromOffset(off).getDay(); return day === 0 || day === 6; }

  /* 월 단위 상단 헤더 라벨 */
  function buildGroupHdrs(cols, dtFn) {
    const groups = [];
    let cur = '', start = 0;
    for (let i = 0; i < cols; i++) {
      const dt  = dtFn(i);
      const lbl = dt.getFullYear() + '년 ' + (dt.getMonth() + 1) + '월';
      if (lbl !== cur) {
        if (cur) groups.push({ label: cur, start, end: i - 1 });
        cur = lbl; start = i;
      }
      if (i === cols - 1) groups.push({ label: cur, start, end: i });
    }
    return groups;
  }

  global.renderWbsGantt = function (mount, tasks, options) {
    const opt       = options || {};
    const baseDate  = opt.baseDate || new Date();
    const listTitle = opt.listTitle || 'WBS 항목';
    const rows      = (tasks || []).map((t, i) => ({
      id:       'wbs-' + i,
      name:     t.title,
      assignee: t.owner,
      start:    Math.max(0, dateToOffset(t.start)),
      end:      Math.min(DATA_DAYS - 1, Math.max(0, dateToOffset(t.end))),
      color:    STATUS_BAR[t.status] || 'bar-blue',
      progress: STATUS_PCT[t.status] || 0,
      _orgTask: t,
    }));

    const baseOffset = Math.round((baseDate - START_DATE) / 86400000);
    let viewUnit = opt.viewUnit || 'week';

    /* ── 뷰별 설정 (홈 화면 간트와 동일) ── */
    function getViewConfig() {
      const dayStart = Math.max(0, baseOffset - 21);
      switch (viewUnit) {
        case 'day': return {
          cols: 60, colW: 32,
          unitOf:   d => d - dayStart,
          colClass: i => (isWeekend(dayStart + i) ? ' weekend' : '') + (dayStart + i === baseOffset ? ' today-col' : ''),
          colTxt:   i => dateFromOffset(dayStart + i).getDate(),
          todayCol: baseOffset - dayStart,
          groupHdrs: buildGroupHdrs(60, i => dateFromOffset(dayStart + i)),
        };
        case 'month': return {
          cols: 12, colW: 120,
          unitOf:   d => { const dt = dateFromOffset(d); return (dt.getFullYear() - 2026) * 12 + dt.getMonth(); },
          colClass: i => (baseDate.getFullYear() === 2026 && baseDate.getMonth() === i) ? ' today-col' : '',
          colTxt:   i => (i + 1) + '월',
          todayCol: baseDate.getFullYear() === 2026 ? baseDate.getMonth() : -1,
          groupHdrs: [{ label: '2026년', start: 0, end: 11 }],
        };
        case '3month': {
          const q = baseDate.getFullYear() === 2026 ? Math.floor(baseDate.getMonth() / 3) : -1;
          return {
            cols: 4, colW: 200,
            unitOf:   d => { const dt = dateFromOffset(d); return Math.floor(((dt.getFullYear() - 2026) * 12 + dt.getMonth()) / 3); },
            colClass: i => (i === q ? ' today-col' : ''),
            colTxt:   i => (i * 3 + 1) + '~' + (i * 3 + 3) + '월',
            todayCol: q,
            groupHdrs: [{ label: '2026년', start: 0, end: 3 }],
          };
        }
        default: return { // week — 데이터 구간(2026년) 전체를 덮도록 53주
          cols: 53, colW: 80,
          unitOf:   d => Math.floor(d / 7),
          colClass: i => (baseOffset >= i * 7 && baseOffset <= i * 7 + 6) ? ' today-col' : '',
          colTxt:   i => { const d = dateFromOffset(i * 7); return (d.getMonth() + 1) + '/' + d.getDate(); },
          todayCol: Math.floor(baseOffset / 7),
          groupHdrs: buildGroupHdrs(53, i => dateFromOffset(i * 7)),
        };
      }
    }

    /* ── 골격 ── */
    mount.innerHTML = `
      <div class="gantt-wrapper gantt-wrapper--embed">
        <div class="task-list">
          <div class="tl-header">
            <div class="tl-header-labels">
              <span class="tl-label-task">${listTitle}</span>
              <span class="tl-label-count">상태</span>
            </div>
          </div>
          <div class="tl-body"></div>
        </div>
        <div class="gantt-area">
          <div class="gantt-header">
            <div class="gantt-header-weeks"></div>
            <div class="gantt-header-days"></div>
          </div>
          <div class="gantt-body"><div class="gantt-rows"></div></div>
        </div>
      </div>
    `;

    const wrapper  = mount.querySelector('.gantt-wrapper');
    const taskBody = mount.querySelector('.tl-body');
    const weeksEl  = mount.querySelector('.gantt-header-weeks');
    const daysEl   = mount.querySelector('.gantt-header-days');
    const ganttHdr = mount.querySelector('.gantt-header');
    const ganttBody= mount.querySelector('.gantt-body');
    const rowsEl   = mount.querySelector('.gantt-rows');

    // 업무 건수에 맞춰 높이를 고정한다 (헤더 72px + 행 36px, 최대 8행까지 노출 후 스크롤)
    wrapper.style.height = (72 + Math.min(rows.length, 8) * 36 + 2) + 'px';

    function openTask(task) {
      if (opt.onSelect) { opt.onSelect(task._orgTask); return; }
      sessionStorage.setItem('krds_selected_task', JSON.stringify(task._orgTask));
      window.location.href = '/resources/pages/operating-detail-dashboard.html';
    }

    /* ── 헤더 ── */
    function renderHeader() {
      const vc = getViewConfig();
      weeksEl.innerHTML = '';
      daysEl.innerHTML  = '';

      vc.groupHdrs.forEach(w => {
        const el = document.createElement('div');
        el.className   = 'gantt-week-label';
        el.style.width = ((w.end - w.start + 1) * vc.colW) + 'px';
        el.textContent = w.label;
        weeksEl.appendChild(el);
      });

      for (let i = 0; i < vc.cols; i++) {
        const el = document.createElement('div');
        el.className   = 'gantt-day-cell' + vc.colClass(i);
        el.style.width = vc.colW + 'px';
        el.textContent = vc.colTxt(i);
        daysEl.appendChild(el);
      }
    }

    /* ── 왼쪽 업무 목록 ── */
    function renderTaskList() {
      taskBody.innerHTML = '';
      rows.forEach(task => {
        const row = document.createElement('div');
        row.className = 'tl-row ' + task.color;

        const toggle = document.createElement('span');
        toggle.className = 'tl-toggle';
        row.appendChild(toggle);

        const dot = document.createElement('span');
        dot.className   = 'tl-avatar ' + task.color;
        dot.textContent = (task.assignee || '·').slice(0, 1);
        row.appendChild(dot);

        const name = document.createElement('span');
        name.className   = 'tl-name';
        name.textContent = task.name;
        name.title       = task.name;
        row.appendChild(name);

        const status = document.createElement('span');
        status.className   = 'tl-count';
        // STATUS_LABEL은 script.js의 최상위 const라 window 속성이 아니므로 전역 스코프에서 직접 참조한다
        status.textContent = (typeof STATUS_LABEL !== 'undefined' && STATUS_LABEL[task._orgTask.status]) || '';
        row.appendChild(status);

        row.addEventListener('click', () => openTask(task));
        taskBody.appendChild(row);
      });
    }

    /* ── 간트 막대 ── */
    function renderGanttRows() {
      const vc = getViewConfig();
      rowsEl.innerHTML = '';
      rowsEl.style.width = (vc.cols * vc.colW) + 'px';

      if (vc.todayCol >= 0 && vc.todayCol < vc.cols) {
        const line = document.createElement('div');
        line.className  = 'today-line';
        line.style.left = (vc.todayCol * vc.colW + vc.colW / 2) + 'px';
        rowsEl.appendChild(line);
      }

      rows.forEach(task => {
        const row = document.createElement('div');
        row.className   = 'gantt-row';
        row.style.width = '100%';

        for (let i = 0; i < vc.cols; i++) {
          const col = document.createElement('div');
          col.className   = 'gantt-col' + vc.colClass(i);
          col.style.width = vc.colW + 'px';
          row.appendChild(col);
        }

        const rawS = vc.unitOf(task.start);
        const rawE = vc.unitOf(task.end);
        if (rawE >= 0 && rawS < vc.cols) {
          const sc = Math.max(0, rawS);
          const ec = Math.min(vc.cols - 1, rawE);

          const bw = document.createElement('div');
          bw.className   = 'gantt-bar-wrap';
          bw.style.left  = (sc * vc.colW + 1) + 'px';
          bw.style.width = ((ec - sc + 1) * vc.colW - 2) + 'px';

          const bar = document.createElement('div');
          bar.className    = 'gantt-bar ' + task.color;
          bar.style.width  = '100%';
          bar.style.cursor = 'pointer';
          bar.title = task.name + ' (' + task._orgTask.start + ' ~ ' + task._orgTask.end + ')';

          const avEl = document.createElement('span');
          avEl.className   = 'bar-avatar';
          avEl.textContent = (task.assignee || '·').slice(0, 1);
          bar.appendChild(avEl);

          const nameEl = document.createElement('span');
          nameEl.style.cssText = 'overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0';
          nameEl.textContent   = task.name;
          bar.appendChild(nameEl);

          if (task.progress) {
            const prog = document.createElement('span');
            prog.className   = 'bar-progress';
            prog.textContent = task.progress + '%';
            bar.appendChild(prog);
          }

          bar.addEventListener('click', () => openTask(task));
          bw.appendChild(bar);
          row.appendChild(bw);
        }

        rowsEl.appendChild(row);
      });
    }

    /* ── 스크롤 동기화 ── */
    ganttBody.addEventListener('scroll', () => {
      taskBody.scrollTop  = ganttBody.scrollTop;
      ganttHdr.scrollLeft = ganttBody.scrollLeft;
    });
    taskBody.addEventListener('scroll', () => { ganttBody.scrollTop = taskBody.scrollTop; });

    function renderAll() { renderHeader(); renderTaskList(); renderGanttRows(); }
    renderAll();

    // 기준일(오늘 선)이 보이도록 가로 스크롤 위치를 맞춘다
    function scrollToBase() {
      const vc = getViewConfig();
      if (vc.todayCol < 0) return;
      ganttBody.scrollLeft = Math.max(0, vc.todayCol * vc.colW - ganttBody.clientWidth / 2);
      ganttHdr.scrollLeft  = ganttBody.scrollLeft;
    }
    scrollToBase();

    return {
      setViewUnit(unit) { viewUnit = unit; renderAll(); scrollToBase(); },
      refresh: renderAll,
      element: wrapper,
    };
  };

})(window);
