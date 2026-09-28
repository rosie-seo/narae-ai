/* ============================================================
   조직 데이터 (3 depth)
   depth0 부서(leaf) — 현재 조직은 부서 아래 하위 조직이 없는 평면 구조
   ============================================================ */
const ORG = [
  { name:"경영진", members:[
    { name:"권영준", role:"대표", position:"경영 총괄",   email:"yj.kwon@ppsystem.co.kr", phone:"02-1234-0101" },
    { name:"박석준", role:"고문", position:"경영 자문",   email:"sj.park@ppsystem.co.kr", phone:"02-1234-0102" },
  ], tasks:[
    { title:"2026년 사업계획 수립 및 이사회 보고", status:"done",     owner:"권영준", start:"2026-01-05", end:"2026-02-27" },
    { title:"나래 AI 포털 사업 파트너십 체결",     status:"progress", owner:"권영준", start:"2026-08-03", end:"2026-11-27" },
    { title:"2027년 중장기 성장 전략 수립",        status:"wait",     owner:"권영준", start:"2026-10-12", end:"2026-12-18" },
    { title:"공공 조달 진출 자문 및 기준 검토",    status:"done",     owner:"박석준", start:"2026-03-02", end:"2026-05-29" },
    { title:"기술 투자 유치 자문",                 status:"progress", owner:"박석준", start:"2026-09-01", end:"2026-12-11" },
    { title:"조직 운영 체계 자문",                 status:"wait",     owner:"박석준", start:"2026-11-02", end:"2026-12-24" },
  ]},

  { name:"경영지원", members:[
    { name:"전하나", role:"과장", position:"인사·총무", email:"hn.jeon@ppsystem.co.kr", phone:"02-1234-0201" },
  ], tasks:[
    { title:"2026년 상반기 채용 계획 수립 및 공고", status:"done",     owner:"전하나", start:"2026-02-02", end:"2026-04-30" },
    { title:"연차·근태 관리 시스템 전환",           status:"done",     owner:"전하나", start:"2026-05-04", end:"2026-07-31" },
    { title:"사내 규정 개정 (재택·유연근무)",       status:"progress", owner:"전하나", start:"2026-08-17", end:"2026-10-16" },
    { title:"하반기 인사평가 운영",                 status:"progress", owner:"전하나", start:"2026-09-07", end:"2026-11-20" },
    { title:"2027년 예산 편성 취합",                status:"wait",     owner:"전하나", start:"2026-10-19", end:"2026-12-11" },
  ]},

  { name:"영업", members:[
    { name:"윤정현", role:"부장",   position:"영업 총괄", email:"jh.yoon@ppsystem.co.kr", phone:"02-1234-0301" },
    { name:"홍길동", role:"매니저", position:"공공 영업", email:"gd.hong@ppsystem.co.kr", phone:"02-1234-0302" },
  ], tasks:[
    { title:"공공기관 연간 영업 계획 수립",   status:"done",     owner:"윤정현", start:"2026-01-12", end:"2026-03-13" },
    { title:"상반기 수주 실적 분석",          status:"done",     owner:"윤정현", start:"2026-06-01", end:"2026-07-10" },
    { title:"나래 AI 포털 조달 등록 추진",    status:"progress", owner:"윤정현", start:"2026-07-01", end:"2026-10-30" },
    { title:"주요 고객사 분기 미팅 운영",     status:"progress", owner:"윤정현", start:"2026-09-01", end:"2026-12-18" },
    { title:"파트너 채널 확대 협약",          status:"wait",     owner:"윤정현", start:"2026-10-05", end:"2026-12-04" },
    { title:"전시회 부스 운영 및 리드 확보",  status:"done",     owner:"홍길동", start:"2026-04-06", end:"2026-05-29" },
    { title:"지자체 대상 제안서 작성",        status:"progress", owner:"홍길동", start:"2026-08-10", end:"2026-10-09" },
    { title:"고객사 요구사항 정리 및 전달",   status:"progress", owner:"홍길동", start:"2026-09-14", end:"2026-11-13" },
    { title:"견적·계약 문서 표준화",          status:"wait",     owner:"홍길동", start:"2026-10-26", end:"2026-12-11" },
    { title:"고객 만족도 조사 실시",          status:"wait",     owner:"홍길동", start:"2026-11-02", end:"2026-12-18" },
  ]},

  { name:"AI 기획", members:[
    { name:"김수현", role:"사원", position:"서비스 기획",     email:"sh.kim@ppsystem.co.kr", phone:"02-1234-0401" },
    { name:"서지애", role:"사원", position:"프로덕트 디자인", email:"rosie@ppsystem.co.kr",  phone:"02-1234-0402" },
  ], tasks:[
    { title:"경쟁 서비스 벤치마킹",                   status:"done",     owner:"김수현", start:"2026-03-09", end:"2026-04-10" },
    { title:"나래 AI 업무 포털 기능 정의서 작성",     status:"done",     owner:"김수현", start:"2026-02-02", end:"2026-04-17" },
    { title:"사용자 인터뷰 및 요구사항 정리",         status:"done",     owner:"김수현", start:"2026-05-11", end:"2026-06-26" },
    { title:"보고 자동화 시나리오 설계",              status:"progress", owner:"김수현", start:"2026-08-03", end:"2026-10-16" },
    { title:"AI 응답 품질 기준 정의",                 status:"progress", owner:"김수현", start:"2026-09-21", end:"2026-11-27" },
    { title:"포털 릴리즈 노트 정리",                  status:"wait",     owner:"김수현", start:"2026-10-19", end:"2026-12-24" },
    { title:"KRDS 컴포넌트 가이드 정리",              status:"done",     owner:"서지애", start:"2026-04-06", end:"2026-05-22" },
    { title:"로그인·회원가입 화면 설계",              status:"done",     owner:"서지애", start:"2026-06-01", end:"2026-07-24" },
    { title:"업무보고·주간보고 화면 설계",            status:"progress", owner:"서지애", start:"2026-08-10", end:"2026-10-23" },
    { title:"WBS 간트 컴포넌트 개선",                 status:"progress", owner:"서지애", start:"2026-09-07", end:"2026-11-06" },
    { title:"로그인 영역 QA 시나리오 작성",           status:"progress", owner:"서지애", start:"2026-09-21", end:"2026-10-16" },
    { title:"포털 디자인 시스템 2.0 정비",            status:"wait",     owner:"서지애", start:"2026-11-02", end:"2026-12-24" },
  ]},

  { name:"AI 연구소", members:[
    { name:"이동학", role:"이사",   position:"연구 총괄",         email:"dh.lee@ppsystem.co.kr",  phone:"02-1234-0501" },
    { name:"조기정", role:"과장",   position:"모델 개발",         email:"gj.jo@ppsystem.co.kr",   phone:"02-1234-0502" },
    { name:"권자영", role:"연구원", position:"NLP 연구",          email:"jy.kwon@ppsystem.co.kr", phone:"02-1234-0503" },
    { name:"김영지", role:"연구원", position:"데이터 엔지니어링", email:"yj.kim@ppsystem.co.kr",  phone:"02-1234-0504" },
  ], tasks:[
    { title:"AI 연구 로드맵 수립",              status:"done",     owner:"이동학", start:"2026-01-05", end:"2026-02-27" },
    { title:"상반기 연구 성과 보고",            status:"done",     owner:"이동학", start:"2026-06-15", end:"2026-07-17" },
    { title:"모델 서빙 인프라 도입 검토",       status:"progress", owner:"이동학", start:"2026-08-17", end:"2026-11-13" },
    { title:"연구 인력 채용 및 배치",           status:"progress", owner:"이동학", start:"2026-09-01", end:"2026-10-30" },
    { title:"산학 협력 과제 발굴",              status:"wait",     owner:"이동학", start:"2026-10-12", end:"2026-12-18" },
    { title:"모델 평가 지표 체계 수립",         status:"done",     owner:"조기정", start:"2026-03-02", end:"2026-05-15" },
    { title:"프롬프트 템플릿 표준화",           status:"done",     owner:"조기정", start:"2026-05-18", end:"2026-06-30" },
    { title:"업무보고 요약 모델 파인튜닝",      status:"progress", owner:"조기정", start:"2026-07-06", end:"2026-10-23" },
    { title:"RAG 파이프라인 고도화",            status:"progress", owner:"조기정", start:"2026-09-07", end:"2026-11-27" },
    { title:"추론 비용 최적화",                 status:"wait",     owner:"조기정", start:"2026-10-26", end:"2026-12-24" },
    { title:"한국어 공문서 코퍼스 구축",        status:"done",     owner:"권자영", start:"2026-02-09", end:"2026-04-24" },
    { title:"논문 리뷰 및 기술 동향 정리",      status:"done",     owner:"권자영", start:"2026-05-04", end:"2026-06-12" },
    { title:"문서 요약 성능 실험",              status:"progress", owner:"권자영", start:"2026-08-24", end:"2026-10-30" },
    { title:"도메인 용어 사전 구축",            status:"progress", owner:"권자영", start:"2026-09-14", end:"2026-11-20" },
    { title:"AI 응답 검증 룰셋 설계",           status:"wait",     owner:"권자영", start:"2026-11-09", end:"2026-12-24" },
    { title:"학습 데이터 수집 자동화",          status:"done",     owner:"김영지", start:"2026-03-16", end:"2026-05-29" },
    { title:"데이터 라벨링 가이드 작성",        status:"done",     owner:"김영지", start:"2026-06-08", end:"2026-07-24" },
    { title:"벡터 DB 인덱싱 파이프라인 구축",   status:"progress", owner:"김영지", start:"2026-08-10", end:"2026-10-16" },
    { title:"모델 학습 실험 관리 도구 도입",    status:"progress", owner:"김영지", start:"2026-09-21", end:"2026-11-13" },
    { title:"데이터 품질 모니터링 지표 설계",   status:"wait",     owner:"김영지", start:"2026-10-19", end:"2026-12-11" },
  ]},

  { name:"미들웨어", members:[
    { name:"김기운", role:"이사",   position:"플랫폼 총괄",   email:"gw.kim@ppsystem.co.kr", phone:"02-1234-0601" },
    { name:"송진혁", role:"과장",   position:"미들웨어 개발", email:"jh.song@ppsystem.co.kr", phone:"02-1234-0602" },
    { name:"조민국", role:"연구원", position:"연동·인프라",   email:"mg.jo@ppsystem.co.kr",  phone:"02-1234-0603" },
  ], tasks:[
    { title:"미들웨어 플랫폼 아키텍처 수립",    status:"done",     owner:"김기운", start:"2026-01-12", end:"2026-03-27" },
    { title:"상반기 플랫폼 안정화 결과 보고",   status:"done",     owner:"김기운", start:"2026-06-22", end:"2026-07-24" },
    { title:"멀티테넌시 구조 설계",             status:"progress", owner:"김기운", start:"2026-08-03", end:"2026-11-06" },
    { title:"보안 인증(GS) 준비",               status:"progress", owner:"김기운", start:"2026-09-01", end:"2026-12-18" },
    { title:"기술 지원 체계 정비",              status:"wait",     owner:"김기운", start:"2026-10-12", end:"2026-12-04" },
    { title:"API 게이트웨이 구축",              status:"done",     owner:"송진혁", start:"2026-02-16", end:"2026-05-08" },
    { title:"운영 장애 대응 매뉴얼 작성",       status:"done",     owner:"송진혁", start:"2026-05-25", end:"2026-06-26" },
    { title:"레거시 시스템 연동 어댑터 개발",   status:"progress", owner:"송진혁", start:"2026-07-13", end:"2026-10-23" },
    { title:"대용량 처리 성능 최적화",          status:"progress", owner:"송진혁", start:"2026-09-14", end:"2026-11-27" },
    { title:"배포 자동화 파이프라인 정비",      status:"wait",     owner:"송진혁", start:"2026-10-26", end:"2026-12-18" },
    { title:"개발 환경 컨테이너 표준화",        status:"done",     owner:"조민국", start:"2026-03-23", end:"2026-05-15" },
    { title:"취약점 점검 및 조치",              status:"done",     owner:"조민국", start:"2026-06-01", end:"2026-07-10" },
    { title:"사내 시스템 계정 연동(SSO) 개발",  status:"progress", owner:"조민국", start:"2026-08-17", end:"2026-10-30" },
    { title:"로그 수집·모니터링 구성",          status:"progress", owner:"조민국", start:"2026-09-07", end:"2026-11-20" },
    { title:"API 문서 자동화 도입",             status:"wait",     owner:"조민국", start:"2026-11-02", end:"2026-12-24" },
  ]},
];

/* ---- 인원 합산 + id 부여 + 부모 추적 ---- */
let _id = 0;
function prepare(nodes, depth, parent) {
  let total = 0;
  for (const n of nodes) {
    n._id     = "n" + (_id++);
    n._depth  = depth;
    n._parent = parent || null;
    if (n.children && n.children.length) {
      n.head = prepare(n.children, depth + 1, n);
    } else {
      n.head = n.members ? n.members.length : 0;
    }
    total += n.head;
  }
  return total;
}
const TOTAL_HEAD = prepare(ORG, 0, null);
const TOTAL_SIL  = ORG.length;

/* ---- 엘리먼트 ---- */
const tree    = document.getElementById("navTree");
const empty   = document.getElementById("navEmpty");
const search  = document.getElementById("navSearch");
const clear   = document.getElementById("navClear");
const summary = document.getElementById("navSummary");

const caretSVG = '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true"><path d="M6 8L10 12L14 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const arrowSVG = '<svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true"><path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

let selectedId = null;
let currentView = 'list';

/* ---- 헬퍼 ---- */
function getAllLeaves(node) {
  if (!node.children || node.children.length === 0) return [node];
  return node.children.flatMap(c => getAllLeaves(c));
}

/* 직위 순서 — 조직도 표시·리더 판정에 공용으로 사용 */
const ROLE_ORDER = ["대표", "고문", "이사", "부장", "과장", "매니저", "연구원", "사원", "담당자"];
function roleRank(role) {
  const i = ROLE_ORDER.indexOf(role);
  return i < 0 ? ROLE_ORDER.length : i;
}

/* 부서의 대표 담당자(리더) — 직위가 가장 높은 구성원 */
function getLeafLead(leaf) {
  const members = (leaf.members || []).slice();
  if (!members.length) return null;
  members.sort((a, b) => roleRank(a.role) - roleRank(b.role));
  return members[0];
}

// 조직도 노드(실/관/담당관) 아래에 속한 모든 근무자 이름을 재귀적으로 모은다.
// index.html의 업무 현황(간트)·업무 캘린더가 조직도 선택 범위와 데이터를 맞출 때 공용으로 사용.
function collectMemberNames(node) {
  if (node.members) return node.members.map(m => m.name);
  if (node.children) return node.children.flatMap(collectMemberNames);
  return [];
}

function findNodeById(id) {
  function search(nodes) {
    for (const n of nodes) {
      if (n._id === id) return n;
      if (n.children) { const f = search(n.children); if (f) return f; }
    }
    return null;
  }
  return search(ORG);
}

function openAncestorsOf(node) {
  let cur = node._parent;
  while (cur) {
    const li = tree.querySelector('[data-id="' + cur._id + '"]');
    if (li && !li.classList.contains('is-open')) toggle(li);
    cur = cur._parent;
  }
}

/* ---- 트리 렌더 ---- */
function renderNodes(nodes) {
  const ul = document.createElement("ul");
  ul.setAttribute("role", "group");
  for (const n of nodes) {
    const isLeaf = !n.children || n.children.length === 0;

    const li = document.createElement("li");
    li.className    = "nav-node nav-node--depth" + n._depth + (isLeaf ? " nav-node--leaf" : "");
    li.dataset.id   = n._id;
    li.dataset.name = n.name;
    li.setAttribute("role", "treeitem");
    if (!isLeaf) li.setAttribute("aria-expanded", "false");

    const row = document.createElement("div");
    row.className = "nav-node__row";
    row.style.setProperty("--depth", n._depth);
    row.tabIndex  = 0;
    row.innerHTML =
      '<span class="nav-node__caret">' + caretSVG + '</span>' +
      '<span class="nav-node__label">' + escapeHtml(n.name) + '</span>' +
      '<span class="nav-node__count">' + n.head + '명</span>';

    row.addEventListener("click", () => {
      if (isLeaf) {
        activateNode(li, row, n);
      } else {
        toggle(li);
        activateNode(li, row, n);
      }
    });
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); row.click(); }
    });

    li.appendChild(row);
    if (!isLeaf) {
      const box = document.createElement("div");
      box.className = "nav-node__children";
      box.appendChild(renderNodes(n.children));
      li.appendChild(box);
    }
    ul.appendChild(li);
  }
  return ul;
}

function toggle(li) {
  const open = li.classList.toggle("is-open");
  li.setAttribute("aria-expanded", open ? "true" : "false");
}

/* 사이드바 선택 상태 갱신 + 컨텐츠 렌더 */
function activateNode(li, row, nodeData) {
  if (selectedId) {
    const prev = tree.querySelector('[data-id="' + selectedId + '"] > .nav-node__row');
    if (prev) prev.classList.remove("is-selected");
  }
  row.classList.add("is-selected");
  selectedId = li.dataset.id;
  if (currentView === 'org') {
    navigateOrgChartTo(nodeData);
  } else {
    renderContent(nodeData);
  }
}

/* 카드 클릭으로 해당 노드로 이동 (사이드바 + 컨텐츠 동기화) */
function selectNode(nodeData) {
  openAncestorsOf(nodeData);
  const navLi = tree.querySelector('[data-id="' + nodeData._id + '"]');
  if (!navLi) return;
  const navRow = navLi.querySelector(':scope > .nav-node__row');
  if (nodeData.children && !navLi.classList.contains('is-open')) toggle(navLi);
  navRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  activateNode(navLi, navRow, nodeData);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}

/* 이름 해시 → av-0 ~ av-4 (KRDS 팔레트) */
function ownerColorClass(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  return 'av-' + (Math.abs(h) % 4);
}

/* ---- 콘텐츠 렌더 ---- */
function getBreadcrumbPath(node) {
  const path = [];
  let cur = node;
  while (cur) { path.unshift(cur.name); cur = cur._parent; }
  return path;
}

function memberCardHTML(m) {
  return `<li class="member-card">
    <span class="member-card__avatar ${ownerColorClass(m.name)}">${escapeHtml(m.name.slice(0, 1))}</span>
    <div class="member-card__info">
      <p class="member-card__name">${escapeHtml(m.name)}</p>
      <p class="member-card__position">${escapeHtml(m.position)}</p>
      <p class="member-card__contact">
        ${escapeHtml(m.email)}<span class="member-card__sep">|</span>${escapeHtml(m.phone)}
      </p>
    </div>
  </li>`;
}

const STATUS_LABEL = { wait:"대기", progress:"진행중", done:"종결" };
const STATUS_CLASS = { wait:"krds-badge bg-light-gray", progress:"krds-badge bg-light-secondary", done:"krds-badge bg-light-success" };

/* ── 세부 과업 생성 (결정론적 의사난수) ─────────────────────────── */
function getSubtasks(task) {
  // 타이틀 기반 시드 – 같은 업무는 항상 같은 세부과업
  let h = 0;
  for (let i = 0; i < task.title.length; i++)
    h = (Math.imul(31, h) + task.title.charCodeAt(i)) | 0;
  const r = () => {
    h = (Math.imul(h ^ (h >>> 16), 0x45d9f3b)) | 0;
    return (h >>> 0) / 0x100000000;
  };

  const TYPES = ['내부 업무', '외부 업무', '협업 업무', '지원 업무', '검토 업무', '조정 업무'];
  const RISKS = ['선행업무 미완료', '일정지연', '병목', '리소스 부족', '검토 지연', '이해관계자 미합의', '예산 부족', '법령 미정비'];
  const PRIOS = ['high', 'mid', 'low'];

  // 업무 진행 단계 세트 – 각 8단계
  const PHASE_SETS = [
    ['현황 조사 및 기초분석', '과제 범위 확정', '추진 계획 수립', '관련 부서 협의', '초안 작성', '초안 검토 및 수정', '최종안 확정', '최종 보고 및 결재'],
    ['수요 조사', '예산 검토 및 확보', '추진 일정 확정', '담당자 배정', '실행', '중간 점검', '성과 분석', '보고 및 환류'],
    ['법령·규정 검토', '문제 현황 파악', '기획안 작성', '내부 검토', '의견 수렴', '수정 및 보완', '부서장 결재', '완료 보고'],
    ['사전 준비 및 자료수집', '분석 및 방안 도출', '부서 간 조율', '계획 확정', '1차 실행', '중간 모니터링', '2차 실행 및 보완', '결과 보고'],
    ['목표 설정', '세부 추진과제 도출', '담당자 배정', '착수 보고', '1단계 진행', '중간 평가', '2단계 진행', '완료 및 성과 평가'],
    ['현안 파악 및 이슈 정리', '대응 방향 수립', '내부 검토 회의', '외부 기관 협의', '방안 확정', '시범 적용', '결과 분석', '제도화 및 보고'],
    ['기초 자료 수집', '현황 분석', '개선 방향 도출', '관계 부서 의견 청취', '개선안 작성', '검토 및 수정', '승인 및 확정', '이행 및 사후관리'],
    ['착수 준비', '요구사항 분석', '계획 수립', '1차 추진', '점검 및 조정', '2차 추진', '검수 및 확인', '완료 보고 및 결재'],
  ];

  const phaseSet = PHASE_SETS[Math.floor(r() * PHASE_SETS.length)];
  const count    = 5 + Math.floor(r() * 4);  // 5~8개
  const phases   = phaseSet.slice(0, count);

  const startMs   = new Date(task.start).getTime();
  const endMs     = new Date(task.end).getTime();
  const span      = (endMs - startMs) / count;
  const doneFrac  = task.status === 'done' ? 1 : task.status === 'progress' ? 0.25 + r() * 0.4 : 0;
  const doneCount = Math.round(count * doneFrac);

  return phases.map((phase, i) => {
    const subEnd = new Date(startMs + span * (i + 1)).toISOString().slice(0, 10);
    const isDone = i < doneCount;
    const isCurr = !isDone && i === doneCount;

    let stage, approval;
    if (isDone)      { stage = '완료'; approval = '결재완료'; }
    else if (isCurr) { stage = '검토'; approval = '상신완료'; }
    else             { stage = '접수';  approval = '미상신'; }

    return {
      name:     phase,
      type:     TYPES[Math.floor(r() * TYPES.length)],
      assignee: task.owner,
      deadline: subEnd,
      stage,
      approval,
      priority: PRIOS[Math.floor(r() * PRIOS.length)],
      risks:    isDone ? [] : [RISKS[Math.floor(r() * RISKS.length)]],
    };
  });
}

function taskCardHTML(t) {
  return `<li class="task-card">
    <span class="${STATUS_CLASS[t.status]}">${STATUS_LABEL[t.status]}</span>
    <span class="task-card__title">${escapeHtml(t.title)}</span>
    <span class="task-card__meta">
      <span class="task-card__owner">${escapeHtml(t.owner)}</span>
      <span class="task-card__sep">·</span>
      <span class="task-card__date">${escapeHtml(t.start)} ~ ${escapeHtml(t.end)}</span>
    </span>
    <span class="task-card__arrow">${arrowSVG}</span>
  </li>`;
}

/* ============================================================
   보고 — 업무보고(직접 작성) → AI 주간·월간보고
   ------------------------------------------------------------
   · 업무보고   : 담당자가 자신의 WBS 항목별 추진 실적을 직접 작성한다.
   · 주간·월간보고 : 작성된 업무보고와 업무 데이터를 근거로 AI가 생성한다.
   조직도·업무 차트와 동일한 ORG 데이터를 그대로 공유한다.
   ============================================================ */
const REPORT_STATUS_LABEL = { submitted: "제출완료", draft: "작성중", missing: "미제출" };
const REPORT_KIND_LABEL = { work: "업무보고", weekly: "주간보고", monthly: "월간보고" };
const REPORT_STATUS_CLASS = { submitted: "krds-badge bg-light-success", draft: "krds-badge bg-light-secondary", missing: "krds-badge bg-light-gray" };

/* ── 테스트 계정 ──
   권한별로 하나씩 발급한 데모 계정. 비밀번호는 모두 1234.
   실제 인증이 붙기 전까지 이 목록으로 로그인 여부와 권한을 판단한다. */
const TEST_PASSWORD = "1234";
const PERMISSION_LABEL = { admin: "관리자", chief: "부서장", manager: "과장", staff: "담당자" };
const TEST_ACCOUNTS = [
  { loginId: "admin",   permission: "admin",   userName: "김기운", note: "시스템 전체 관리" },
  { loginId: "chief",   permission: "chief",   userName: "이동학", note: "부서 단위 보고 총괄" },
  { loginId: "manager", permission: "manager", userName: "조기정", note: "팀 보고 검토" },
  // 담당자 계정은 관리자 승인 후 임시 비밀번호로 발급된 상태 → 최초 로그인 시 재설정 안내
  { loginId: "staff",   permission: "staff",   userName: "서지애", note: "본인 업무보고 작성", temporary: true },
];
const DEFAULT_USER_NAME = "서지애";   // 로그인 정보가 없을 때 보여줄 기본 사용자

function findTestAccount(loginId) {
  const id = String(loginId || "").trim().toLowerCase();
  return TEST_ACCOUNTS.find(a => a.loginId === id) || null;
}

/* ── 비밀번호 상태 ──
   { "staff": { password, changedAt, issuedAt } } 형태로 브라우저에 보관한다.
   임시 비밀번호로 발급된 계정은 최초 로그인 때 재설정 안내 화면을 지난다. */
const PW_STATE_KEY = "krds_password_state_v1";
const TEMP_PASSWORD_DAYS = 7;

function loadPwStates() {
  try { return JSON.parse(localStorage.getItem(PW_STATE_KEY)) || {}; }
  catch (e) { return {}; }
}

function getPwState(loginId) {
  return loadPwStates()[String(loginId || "").trim().toLowerCase()] || {};
}

function savePwState(loginId, patch) {
  const key = String(loginId || "").trim().toLowerCase();
  const all = loadPwStates();
  all[key] = Object.assign({}, all[key], patch);
  try { localStorage.setItem(PW_STATE_KEY, JSON.stringify(all)); } catch (e) {}
  return all[key];
}

/* 현재 유효한 비밀번호 — 바꾸지 않았다면 발급된 임시 비밀번호 */
function passwordOf(loginId) {
  return getPwState(loginId).password || TEST_PASSWORD;
}

/* 임시 비밀번호를 아직 바꾸지 않은 계정인지 */
function isTempPassword(loginId) {
  const account = findTestAccount(loginId);
  if (!account || !account.temporary) return false;
  return !getPwState(loginId).changedAt;
}

/* 임시 비밀번호 발급일 · 만료일(발급 후 7일) */
function tempPasswordDates(loginId) {
  const state = getPwState(loginId);
  const issued = state.issuedAt ? parseISODate(state.issuedAt) : new Date();
  const expire = new Date(issued.getFullYear(), issued.getMonth(), issued.getDate() + TEMP_PASSWORD_DAYS);
  return { issuedAt: fmtYMD(issued), expiresAt: fmtYMD(expire) };
}

function changePassword(loginId, newPassword) {
  const now = new Date();
  savePwState(loginId, {
    password: newPassword,
    changedAt: fmtYMD(now) + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0"),
  });
  clearLoginFails(loginId);
}

/* 아이디·비밀번호 확인 → { ok, account, reason } */
function authenticate(loginId, password) {
  const account = findTestAccount(loginId);
  if (!account) return { ok: false, reason: "unknown" };
  if (String(password) !== passwordOf(account.loginId)) return { ok: false, reason: "password" };
  return { ok: true, account };
}

function findMemberProfile(name) {
  let found = null;
  ORG.forEach(sil => getAllLeaves(sil).forEach(leaf => (leaf.members || []).forEach(m => {
    if (!found && m.name === name) {
      found = {
        name: m.name, role: m.role, position: m.position,
        email: m.email || "", phone: m.phone || "",
        dept: leaf.name, sil: sil.name,
      };
    }
  })));
  return found;
}

/* 현재 로그인한 사용자 이름 (로그인 전이면 기본 사용자) */
function getCurrentUserName() {
  const auth = getAuthState();
  return (auth && auth.userName) || DEFAULT_USER_NAME;
}

/* 한국어 조사 — 받침이 있으면 "은", 없으면 "는" */
function josaEunNeun(word) {
  const last = String(word || "").trim().slice(-1);
  const code = last.charCodeAt(0);
  if (!last || code < 0xac00 || code > 0xd7a3) return "는";
  return (code - 0xac00) % 28 === 0 ? "는" : "은";
}

/* 소속 표기 — 상위 조직과 부서명이 같으면 한 번만 보여 준다 */
function teamLabel(sil, dept) {
  if (!sil) return dept || "";
  if (!dept || sil === dept) return sil;
  return sil + " · " + dept;
}

function getCurrentUser() {
  const auth = getAuthState();
  const name = getCurrentUserName();
  const permission = (auth && auth.permission) || "staff";
  const profile = findMemberProfile(name) ||
    { name, role: "담당자", position: "", dept: "", sil: "" };
  return Object.assign({}, profile, {
    permission,
    permissionLabel: PERMISSION_LABEL[permission] || PERMISSION_LABEL.staff,
    loginId: (auth && auth.loginId) || "",
  });
}

/* 권한 확인 — 상위 권한은 하위 권한을 포함한다 */
const PERMISSION_RANK = { staff: 1, manager: 2, chief: 3, admin: 4 };
function hasPermission(minPermission) {
  const me = (PERMISSION_RANK[getCurrentUser().permission] || 0);
  return me >= (PERMISSION_RANK[minPermission] || 0);
}

/* ── 내 WBS 항목 ──
   홈 화면 "업무 현황"(간트)이 보여주는 2026년 구간과 같은 기준을 쓴다.
   (index.html의 GANTT_START_DATE/GANTT_DATA_DAYS와 동일한 값. 인라인 스크립트의
    전역 const와 이름이 충돌하지 않도록 별도 이름을 사용한다.) */
const WBS_WINDOW_START = new Date(2026, 0, 1);
const WBS_WINDOW_DAYS  = 365;

function isTaskInWbsWindow(t) {
  const endOff   = Math.round((parseISODate(t.end)   - WBS_WINDOW_START) / 86400000);
  const startOff = Math.round((parseISODate(t.start) - WBS_WINDOW_START) / 86400000);
  return endOff >= 0 && startOff < WBS_WINDOW_DAYS;
}

function getWbsTasksOf(ownerName) {
  return getAllTasksFlat()
    .filter(row => row.task.owner === ownerName && isTaskInWbsWindow(row.task))
    .map(row => row.task)
    .sort((a, b) => a.start.localeCompare(b.start));
}

/* 마감일이 보고 기간 시작 전인데 아직 종결되지 않은 항목 = 이월 항목 */
function isTaskCarriedOver(t, periodStart) {
  return t.status !== "done" && t.end < periodStart;
}

/* 보고 기간의 보고 대상 WBS —
   ① 그 기간에 일정이 걸쳐 있는 항목 ② 마감이 지났지만 아직 끝나지 않아 이월된 항목.
   기간이 바뀌면 대상 항목도 함께 바뀐다. */
function getWbsTasksOfInPeriod(ownerName, periodStart, periodEnd) {
  const inPeriod = [], carried = [];
  getWbsTasksOf(ownerName).forEach(t => {
    if (t.start <= periodEnd && t.end >= periodStart) inPeriod.push(t);
    else if (isTaskCarriedOver(t, periodStart)) carried.push(t);
  });
  carried.sort((a, b) => a.end.localeCompare(b.end));
  return inPeriod.concat(carried);
}

/* ── 업무보고 저장본 (브라우저 로컬) ──
   내가 직접 작성해 저장한 업무보고의 보관함. 보고 기간 한 건 = 저장본 한 건.
   [{ id, author, dept, sil, periodStart, periodEnd, savedAt, submitted,
      entries: { "담당자|업무명": "작성 내용" } }, ...]
   주간·월간보고(AI)는 이 저장본을 근거 자료로 읽어가기만 한다. */
const WORK_REPORT_STORAGE_KEY = "krds_work_reports_v1";
const WORK_REPORT_LEGACY_KEY  = "krds_work_report_v1";   // 단일 초안을 쓰던 이전 버전

/* 저장본은 로그인한 사용자별로 나눠 보관한다 (계정을 바꾸면 내 보고만 보이도록) */
function workReportStorageKey() {
  return WORK_REPORT_STORAGE_KEY + "::" + getCurrentUserName();
}

function workReportTaskKey(t) { return t.owner + "|" + t.title; }

function loadWorkReports() {
  let list = [];
  try { list = JSON.parse(localStorage.getItem(workReportStorageKey())) || []; }
  catch (e) { list = []; }
  if (!Array.isArray(list)) list = [];

  // 이전 버전(단일 초안)에 저장해 둔 보고가 있으면 목록으로 옮겨 온다
  if (!list.length) {
    try {
      const legacy = JSON.parse(localStorage.getItem(WORK_REPORT_LEGACY_KEY));
      if (legacy && legacy.entries && legacy.period) {
        list = [{
          id: "wrs-" + legacy.period.start,
          author: getCurrentUserName(),
          periodStart: legacy.period.start,
          periodEnd: legacy.period.end,
          savedAt: legacy.savedAt || legacy.period.end,
          submitted: !!legacy.submitted,
          entries: legacy.entries,
        }];
        saveWorkReports(list);
        localStorage.removeItem(WORK_REPORT_LEGACY_KEY);
      }
    } catch (e) { /* 이전 데이터가 없으면 그대로 진행 */ }
  }

  return list.sort((a, b) => b.periodStart.localeCompare(a.periodStart));
}

function saveWorkReports(list) {
  try { localStorage.setItem(workReportStorageKey(), JSON.stringify(list)); return true; }
  catch (e) { return false; }
}

/* 해당 보고 기간의 저장본 */
function getWorkReportOf(periodStart, periodEnd) {
  return loadWorkReports().find(r => r.periodStart === periodStart && r.periodEnd === periodEnd) || null;
}

/* 저장본 upsert — 같은 보고 기간이면 덮어쓴다 */
function upsertWorkReport(record) {
  const list = loadWorkReports().filter(r => !(r.periodStart === record.periodStart && r.periodEnd === record.periodEnd));
  list.push(record);
  saveWorkReports(list);
  return record;
}

function deleteWorkReport(periodStart, periodEnd) {
  saveWorkReports(loadWorkReports().filter(r => !(r.periodStart === periodStart && r.periodEnd === periodEnd)));
}

/* 보고 기간에 걸치는 저장본들의 작성 내용을 합친다.
   (주간보고는 저장본 1건, 월간보고는 그 달의 주간 저장본 여러 건을 근거로 삼는다) */
function getWorkReportEntriesInRange(periodStart, periodEnd) {
  const merged = {};
  loadWorkReports()
    .filter(r => r.periodStart <= periodEnd && r.periodEnd >= periodStart)
    .sort((a, b) => String(a.savedAt).localeCompare(String(b.savedAt)))  // 최근 저장본이 덮어쓰도록
    .forEach(r => Object.assign(merged, r.entries || {}));
  return merged;
}

/* 보고 기간에 걸치는 저장본 원본 — 최근 기간 순 */
function getWorkReportRecordsInRange(periodStart, periodEnd) {
  return loadWorkReports()
    .filter(r => r.periodStart <= periodEnd && r.periodEnd >= periodStart)
    .sort((a, b) => b.periodStart.localeCompare(a.periodStart));
}

/* 보고 기간에 걸치는 저장본들의 자유 기술(종합 의견) 모음 — 최근 기간 순 */
function getWorkReportFreeNotesInRange(periodStart, periodEnd) {
  return loadWorkReports()
    .filter(r => r.periodStart <= periodEnd && r.periodEnd >= periodStart)
    .filter(r => (r.freeNote || "").trim())
    .sort((a, b) => b.periodStart.localeCompare(a.periodStart))
    .map(r => ({ periodStart: r.periodStart, periodEnd: r.periodEnd, savedAt: r.savedAt, text: r.freeNote.trim() }));
}

/* 보고 기간에 걸치는 저장본 중 가장 최근 저장 시각 */
function getWorkReportSavedAtInRange(periodStart, periodEnd) {
  const inRange = loadWorkReports().filter(r => r.periodStart <= periodEnd && r.periodEnd >= periodStart);
  if (!inRange.length) return null;
  return inRange.map(r => r.savedAt).sort().pop();
}

/* 저장본 카드 (업무보고 목록) */
function workReportSavedCardHTML(rec) {
  const count = Object.keys(rec.entries || {}).filter(k => (rec.entries[k] || "").trim()).length;
  const statusClass = rec.submitted ? REPORT_STATUS_CLASS.submitted : REPORT_STATUS_CLASS.draft;
  const statusLabel = rec.submitted ? "제출완료" : "임시저장";
  return `<li class="task-card task-card--mine" data-period="${rec.periodStart}|${rec.periodEnd}">
    <span class="${statusClass}">${statusLabel}</span>
    <span class="task-card__title">${rec.periodStart} ~ ${rec.periodEnd} 업무보고</span>
    <span class="task-card__meta">
      <span class="task-card__owner">작성 항목 ${count}건</span>
      ${(rec.freeNote || "").trim() ? '<span class="task-card__sep">·</span><span class="task-card__date">종합 의견 포함</span>' : ''}
      <span class="task-card__sep">·</span>
      <span class="task-card__date">저장 ${escapeHtml(String(rec.savedAt))}</span>
    </span>
    <span class="task-card__arrow">${arrowSVG}</span>
  </li>`;
}

/* ── 보고 기준일 ──
   업무 데이터가 실제 오늘보다 과거에서 끝나는 데모 특성상, 오늘이 데이터 구간을
   지나 있으면 마지막 업무 종료일을 기준일로 삼는다. (홈 화면 업무 차트의 일간 뷰가
   maxTaskEnd를 기준으로 움직이는 것과 동일한 방식) */
let _reportBaseDate = null;
function getReportBaseDate() {
  if (_reportBaseDate) return _reportBaseDate;
  const today = new Date();
  let maxEnd = null;
  getAllTasksFlat().forEach(row => {
    const e = parseISODate(row.task.end);
    if (!maxEnd || e > maxEnd) maxEnd = e;
  });
  _reportBaseDate = (maxEnd && maxEnd < today) ? maxEnd : today;
  return _reportBaseDate;
}

/* ── 보고 기간 ── */
function getWeekRange(offsetWeeks) {
  const base = getReportBaseDate();
  const day = base.getDay(); // 0=일 ~ 6=토
  const diffToMonday = (day === 0 ? -6 : 1 - day);
  const monday = new Date(base.getFullYear(), base.getMonth(), base.getDate() + diffToMonday + offsetWeeks * 7);
  const friday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 4);
  return { start: monday, end: friday };
}

function getMonthRange(offsetMonths) {
  const base = getReportBaseDate();
  const first = new Date(base.getFullYear(), base.getMonth() + offsetMonths, 1);
  const last  = new Date(first.getFullYear(), first.getMonth() + 1, 0);
  return { start: first, end: last };
}

function fmtYMD(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

/* ── 담당자 단위 AI 보고 생성 (주간·월간 공용) ──
   보고서 한 건 = 담당자 한 명 + 그 사람의 WBS 항목. */
function buildMemberReports(kind, start, end, opts) {
  const o = opts || {};
  const periodStart = fmtYMD(start), periodEnd = fmtYMD(end);
  // 내가 저장해 둔 업무보고(해당 기간에 걸치는 저장본)를 근거 자료로 읽어 온다
  const myEntries = getWorkReportEntriesInRange(periodStart, periodEnd);
  const mySavedAt = getWorkReportSavedAtInRange(periodStart, periodEnd);
  const reports = [];

  ORG.forEach(sil => {
    getAllLeaves(sil).forEach(leaf => {
      (leaf.members || []).forEach(m => {
        const tasks = (leaf.tasks || []).filter(t => t.owner === m.name && isTaskInWbsWindow(t))
                                        .sort((a, b) => a.start.localeCompare(b.start));
        if (!tasks.length) return;

        // 담당자명을 시드로 한 결정적 제출 상태
        const h = hashSeed(m.name + "|" + leaf.name + (o.salt || ""));
        const r = h % 10;
        let status = r < 6 ? "submitted" : r < 8 ? "draft" : "missing";

        // 보고 일자 — 주간은 해당 주(월~금), 월간은 말일 직전 5일 중 결정적으로 배정
        const submittedDate = kind === "monthly"
          ? new Date(end.getFullYear(), end.getMonth(), end.getDate() - (h % 5))
          : new Date(start.getFullYear(), start.getMonth(), start.getDate() + (h % 5));
        let submittedAt = fmtYMD(submittedDate);

        // 내가 업무보고를 작성해 두었으면 내 보고는 항상 최신 제출 상태로 반영한다
        const isMine = m.name === getCurrentUserName();
        const myNoteCount = isMine
          ? tasks.filter(t => (myEntries[workReportTaskKey(t)] || "").trim()).length
          : 0;
        if (isMine && myNoteCount) {
          status = "submitted";
          if (mySavedAt) submittedAt = String(mySavedAt).slice(0, 10);
        }

        reports.push({
          id: (o.idPrefix || "wr-") + leaf._id + "-" + m.name,
          kind,
          scope: "member",
          author: m.name,
          authorRole: m.role,
          authorPosition: m.position,
          dept: leaf.name,
          sil: sil.name,
          // weekStart/weekEnd는 기간 필드(주간·월간 공용)
          weekStart: periodStart,
          weekEnd: periodEnd,
          periodStart,
          periodEnd,
          submittedAt,
          status,
          isMine,
          noteCount: myNoteCount,
          totalCount: tasks.length,
          doneCount: tasks.filter(t => t.status === "done").length,
          progressCount: tasks.filter(t => t.status === "progress").length,
          waitCount: tasks.filter(t => t.status === "wait").length,
          delayedCount: tasks.filter(t => t.status !== "done" && computeTaskRisk(t, end).tier !== "ok").length,
          tasks,
        });
      });
    });
  });

  return reports;
}

function buildWeeklyReports() {
  const { start, end } = getWeekRange(0);
  return buildMemberReports("weekly", start, end, { idPrefix: "wr-" });
}

function buildMonthlyReports() {
  const { start, end } = getMonthRange(0);
  return buildMemberReports("monthly", start, end, { idPrefix: "mr-", salt: "|month" });
}

/* 로그인 사용자 본인의 보고 */
function getMyReport(kind) {
  const me = getCurrentUser();
  const list = kind === "monthly" ? buildMonthlyReports() : buildWeeklyReports();
  return list.find(r => r.author === me.name && r.dept === me.dept) || null;
}

/* ── AI 보고 본문 생성 ──
   실제 모델 호출 대신, 담당자가 작성한 업무보고 텍스트와 업무 데이터(진척·마감)를
   근거로 요약·잘된 점·지연되는 점·다음 태스크를 결정적으로 구성한다. */
function buildAiReportContent(report, entries, records) {
  const notes = entries || {};
  const recs  = records || [];

  // 보고자가 업무보고에 직접 쓴 내용 — 저장본 단위로 항목별 작성 내용 + 종합 의견을 모은다
  const written = recs.map(rec => ({
    periodStart: rec.periodStart,
    periodEnd: rec.periodEnd,
    savedAt: rec.savedAt,
    freeNote: (rec.freeNote || "").trim(),
    items: Object.keys(rec.entries || {})
      .map(key => ({ title: key.split("|").slice(1).join("|"), text: (rec.entries[key] || "").trim() }))
      .filter(it => it.text),
  })).filter(w => w.freeNote || w.items.length);

  const freeform = written.filter(w => w.freeNote)
    .map(w => ({ periodStart: w.periodStart, periodEnd: w.periodEnd, savedAt: w.savedAt, text: w.freeNote }));
  // 진척·지연 판정은 보고 기간 종료일 시점을 기준으로 한다
  const asOf = parseISODate(report.periodEnd);
  const items = report.tasks.map(t => ({
    task: t,
    risk: computeTaskRisk(t, asOf),
    note: (notes[workReportTaskKey(t)] || "").trim(),
  }));

  /* 보고자가 쓴 문장이 앞에 오고, 업무 데이터로 확인된 사실이 뒤를 받치도록 한 문단으로 엮는다 */
  const good = items
    .filter(it => it.task.status === "done" || it.risk.tier === "ok")
    .map(it => {
      const fact = it.task.status === "done"
        ? "마감 " + it.task.end + " 기준 기간 내 종결했습니다."
        : it.task.status === "wait"
          ? "착수 예정일(" + it.task.start + ") 이전으로 일정 이상 없습니다."
          : "목표 대비 " + (it.risk.diff >= 0 ? "+" : "") + it.risk.diff + "%p로 정상 추진 중입니다.";
      return {
        task: it.task,
        note: it.note,
        fact,
        narrative: it.note ? it.note + " " + fact : fact,
      };
    });

  const delayed = items
    .filter(it => it.task.status !== "done" && it.risk.tier !== "ok")
    .sort((a, b) => (b.risk.severity || 0) - (a.risk.severity || 0))
    .map(it => {
      const fact = it.risk.daysToEnd < 0
        ? "마감 " + it.task.end + " 대비 " + (-it.risk.daysToEnd) + "일 초과했습니다."
        : "목표 대비 " + Math.abs(it.risk.diff) + "%p 지연, 마감까지 " + it.risk.daysToEnd + "일 남았습니다.";
      return {
        task: it.task,
        note: it.note,
        tier: it.risk.tier,
        fact,
        narrative: it.note ? it.note + " 다만 " + fact : fact,
      };
    });

  // 다음 태스크 — 각 업무의 세부 과업 중 아직 끝나지 않은 첫 단계
  const next = items
    .filter(it => it.task.status !== "done")
    .map(it => {
      const step = getSubtasks(it.task).find(s => s.stage !== "완료");
      return step ? { task: it.task, step } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.step.deadline.localeCompare(b.step.deadline));

  const periodWord = report.kind === "monthly" ? "이번 달" : "이번 주";
  const noteCount = items.filter(it => it.note).length;
  const sourceCount = noteCount + freeform.length;
  const overview =
    report.author + " " + report.authorRole + josaEunNeun(report.authorRole) + " " + periodWord + "(" + report.periodStart + " ~ " + report.periodEnd + ") " +
    "WBS " + report.totalCount + "건을 담당했습니다. 완료 " + report.doneCount + "건, 진행중 " + report.progressCount + "건, " +
    "대기 " + report.waitCount + "건이며 이 중 " + delayed.length + "건이 지연 구간에 있습니다." +
    (noteCount ? " 제출된 업무보고 " + noteCount + "건" + (freeform.length ? "과 종합 의견" : "") + "을 근거로 요약했습니다."
               : freeform.length ? " 작성자가 남긴 종합 의견을 함께 반영했습니다." : "");

  return { items, good, delayed, next, overview, noteCount, freeform, written, sourceCount };
}

/* 주간·월간보고 카드 (담당자 단위) */
function reportCardHTML(r) {
  const kindLabel = REPORT_KIND_LABEL[r.kind] || "주간보고";
  return `<li class="task-card${r.isMine ? ' task-card--mine' : ''}">
    <span class="${REPORT_STATUS_CLASS[r.status]}">${REPORT_STATUS_LABEL[r.status]}</span>
    <span class="task-card__title">
      ${escapeHtml(r.author)} ${escapeHtml(r.authorRole)} ${kindLabel}
      ${r.isMine ? '<span class="report-tag report-tag--mine">내 보고</span>' : ''}
      <span class="report-tag report-tag--ai">AI 생성</span>
    </span>
    <span class="task-card__meta">
      <span class="task-card__owner">${escapeHtml(r.dept)}</span>
      <span class="task-card__sep">·</span>
      <span class="task-card__date">WBS ${r.totalCount}건</span>
      ${r.delayedCount ? `<span class="task-card__sep">·</span><span class="task-card__date task-card__date--warn">지연 ${r.delayedCount}건</span>` : ''}
      <span class="task-card__sep">·</span>
      <span class="task-card__date">보고일 ${r.submittedAt}</span>
    </span>
    <span class="task-card__arrow">${arrowSVG}</span>
  </li>`;
}

function renderContent(node) {
  /* 제목 */
  const titleEl = document.querySelector(".organization-title");
  if (titleEl) titleEl.textContent = node.name;

  /* 상단 뱃지 인원수 */
  const badge = document.querySelector(".krds-badge.small");
  if (badge) badge.textContent = "총 " + node.head + "명";

  /* breadcrumb */
  const bc = document.querySelector("#breadcrumb .breadcrumb");
  if (bc) {
    const path = getBreadcrumbPath(node);
    bc.innerHTML = path.map(name =>
      `<li><a href="#" class="txt">${escapeHtml(name)}</a></li>`
    ).join("");
  }

  const isLeaf = !node.children || node.children.length === 0;
  if (isLeaf) {
    renderLeafMembers(node);
    renderLeafTasks(node);
  } else {
    renderParentMembers(node);
    renderParentTasks(node);
  }
}

/* 과 단위 팀원 구성 */
function renderLeafMembers(node) {
  const memberSection = document.querySelector(".member-section");
  if (!memberSection) return;
  if (!node.members) { memberSection.innerHTML = ""; return; }

  // 직위(대표·이사·과장·연구원 …)별로 묶어서 높은 직위부터 노출한다
  const roles = [...new Set(node.members.map(m => m.role))]
    .sort((a, b) => roleRank(a) - roleRank(b));

  memberSection.innerHTML = roles.map((role, i) => {
    const group = node.members.filter(m => m.role === role);
    const badge = i === 0 ? "outline-primary" : "outline-secondary";
    return `<div class="member-group">
      <div class="member-group__head">
        <span class="krds-badge ${badge}">${escapeHtml(role)}</span>
        ${group.length > 1 ? `<span class="member-group__count">(${group.length}명)</span>` : ""}
      </div>
      <ul class="member-list">${group.map(memberCardHTML).join("")}</ul>
    </div>`;
  }).join("");
}

/* 과 단위 연계과제 */
function attachTaskNav(containerEl, flatTasks) {
  containerEl.querySelectorAll('.task-card').forEach((card, i) => {
    const t = flatTasks[i];
    if (!t) return;
    card.addEventListener('click', () => {
      sessionStorage.setItem('krds_selected_task', JSON.stringify(t));
      window.location.href = '/resources/pages/operating-detail-dashboard.html';
    });
  });
}

function renderLeafTasks(node) {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;
  taskList.classList.remove("task-list--grouped");
  if (node.tasks && node.tasks.length) {
    taskList.innerHTML = node.tasks.map(taskCardHTML).join("");
    attachTaskNav(taskList, node.tasks);
  } else {
    taskList.innerHTML = `<li class="task-empty">등록된 연계과제가 없습니다.</li>`;
  }
}

/* 실/관 단위 — 하위 조직 카드 개요 */
function renderParentMembers(node) {
  const memberSection = document.querySelector(".member-section");
  if (!memberSection) return;

  const isDepth0 = node._depth === 0;
  const childLabel = isDepth0 ? "관" : "과";
  const totalTasks = getAllLeaves(node).reduce((s, l) => s + (l.tasks ? l.tasks.length : 0), 0);

  const statsHtml = `<div class="org-stats">
    <span class="org-stat"><b>${node.children.length}</b>개 ${childLabel}</span>
    <span class="org-stat__sep">·</span>
    <span class="org-stat"><b>${node.head}</b>명</span>
    <span class="org-stat__sep">·</span>
    <span class="org-stat">연계과제 <b>${totalTasks}</b>건</span>
  </div>`;

  const cardsHtml = node.children.map(child => {
    if (isDepth0) {
      // 실 → 관 카드: 하위 과 이름 목록
      const subNames = child.children
        ? child.children.map(g => escapeHtml(g.name)).join(' · ')
        : '';
      return `<div class="child-card" data-child-id="${child._id}" role="button" tabindex="0">
        <div class="child-card__body">
          <p class="child-card__name">${escapeHtml(child.name)}</p>
          <p class="child-card__sub">${subNames}</p>
        </div>
        <div class="child-card__right">
          <span class="krds-badge small bg-light-gray">총 ${child.head}명</span>
          <span class="child-card__arrow">${arrowSVG}</span>
        </div>
      </div>`;
    } else {
      // 관 → 과 카드: 과장 이름
      const manager = getLeafLead(child);
      const managerInfo = manager ? `${escapeHtml(manager.role)} · ${escapeHtml(manager.name)}` : '';
      return `<div class="child-card" data-child-id="${child._id}" role="button" tabindex="0">
        <div class="child-card__body">
          <p class="child-card__name">${escapeHtml(child.name)}</p>
          ${managerInfo ? `<p class="child-card__sub">${managerInfo}</p>` : ''}
        </div>
        <div class="child-card__right">
          <span class="krds-badge small bg-light-gray">총 ${child.head}명</span>
          <span class="child-card__arrow">${arrowSVG}</span>
        </div>
      </div>`;
    }
  }).join('');

  memberSection.innerHTML = statsHtml + `<div class="child-grid">${cardsHtml}</div>`;

  memberSection.querySelectorAll('.child-card').forEach(card => {
    const childNode = findNodeById(card.dataset.childId);
    if (!childNode) return;
    card.addEventListener('click', () => selectNode(childNode));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectNode(childNode); }
    });
  });
}

/* 실/관 단위 — 하위 과제 집계 (과별 그룹) */
function renderParentTasks(node) {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  const grouped = getAllLeaves(node).filter(l => l.tasks && l.tasks.length);
  taskList.classList.toggle("task-list--grouped", grouped.length > 0);

  if (!grouped.length) {
    taskList.innerHTML = `<li class="task-empty">등록된 연계과제가 없습니다.</li>`;
    return;
  }

  taskList.innerHTML = grouped.map(leaf => `
    <li class="task-group">
      <div class="task-group__head">
        <span class="task-group__name">${escapeHtml(leaf.name)}</span>
        <span class="krds-badge small bg-light-gray">${leaf.tasks.length}건</span>
      </div>
      <ul class="task-list task-list--nested">
        ${leaf.tasks.map(taskCardHTML).join('')}
      </ul>
    </li>
  `).join('');

  const flatTasks = grouped.flatMap(leaf => leaf.tasks);
  attachTaskNav(taskList, flatTasks);
}

/* ---- 검색 ---- */
function applySearch(q) {
  q = q.trim().toLowerCase();
  clear.classList.toggle("is-visible", q.length > 0);

  const allNodes = tree.querySelectorAll(".nav-node");

  if (!q) {
    allNodes.forEach(li => {
      li.style.display = "";
      li.classList.remove("is-open");
      if (li.hasAttribute("aria-expanded")) li.setAttribute("aria-expanded", "false");
      restoreLabel(li);
    });
    const firstSil = tree.querySelector(".nav-node--depth0");
    if (firstSil) { firstSil.classList.add("is-open"); firstSil.setAttribute("aria-expanded", "true"); }
    empty.classList.remove("is-visible");
    return;
  }

  let anyMatch = false;
  allNodes.forEach(li => {
    const name      = li.dataset.name.toLowerCase();
    const selfMatch = name.includes(q);
    const descMatch = [...li.querySelectorAll(".nav-node")].some(d => d.dataset.name.toLowerCase().includes(q));

    if (selfMatch || descMatch) {
      li.style.display = "";
      if (li.hasAttribute("aria-expanded")) {
        li.classList.add("is-open");
        li.setAttribute("aria-expanded", "true");
      }
      highlightLabel(li, q, selfMatch);
      anyMatch = true;
    } else {
      li.style.display = "none";
      restoreLabel(li);
    }
  });

  empty.classList.toggle("is-visible", !anyMatch);
}

function highlightLabel(li, q, match) {
  const label = li.querySelector(":scope > .nav-node__row > .nav-node__label");
  const name  = li.dataset.name;
  if (match) {
    const i = name.toLowerCase().indexOf(q);
    label.innerHTML =
      escapeHtml(name.slice(0, i)) +
      '<mark class="nav-mark">' + escapeHtml(name.slice(i, i + q.length)) + '</mark>' +
      escapeHtml(name.slice(i + q.length));
  } else {
    label.textContent = name;
  }
}

function restoreLabel(li) {
  const label = li.querySelector(":scope > .nav-node__row > .nav-node__label");
  if (label) label.textContent = li.dataset.name;
}

/* ---- 초기화: 조직도 페이지 ---- */
if (tree) {
  const builtUl = renderNodes(ORG);
  while (builtUl.firstChild) { tree.appendChild(builtUl.firstChild); }

  const firstSil = tree.querySelector(".nav-node--depth0");
  if (firstSil) {
    toggle(firstSil);
    const firstSilRow = firstSil.querySelector(":scope > .nav-node__row");
    activateNode(firstSil, firstSilRow, ORG[0]);
  }

  summary.innerHTML = '<b>' + TOTAL_SIL + '</b>개 부서 · <b>' + TOTAL_HEAD + '</b>명';

  search.addEventListener("input",  e => applySearch(e.target.value));
  clear.addEventListener("click", () => { search.value = ""; applySearch(""); search.focus(); });
}

/* ---- 초기화: 업무 페이지 ---- */
const operatingTaskList = document.getElementById("operatingTaskList");
if (operatingTaskList) {
  const allLeaves         = ORG.flatMap(sil => getAllLeaves(sil)).filter(l => l.tasks && l.tasks.length);
  const PAGE_SIZE         = 10;
  let filteredTasks       = [];
  let currentPage         = 1;
  let currentStatusFilter = 'all';

  const pagination = document.querySelector('.krds-pagination');
  const pageLinks  = pagination?.querySelector('.page-links');
  const prevNav    = pagination?.querySelector('.page-navi.prev');
  const nextNav    = pagination?.querySelector('.page-navi.next');

  /* ---- 페이지 렌더 ---- */
  function renderPage() {
    const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
    const slice = filteredTasks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    operatingTaskList.className = 'task-list';
    operatingTaskList.innerHTML = slice.length
      ? slice.map(taskCardHTML).join('')
      : '<li class="task-empty">해당하는 업무가 없습니다.</li>';

    if (slice.length) {
      operatingTaskList.querySelectorAll('.task-card').forEach((card, i) => {
        card.addEventListener('click', () => {
          sessionStorage.setItem('krds_selected_task', JSON.stringify(slice[i]));
          window.location.href = '/resources/pages/operating-detail-dashboard.html';
        });
      });
    }

    if (prevNav) prevNav.classList.toggle('disabled', currentPage === 1);
    if (nextNav) nextNav.classList.toggle('disabled', currentPage >= totalPages);

    if (!pageLinks) return;
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('…');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('…');
      pages.push(totalPages);
    }
    pageLinks.innerHTML = pages.map(p =>
      p === '…'
        ? '<span class="page-link link-dot"></span>'
        : `<a class="page-link${p === currentPage ? ' active' : ''}" href="#" data-page="${p}">${p === currentPage ? '<span class="sr-only">현재페이지 </span>' : ''}${p}</a>`
    ).join('');
  }

  /* ---- 통합 필터 ---- */
  function applyFilters() {
    const teamVal  = document.getElementById('filterTeam')?.value || '';
    const rawStart = document.getElementById('filterDateStart')?.value || '';
    const rawEnd   = document.getElementById('filterDateEnd')?.value || '';
    const startVal = rawStart.replace(/\./g, '-');  // KRDS sets "YYYY.MM.DD" → compare as "YYYY-MM-DD"
    const endVal   = rawEnd.replace(/\./g, '-');

    let tasks = allLeaves.flatMap(leaf =>
      (teamVal && leaf.name !== teamVal) ? [] : leaf.tasks
    );
    if (currentStatusFilter !== 'all') tasks = tasks.filter(t => t.status === currentStatusFilter);
    if (startVal || endVal) {
      tasks = tasks.filter(t => {
        const afterStart = !startVal || t.end >= startVal;
        const beforeEnd  = !endVal   || t.start <= endVal;
        return afterStart && beforeEnd;
      });
    }

    filteredTasks = tasks.sort((a, b) => a.start < b.start ? -1 : a.start > b.start ? 1 : 0);
    currentPage = 1;
    renderPage();
  }

  /* ---- 팀 선택 ---- */
  const teamSelect   = document.getElementById('filterTeam');
  const teamDropdown = document.getElementById('filterTeamDd');
  if (teamSelect) {
    allLeaves.forEach(leaf => {
      const opt = document.createElement('option');
      opt.value = leaf.name;
      opt.textContent = leaf.name;
      teamSelect.appendChild(opt);
      if (teamDropdown) {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.textContent = leaf.name;
        div.onclick = () => selectFilterTeam(div, leaf.name);
        teamDropdown.appendChild(div);
      }
    });
    teamSelect.addEventListener('change', applyFilters);
  }

  /* ---- 날짜 input 클릭 시 달력 열기 ---- */
  const calTriggerBtn = document.querySelector('.calendar-conts .form-btn-datepicker');
  ['filterDateStart', 'filterDateEnd'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => calTriggerBtn?.click());
  });

  /* ---- KRDS 기간 선택: 확인 클릭 후 필터 적용 ---- */
  const calConfirmBtn = document.querySelector('.krds-calendar-area .calendar-btn-wrap .krds-btn.primary');
  if (calConfirmBtn) {
    calConfirmBtn.addEventListener('click', () => setTimeout(applyFilters, 0));
  }

  /* ---- 날짜 초기화 ---- */
  document.getElementById('calDateReset')?.addEventListener('click', () => {
    const start = document.getElementById('filterDateStart');
    const end   = document.getElementById('filterDateEnd');
    if (start) start.value = '';
    if (end)   end.value   = '';
    applyFilters();
  });

  /* ---- 탭 ---- */
  applyFilters();

  document.querySelectorAll('.tab-bar .tab[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-bar .tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatusFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  /* ---- 페이지네이션 ---- */
  if (pagination) {
    pagination.addEventListener('click', e => {
      e.preventDefault();
      const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
      const link = e.target.closest('[data-page]');
      if (link) {
        currentPage = parseInt(link.dataset.page, 10);
      } else if (e.target.closest('.page-navi.prev:not(.disabled)')) {
        currentPage = Math.max(1, currentPage - 1);
      } else if (e.target.closest('.page-navi.next:not(.disabled)')) {
        currentPage = Math.min(totalPages, currentPage + 1);
      } else {
        return;
      }
      renderPage();
    });
  }
}

/* ---- 조직도 뷰 ---- */

const ocCanvas  = document.getElementById('ocCanvas');
const ocGrid    = document.getElementById('ocGrid');
const ocLines   = document.getElementById('ocLines');
const ocWrapper = document.getElementById('ocWrapper');

/* 레이아웃 상수 */
const BOX_W = 144;
const BOX_H = 64;
const H_GAP = 24;   // 같은 레벨 박스 간 수평 간격
const V_GAP = 80;   // 레벨 간 수직 간격
const PAD   = 56;   // 캔버스 외부 여백

/* zoom / pan 상태 */
let ocScale = 1;
let ocTx = 0, ocTy = 0;

function updateOcTransform() {
  ocCanvas.style.transform = `translate(${ocTx}px,${ocTy}px) scale(${ocScale})`;
  const el = document.getElementById('ocZoomLevel');
  if (el) el.textContent = Math.round(ocScale * 100) + '%';
}

function zoomAt(factor, cx, cy) {
  const s = Math.max(0.15, Math.min(3, ocScale * factor));
  ocTx = cx - (cx - ocTx) * (s / ocScale);
  ocTy = cy - (cy - ocTy) * (s / ocScale);
  ocScale = s;
  updateOcTransform();
}

function fitOrgChart(cw, ch) {
  const ww = ocWrapper.offsetWidth;
  const wh = ocWrapper.offsetHeight;
  ocScale = Math.max(0.15, Math.min(1, Math.min(ww / (cw + 80), wh / (ch + 80)) * 0.92));
  ocTx = (ww - cw * ocScale) / 2;
  ocTy = (wh - ch * ocScale) / 2;
  updateOcTransform();
}

/* 각 노드의 leaf 컬럼 번호 (1-based) */
const colMap = new Map();

function assignColumns(node, col) {
  if (!node.children || node.children.length === 0) {
    colMap.set(node._id, { start: col, end: col });
    return col + 1;
  }
  const start = col;
  let next = col;
  for (const c of node.children) next = assignColumns(c, next);
  colMap.set(node._id, { start, end: next - 1 });
  return next;
}

/* 절대 좌표 계산 */
function calcPositions() {
  const pos = new Map();

  function calc(node, depth) {
    const isLeaf = !node.children || node.children.length === 0;
    if (isLeaf) {
      const col = colMap.get(node._id).start;
      pos.set(node._id, {
        x: PAD + (col - 1) * (BOX_W + H_GAP),
        y: PAD + depth * (BOX_H + V_GAP)
      });
      return;
    }
    for (const child of node.children) calc(child, depth + 1);
    const fc = pos.get(node.children[0]._id);
    const lc = pos.get(node.children[node.children.length - 1]._id);
    pos.set(node._id, {
      x: fc.x + (lc.x + BOX_W - fc.x) / 2 - BOX_W / 2,
      y: PAD + depth * (BOX_H + V_GAP)
    });
  }

  for (const sil of ORG) calc(sil, 0);
  return pos;
}

function buildOrgChart() {
  colMap.clear();
  let col = 1;
  for (const sil of ORG) col = assignColumns(sil, col);
  const leafCount = col - 1;
  const maxDepth  = 2;

  const canvasW = PAD * 2 + leafCount * (BOX_W + H_GAP) - H_GAP;
  const canvasH = PAD * 2 + maxDepth  * (BOX_H + V_GAP);

  ocCanvas.style.width  = canvasW + 'px';
  ocCanvas.style.height = canvasH + 'px';
  ocLines.style.width   = canvasW + 'px';
  ocLines.style.height  = canvasH + 'px';
  ocLines.setAttribute('viewBox', `0 0 ${canvasW} ${canvasH}`);

  const positions = calcPositions();
  ocGrid.innerHTML  = '';
  ocLines.innerHTML = '';

  /* 모든 노드 수집 */
  const allNodes = [];
  (function collect(nodes) {
    for (const n of nodes) {
      allNodes.push(n);
      if (n.children) collect(n.children);
    }
  })(ORG);

  /* 박스 렌더 */
  for (const n of allNodes) {
    const p = positions.get(n._id);
    const isLeaf = !n.children || n.children.length === 0;

    const box = document.createElement('div');
    box.className = 'oc-box oc-box--depth' + n._depth + (isLeaf ? ' oc-box--leaf' : '');
    box.dataset.id = n._id;
    box.style.left = p.x + 'px';
    box.style.top  = p.y + 'px';

    // 조직 계층 배지 — 현재 조직은 부서 단층 구조라 최상위도 '부서'로 표기한다
    const label = isLeaf
      ? `<span class="oc-badge oc-badge--leaf">${n._depth === 0 ? '부서' : n._depth === 2 ? '과' : '관'}</span>`
      : (n._depth === 0
          ? `<span class="oc-badge oc-badge--sil">부서</span>`
          : `<span class="oc-badge oc-badge--gwan">관</span>`);

    box.innerHTML =
      `<div class="oc-box__inner">
         ${label}
         <span class="oc-box__name">${escapeHtml(n.name)}</span>
       </div>
       <span class="oc-box__count">${n.head}명</span>`;

    box.addEventListener('click', () => { switchView('list'); selectNode(n); });
    ocGrid.appendChild(box);
  }

  /* SVG 연결선 */
  for (const n of allNodes) {
    if (!n.children) continue;
    const pp = positions.get(n._id);
    const px = pp.x + BOX_W / 2;
    const py = pp.y + BOX_H;

    for (const child of n.children) {
      const cp = positions.get(child._id);
      const cx = cp.x + BOX_W / 2;
      const cy = cp.y;
      const my = py + (cy - py) * 0.45;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${px},${py} C${px},${my} ${cx},${my} ${cx},${cy}`);
      path.setAttribute('class', 'oc-line');
      ocLines.appendChild(path);
    }
  }

  fitOrgChart(canvasW, canvasH);
}

/* 사이드 네비게이션 선택 노드를 조직도에서 중앙 줌 인 */
function navigateOrgChartTo(node) {
  const box = ocGrid.querySelector('[data-id="' + node._id + '"]');
  if (!box) return;

  const bx = parseFloat(box.style.left) + BOX_W / 2;
  const by = parseFloat(box.style.top)  + BOX_H / 2;

  const TARGET_SCALES = [0.85, 1.2, 1.6];
  const targetScale = Math.max(0.15, Math.min(3, TARGET_SCALES[node._depth] !== undefined ? TARGET_SCALES[node._depth] : 1.2));

  const ww = ocWrapper.offsetWidth;
  const wh = ocWrapper.offsetHeight;

  ocScale = targetScale;
  ocTx = ww / 2 - bx * ocScale;
  ocTy = wh / 2 - by * ocScale;

  ocCanvas.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
  updateOcTransform();
  setTimeout(() => { ocCanvas.style.transition = ''; }, 500);

  ocGrid.querySelectorAll('.oc-box--selected').forEach(b => b.classList.remove('oc-box--selected'));
  box.classList.add('oc-box--selected');
}

/* 뷰 전환 */
function switchView(view) {
  currentView = view;
  const listBtn   = document.getElementById('btnListView');
  const orgBtn    = document.getElementById('btnOrgView');
  const listPanel = document.getElementById('listViewContent');
  const orgPanel  = document.getElementById('orgChartPanel');
  const contents  = document.querySelector('.organization-contents');

  if (view === 'org') {
    listPanel.style.display = 'none';
    orgPanel.style.display  = 'block';
    contents.classList.add('is-orgchart');
    listBtn.classList.remove('is-active');
    orgBtn.classList.add('is-active');
    buildOrgChart();
    if (selectedId) {
      const sel = findNodeById(selectedId);
      if (sel) navigateOrgChartTo(sel);
    }
  } else {
    orgPanel.style.display  = 'none';
    listPanel.style.display = 'block';
    contents.classList.remove('is-orgchart');
    orgBtn.classList.remove('is-active');
    listBtn.classList.add('is-active');
    if (selectedId) {
      const sel = findNodeById(selectedId);
      if (sel) renderContent(sel);
    }
  }
}

document.getElementById('btnListView')?.addEventListener('click', () => switchView('list'));
document.getElementById('btnOrgView')?.addEventListener('click',  () => switchView('org'));

/* 줌 / 팬 이벤트 (최초 한 번만) */
if (ocWrapper) (function initOcEvents() {
  /* 마우스 휠 줌 */
  ocWrapper.addEventListener('wheel', e => {
    e.preventDefault();
    const r = ocWrapper.getBoundingClientRect();
    zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  /* 드래그 팬 */
  let drag = null;
  ocWrapper.addEventListener('mousedown', e => {
    if (e.button !== 0 || e.target.closest('.oc-box') || e.target.closest('.oc-controls')) return;
    drag = { mx: e.clientX, my: e.clientY, tx: ocTx, ty: ocTy };
    ocWrapper.classList.add('is-dragging');
  });
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    ocTx = drag.tx + (e.clientX - drag.mx);
    ocTy = drag.ty + (e.clientY - drag.my);
    updateOcTransform();
  });
  window.addEventListener('mouseup', () => {
    drag = null;
    ocWrapper.classList.remove('is-dragging');
  });

  /* 터치 팬/핀치 줌 */
  let lastT = null;
  ocWrapper.addEventListener('touchstart', e => { lastT = e.touches; }, { passive: true });
  ocWrapper.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && lastT.length === 1) {
      ocTx += e.touches[0].clientX - lastT[0].clientX;
      ocTy += e.touches[0].clientY - lastT[0].clientY;
      updateOcTransform();
    } else if (e.touches.length === 2 && lastT.length >= 2) {
      const prev = Math.hypot(lastT[0].clientX - lastT[1].clientX, lastT[0].clientY - lastT[1].clientY);
      const curr = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const r = ocWrapper.getBoundingClientRect();
      const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left;
      const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
      if (prev > 0) zoomAt(curr / prev, cx, cy);
    }
    lastT = e.touches;
  }, { passive: false });

  /* 버튼 */
  document.getElementById('ocZoomIn').addEventListener('click',  () => zoomAt(1.25, ocWrapper.offsetWidth / 2, ocWrapper.offsetHeight / 2));
  document.getElementById('ocZoomOut').addEventListener('click', () => zoomAt(1 / 1.25, ocWrapper.offsetWidth / 2, ocWrapper.offsetHeight / 2));
  document.getElementById('ocFit').addEventListener('click', () => {
    const cw = parseInt(ocCanvas.style.width)  || 800;
    const ch = parseInt(ocCanvas.style.height) || 400;
    fitOrgChart(cw, ch);
  });
})();

/* ---- 초기화: 업무 캘린더 페이지 ---- */
const ocWeeksEl = document.querySelector('.oc-weeks');
if (ocWeeksEl) {
  const calLeaves = ORG.flatMap(sil => getAllLeaves(sil)).filter(l => l.tasks && l.tasks.length);
  const calTasks  = calLeaves.flatMap(leaf => leaf.tasks.map(t => Object.assign({}, t, { dept: leaf.name })));

  const CAL_CHIP = { progress: 'chip-blue', done: 'chip-green', wait: 'chip-orange', recurring: 'chip-red' };
  const DAY_KO   = ['일', '월', '화', '수', '목', '금', '토'];
  const todayKey = (function() {
    const n = new Date();
    return n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0');
  })();

  let calDate = new Date();
  let calView = 'month';

  function toKey(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /* ── 개인 캘린더: 본인 정기 업무(반복 일정) ── */
  const RECURRING_TEMPLATES = [
    { title: '주간 업무보고 작성',     freq: 'weekly',   weekday: 1 },
    { title: '부서 정례회의 참석',     freq: 'biweekly', weekday: 3 },
    { title: '월간 실적 정리 및 보고', freq: 'monthly-last-weekday' },
    { title: '분기 예산집행 점검',     freq: 'quarterly', months: [2, 5, 8, 11], day: 25 },
  ];
  const RECURRING_RANGE_START = new Date(2024, 0, 1);
  const RECURRING_RANGE_END   = new Date(2027, 11, 31);
  const FREQ_LABEL = { weekly: '매주', biweekly: '격주', 'monthly-last-weekday': '매월', quarterly: '분기' };

  function makeRecurringInstance(title, date, person, id, freq) {
    const key = toKey(date);
    return { __id: 'r' + id, title, status: 'recurring', start: key, end: key, owner: person, dept: '정기업무', recurring: true, freq, cycleLabel: FREQ_LABEL[freq] };
  }

  function generateRecurringInstances(person) {
    const instances = [];
    let rid = 0;
    RECURRING_TEMPLATES.forEach(tpl => {
      if (tpl.freq === 'weekly' || tpl.freq === 'biweekly') {
        const step = tpl.freq === 'weekly' ? 7 : 14;
        const d = new Date(RECURRING_RANGE_START);
        while (d.getDay() !== tpl.weekday) d.setDate(d.getDate() + 1);
        for (; d <= RECURRING_RANGE_END; d.setDate(d.getDate() + step)) {
          instances.push(makeRecurringInstance(tpl.title, d, person, rid++, tpl.freq));
        }
      } else if (tpl.freq === 'monthly-last-weekday') {
        for (let y = RECURRING_RANGE_START.getFullYear(); y <= RECURRING_RANGE_END.getFullYear(); y++) {
          for (let m = 0; m < 12; m++) {
            const d = new Date(y, m + 1, 0);
            while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() - 1);
            if (d >= RECURRING_RANGE_START && d <= RECURRING_RANGE_END) instances.push(makeRecurringInstance(tpl.title, d, person, rid++, tpl.freq));
          }
        }
      } else if (tpl.freq === 'quarterly') {
        for (let y = RECURRING_RANGE_START.getFullYear(); y <= RECURRING_RANGE_END.getFullYear(); y++) {
          tpl.months.forEach(m => {
            const d = new Date(y, m, tpl.day);
            if (d >= RECURRING_RANGE_START && d <= RECURRING_RANGE_END) instances.push(makeRecurringInstance(tpl.title, d, person, rid++, tpl.freq));
          });
        }
      }
    });
    return instances;
  }

  const recurringCache = {};
  function getRecurringFor(person) {
    if (!recurringCache[person]) recurringCache[person] = generateRecurringInstances(person);
    return recurringCache[person];
  }

  let calScope = 'company';
  let calPerson = null;
  let activeTasks = calTasks;

  // index.html에서는 회사/개인 캘린더 토글 대신 왼쪽 조직도 선택이 범위를 정한다
  // (applyOrgSelectionToCalendar 참고). operating-calendar.html처럼 조직도가 없는
  // 페이지에서는 이 모드가 켜지지 않으므로 기존 회사/개인 토글 방식 그대로 동작한다.
  let orgChartMode       = false;
  let orgScopeOwnerNames = null; // Set<string> | null
  let orgScopeIndividual = null; // 근무자 한 명으로 좁혀졌을 때 그 이름 (개인 정기 업무 포함용)

  function rebuildActiveTasks() {
    if (orgChartMode) {
      if (!orgScopeOwnerNames) { activeTasks = []; return; }
      const base = calTasks.filter(t => orgScopeOwnerNames.has(t.owner));
      activeTasks = orgScopeIndividual ? base.concat(getRecurringFor(orgScopeIndividual)) : base;
      return;
    }
    activeTasks = (calScope === 'personal' && calPerson)
      ? calTasks.filter(t => t.owner === calPerson).concat(getRecurringFor(calPerson))
      : calTasks;
  }

  function buildTaskMap() {
    const map = {};
    activeTasks.forEach(t => { if (!map[t.end]) map[t.end] = []; map[t.end].push(t); });
    return map;
  }

  function getWeekMonday(d) {
    const c = new Date(d);
    c.setDate(c.getDate() - (c.getDay() + 6) % 7);
    return c;
  }

  function makeChip(t, extraClass) {
    const idx = activeTasks.indexOf(t);
    const tooltip = t.recurring ? `${t.dept} · ${t.owner} · ${t.cycleLabel} 반복` : `${t.dept} · ${t.owner}`;
    const cycleTag = t.recurring ? `<span class="chip-cycle">${t.cycleLabel}</span>` : '';
    return `<div class="oc-chip ${CAL_CHIP[t.status] || 'chip-blue'}${t.recurring ? ' oc-chip--recurring' : ''}${extraClass ? ' ' + extraClass : ''}" data-task-i="${idx}" title="${escapeHtml(tooltip)}">` +
      `<span class="chip-dot"></span>${cycleTag}<span class="chip-name">${escapeHtml(t.title)}</span></div>`;
  }

  /* ── Month ── */
  function renderCalMonth() {
    const y = calDate.getFullYear(), m = calDate.getMonth();
    const first = new Date(y, m, 1);
    const cells = [];
    for (let i = (first.getDay() + 6) % 7; i > 0; i--)
      cells.push({ d: new Date(y, m, 1 - i), other: true });
    const days = new Date(y, m + 1, 0).getDate();
    for (let i = 1; i <= days; i++)
      cells.push({ d: new Date(y, m, i), other: false });
    const tail = (7 - (cells.length % 7)) % 7;
    for (let i = 1; i <= tail; i++)
      cells.push({ d: new Date(y, m + 1, i), other: true });

    const taskMap = buildTaskMap();
    const MAX = 3;
    let html = '';
    for (let r = 0; r < cells.length; r += 7) {
      html += '<div class="oc-week-row">';
      for (let c = 0; c < 7; c++) {
        const { d, other } = cells[r + c];
        const key = toKey(d), isToday = key === todayKey;
        const ts  = taskMap[key] || [];
        const extra = Math.max(0, ts.length - MAX);
        html += `<div class="oc-cell${other ? ' other-month' : ''}${isToday ? ' today' : ''}">` +
          `<div class="oc-date-num${isToday ? ' today-circle' : ''}">${d.getDate()}</div>` +
          (ts.length ? `<div class="oc-events">${ts.slice(0, MAX).map(t => makeChip(t)).join('')}${extra ? `<button class="oc-more" data-key="${key}" type="button">+${extra} 더보기</button>` : ''}</div>` : '') +
          `</div>`;
      }
      html += '</div>';
    }
    ocWeeksEl.innerHTML = html;
  }

  /* ── Week ── */
  function renderCalWeek() {
    const mon = getWeekMonday(calDate);
    const taskMap = buildTaskMap();
    let hdr = '<div class="oc-week-col-headers">';
    let cols = '<div class="oc-week-cols">';
    for (let i = 0; i < 7; i++) {
      const d = new Date(mon); d.setDate(d.getDate() + i);
      const key = toKey(d), isToday = key === todayKey;
      const ts = taskMap[key] || [];
      hdr += `<div class="oc-week-col-header${isToday ? ' today' : ''}">` +
        `<span class="oc-wch-day">${DAY_KO[d.getDay()]}</span>` +
        `<span class="oc-wch-date${isToday ? ' today-circle' : ''}">${d.getDate()}</span></div>`;
      cols += `<div class="oc-week-col${isToday ? ' today' : ''}">${ts.map(t => makeChip(t, 'oc-chip--block')).join('')}</div>`;
    }
    hdr += '</div>'; cols += '</div>';
    ocWeeksEl.innerHTML = '<div class="oc-view-week">' + hdr + cols + '</div>';
  }

  /* ── Day ── */
  function renderCalDay() {
    const ts = (buildTaskMap()[toKey(calDate)] || []);
    let html = '<div class="oc-view-day">';
    if (ts.length) {
      html += ts.map(t =>
        `<div class="oc-day-task ${CAL_CHIP[t.status] || 'chip-blue'}">` +
          `<span class="chip-dot oc-day-dot"></span>` +
          `<div class="oc-day-task__info">` +
            `<span class="oc-day-task__title">${t.recurring ? `<span class="krds-badge outline-primary oc-day-task__cycle">${t.cycleLabel} 반복</span>` : ''}${escapeHtml(t.title)}</span>` +
            `<span class="oc-day-task__meta">${escapeHtml(t.dept)} · ${escapeHtml(t.owner)}</span>` +
          `</div></div>`
      ).join('');
    } else {
      html += '<div class="oc-day-empty">이 날 마감되는 업무가 없습니다.</div>';
    }
    ocWeeksEl.innerHTML = html + '</div>';
  }

  /* ── 3 Month (더보기 없이 모든 업무를 다 표시) ── */
  function renderCal3Month() {
    const taskMap = buildTaskMap();
    const y0 = calDate.getFullYear(), m0 = calDate.getMonth();
    let html = '<div class="oc-view-3month">';

    for (let mi = 0; mi < 3; mi++) {
      const first = new Date(y0, m0 + mi, 1);
      const y = first.getFullYear(), m = first.getMonth();
      const cells = [];
      for (let i = (first.getDay() + 6) % 7; i > 0; i--)
        cells.push({ d: new Date(y, m, 1 - i), other: true });
      const days = new Date(y, m + 1, 0).getDate();
      for (let i = 1; i <= days; i++)
        cells.push({ d: new Date(y, m, i), other: false });
      const tail = (7 - (cells.length % 7)) % 7;
      for (let i = 1; i <= tail; i++)
        cells.push({ d: new Date(y, m + 1, i), other: true });

      html += `<div class="oc-3month-block"><div class="oc-3month-title">${y}년 ${m + 1}월</div>`;
      for (let r = 0; r < cells.length; r += 7) {
        html += '<div class="oc-week-row--compact">';
        for (let c = 0; c < 7; c++) {
          const { d, other } = cells[r + c];
          const key = toKey(d), isToday = key === todayKey;
          const ts = taskMap[key] || [];
          html += `<div class="oc-cell--compact${other ? ' other-month' : ''}${isToday ? ' today' : ''}">` +
            `<div class="oc-date-num${isToday ? ' today-circle' : ''}">${d.getDate()}</div>` +
            (ts.length ? `<div class="oc-events">${ts.map(t => makeChip(t, 'oc-chip--compact')).join('')}</div>` : '') +
            `</div>`;
        }
        html += '</div>';
      }
      html += '</div>';
    }

    html += '</div>';
    ocWeeksEl.innerHTML = html;
  }

  /* ── Label ── */
  function updateLabel() {
    const el = document.querySelector('.oc-month-label');
    if (!el) return;
    if (calView === 'month') {
      el.textContent = calDate.getFullYear() + '년 ' + (calDate.getMonth() + 1) + '월';
    } else if (calView === '3month') {
      const y1 = calDate.getFullYear(), m1 = calDate.getMonth();
      const end = new Date(y1, m1 + 2, 1);
      el.textContent = y1 === end.getFullYear()
        ? `${y1}년 ${m1 + 1}월 – ${end.getMonth() + 1}월`
        : `${y1}년 ${m1 + 1}월 – ${end.getFullYear()}년 ${end.getMonth() + 1}월`;
    } else if (calView === 'week') {
      const mon = getWeekMonday(calDate);
      const sun = new Date(mon); sun.setDate(sun.getDate() + 6);
      const m1 = mon.getMonth() + 1, d1 = mon.getDate();
      const m2 = sun.getMonth() + 1, d2 = sun.getDate();
      el.textContent = calDate.getFullYear() + '년 ' +
        (m1 === m2 ? `${m1}월 ${d1}–${d2}일` : `${m1}월 ${d1}일 – ${m2}월 ${d2}일`);
    } else {
      el.textContent = calDate.getFullYear() + '년 ' + (calDate.getMonth() + 1) + '월 ' +
        calDate.getDate() + '일 (' + DAY_KO[calDate.getDay()] + ')';
    }
  }

  /* ── Render dispatcher ── */
  function render() {
    updateLabel();
    if (calView === 'week')        renderCalWeek();
    else if (calView === 'day')    renderCalDay();
    else if (calView === '3month') renderCal3Month();
    else                           renderCalMonth();
  }

  /* ── Navigation ── */
  document.querySelectorAll('.oc-nav-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const dir = i === 0 ? -1 : 1;
      if (calView === 'month') {
        calDate = new Date(calDate.getFullYear(), calDate.getMonth() + dir, 1);
      } else if (calView === '3month') {
        calDate = new Date(calDate.getFullYear(), calDate.getMonth() + dir * 3, 1);
      } else if (calView === 'week') {
        calDate = new Date(calDate); calDate.setDate(calDate.getDate() + dir * 7);
      } else {
        calDate = new Date(calDate); calDate.setDate(calDate.getDate() + dir);
      }
      render();
    });
  });

  /* ── View selector ── */
  function setCalViewBtnActive(activeBtn) {
    document.querySelectorAll('.oc-view-selector button').forEach(b => {
      b.classList.toggle('active', b === activeBtn);
    });
  }
  document.querySelectorAll('.oc-view-selector button').forEach(btn => {
    btn.addEventListener('click', () => {
      setCalViewBtnActive(btn);
      calView = btn.dataset.view || 'month';
      render();
    });
  });
  setCalViewBtnActive(document.querySelector('.oc-view-selector button[data-view="month"]'));

  /* ── Scope selector (회사 캘린더 / 개인 캘린더) ── */
  const personSelectEl = document.getElementById('ocPersonSelect');
  if (personSelectEl) {
    const allOwners = Array.from(new Set(calTasks.map(t => t.owner))).sort((a, b) => a.localeCompare(b, 'ko'));
    personSelectEl.innerHTML = allOwners.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
    calPerson = allOwners[0] || null;
    if (calPerson) personSelectEl.value = calPerson;
    personSelectEl.addEventListener('change', () => {
      calPerson = personSelectEl.value;
      rebuildActiveTasks();
      render();
    });
  }
  document.querySelectorAll('.oc-scope-selector button').forEach(btn => {
    btn.addEventListener('click', () => {
      calScope = btn.dataset.scope;
      document.querySelectorAll('.oc-scope-selector button').forEach(b => b.classList.toggle('active', b === btn));
      if (personSelectEl) personSelectEl.hidden = calScope !== 'personal';
      rebuildActiveTasks();
      render();
    });
  });

  render();

  /* ── 조직도(index.html 좌측) 선택과 업무 캘린더 연동 ──
     업무 현황(간트차트)과 동일하게, 조직도에서 고른 노드/근무자를 그대로
     캘린더의 표시 범위로 사용한다. 근무자 한 명까지 좁혀지면 그 사람의
     개인 정기 업무(반복 일정)도 함께 보여준다. */
  const calScopeEl     = document.getElementById('biz-cal-scope');
  const calScopeTextEl = document.getElementById('biz-cal-scope-text');
  const calEmptyEl     = document.getElementById('biz-cal-empty');
  const calGridEl      = document.getElementById('biz-cal-grid');

  if (calScopeEl && calEmptyEl && calGridEl) {
    window.applyOrgSelectionToCalendar = function (path, selectedWorker) {
      orgChartMode = true;

      if (selectedWorker) {
        orgScopeOwnerNames = new Set([selectedWorker.name]);
        orgScopeIndividual = selectedWorker.name;
        calScopeTextEl.textContent = [...path.map(p => p.name), selectedWorker.name].join(' › ');
      } else if (path.length) {
        orgScopeOwnerNames = new Set(collectMemberNames(path[path.length - 1]));
        orgScopeIndividual = null;
        calScopeTextEl.textContent = path.map(p => p.name).join(' › ');
      } else {
        orgScopeOwnerNames = null;
        orgScopeIndividual = null;
        calScopeTextEl.textContent = '조직도에서 팀 또는 근무자를 선택해주세요.';
      }

      const hasSelection = !!orgScopeOwnerNames;
      calEmptyEl.style.display = hasSelection ? 'none' : 'flex';
      calGridEl.style.display  = hasSelection ? ''     : 'none';
      calScopeEl.classList.toggle('is-empty', !hasSelection);

      rebuildActiveTasks();
      render();
    };
  }

  /* ── 더보기 팝업 ── */
  const DAY_KO_POPUP = ['일', '월', '화', '수', '목', '금', '토'];

  const popupOverlay = document.createElement('div');
  popupOverlay.id = 'oc-day-popup';
  popupOverlay.className = 'oc-popup-overlay';
  popupOverlay.hidden = true;
  popupOverlay.setAttribute('role', 'dialog');
  popupOverlay.setAttribute('aria-modal', 'true');
  popupOverlay.setAttribute('aria-labelledby', 'oc-popup-title');
  popupOverlay.innerHTML =
    `<div class="oc-popup">
      <div class="oc-popup__head">
        <h2 class="oc-popup__title" id="oc-popup-title"></h2>
        <button class="oc-popup__close" aria-label="닫기">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <ul class="oc-popup__body" id="oc-popup-body"></ul>
    </div>`;
  document.body.appendChild(popupOverlay);

  function openDayPopup(key) {
    const tasks = buildTaskMap()[key] || [];
    const [y, m, d] = key.split('-').map(Number);
    const dayName = DAY_KO_POPUP[new Date(y, m - 1, d).getDay()];

    document.getElementById('oc-popup-title').innerHTML =
      escapeHtml(m + '월 ' + d + '일 (' + dayName + ')') +
      `<span class="oc-popup__count">총 ${tasks.length}건</span>`;

    document.getElementById('oc-popup-body').innerHTML = tasks.map(t => {
      const chipCls = CAL_CHIP[t.status] || 'chip-blue';
      const idx = activeTasks.indexOf(t);
      const statusLabel = t.recurring ? '정기' : STATUS_LABEL[t.status];
      const statusClass = t.recurring ? 'krds-badge bg-light-primary' : STATUS_CLASS[t.status];
      const cycleBadge = t.recurring ? `<span class="krds-badge outline-primary oc-popup-task__cycle">${t.cycleLabel} 반복</span>` : '';
      return `<li class="oc-popup-task${t.recurring ? ' oc-popup-task--recurring' : ''}" data-task-i="${idx}">
        <span class="oc-popup-task__dot ${chipCls}"></span>
        <div class="oc-popup-task__info">
          <div class="oc-popup-task__head">
            <span class="${statusClass}">${statusLabel}</span>
            ${cycleBadge}
            <span class="oc-popup-task__title">${escapeHtml(t.title)}</span>
          </div>
          <div class="oc-popup-task__meta">
            <span class="oc-popup-task__dept">${escapeHtml(t.dept)}</span>
            <span class="oc-popup-task__sep">·</span>
            <span class="oc-popup-task__owner">${escapeHtml(t.owner)}</span>
            <span class="oc-popup-task__sep">·</span>
            <span class="oc-popup-task__date">${escapeHtml(t.start)} ~ ${escapeHtml(t.end)}</span>
          </div>
        </div>
      </li>`;
    }).join('');

    popupOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    popupOverlay.querySelector('.oc-popup__close').focus();
  }

  function closeDayPopup() {
    popupOverlay.hidden = true;
    document.body.style.overflow = '';
  }

  function goToDetail(t) {
    if (t.recurring) return;
    sessionStorage.setItem('krds_selected_task', JSON.stringify(t));
    window.location.href = '/resources/pages/operating-detail-dashboard.html';
  }

  popupOverlay.querySelector('.oc-popup__close').addEventListener('click', closeDayPopup);
  popupOverlay.addEventListener('click', e => {
    if (e.target === popupOverlay) { closeDayPopup(); return; }
    const li = e.target.closest('.oc-popup-task[data-task-i]');
    if (li) { closeDayPopup(); goToDetail(activeTasks[+li.dataset.taskI]); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !popupOverlay.hidden) closeDayPopup(); });

  ocWeeksEl.addEventListener('click', e => {
    const chip = e.target.closest('.oc-chip[data-task-i]');
    if (chip) { goToDetail(activeTasks[+chip.dataset.taskI]); return; }
    const btn = e.target.closest('.oc-more');
    if (btn?.dataset.key) openDayPopup(btn.dataset.key);
  });
}

/* ---- 탭 전환 ---- */
document.querySelectorAll(".krds-tab-area.layer").forEach(tabArea => {
  const tabs   = tabArea.querySelectorAll(".tab > ul > li");
  const panels = tabArea.querySelectorAll(".tab-conts-wrap > .tab-conts");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("aria-controls");

      tabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add("active");
    });
  });
});

/* ===== GNB 현재 페이지 active ===== */
function setGnbActive() {
  const path = window.location.pathname;
  document.querySelectorAll('.gnb-menu a.gnb-main-trigger').forEach(function (a) {
    const href = a.getAttribute('href') || '';
    const match =
      (href.includes('organization')   && path.includes('organization')) ||
      (href.includes('operating')      && path.includes('operating')) ||
      (href.includes('goals')          && path.includes('goals')) ||
      (href.includes('policy')         && path.includes('policy')) ||
      (href.includes('report')         && /(work|weekly|monthly)-report/.test(path)) ||
      (href.includes('monitoring')     && path.includes('monitoring'));
    if (match) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    }
  });
}
setGnbActive();
document.addEventListener('ui-include:done', setGnbActive);

/* ============================================================
   로그인 상태 (데모)
   ------------------------------------------------------------
   실제 인증 서버가 붙기 전까지 브라우저 로컬에만 상태를 둔다.
   기본값은 로그인 상태(ORG의 CURRENT_USER)로, 로그아웃하면 로그인 화면으로 보낸다.
   ============================================================ */
const AUTH_STORAGE_KEY = "krds_auth_v1";
const LOGIN_PAGE_URL   = "/resources/pages/login.html";

function getAuthState() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return { loggedIn: true, loginId: "staff", userName: DEFAULT_USER_NAME, permission: "staff" };
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : { loggedIn: true };
  } catch (e) {
    return { loggedIn: true, loginId: "staff", userName: DEFAULT_USER_NAME, permission: "staff" };
  }
}

function setAuthState(state) {
  try { localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state)); return true; }
  catch (e) { return false; }
}

function loginUser(account) {
  const acc = typeof account === "string" ? findTestAccount(account) : account;
  const now = new Date();
  if (acc) {
    clearLoginFails(acc.loginId);
    // 임시 비밀번호 발급일은 처음 로그인한 날로 기록한다 (유효기간 계산 기준)
    if (acc.temporary && !getPwState(acc.loginId).issuedAt && !getPwState(acc.loginId).changedAt) {
      savePwState(acc.loginId, { issuedAt: fmtYMD(now) });
    }
  }
  setAuthState({
    loggedIn: true,
    loginId: (acc && acc.loginId) || "staff",
    userName: (acc && acc.userName) || DEFAULT_USER_NAME,
    permission: (acc && acc.permission) || "staff",
    at: fmtYMD(now) + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0"),
  });
}

function logoutUser() {
  setAuthState({ loggedIn: false });
}

/* ── 비밀번호 오류 횟수 ──
   5회 연속 틀리면 계정 담당자에게 초기화를 요청하도록 안내한다. */
const LOGIN_FAIL_KEY   = "krds_login_fails_v1";
const LOGIN_FAIL_LIMIT = 5;

function loadLoginFails() {
  try { return JSON.parse(localStorage.getItem(LOGIN_FAIL_KEY)) || {}; }
  catch (e) { return {}; }
}

function getLoginFailCount(loginId) {
  return loadLoginFails()[String(loginId || "").trim().toLowerCase()] || 0;
}

function addLoginFail(loginId) {
  const key  = String(loginId || "").trim().toLowerCase();
  const fails = loadLoginFails();
  fails[key] = (fails[key] || 0) + 1;
  try { localStorage.setItem(LOGIN_FAIL_KEY, JSON.stringify(fails)); } catch (e) {}
  return fails[key];
}

function clearLoginFails(loginId) {
  const key  = String(loginId || "").trim().toLowerCase();
  const fails = loadLoginFails();
  delete fails[key];
  try { localStorage.setItem(LOGIN_FAIL_KEY, JSON.stringify(fails)); } catch (e) {}
}

function isLoginLocked(loginId) {
  return getLoginFailCount(loginId) >= LOGIN_FAIL_LIMIT;
}

/* 비밀번호 초기화를 요청할 계정 담당자 (관리자 권한 계정의 담당자) */
function getAccountManager() {
  const adminAccount = TEST_ACCOUNTS.find(a => a.permission === "admin");
  const profile = adminAccount ? findMemberProfile(adminAccount.userName) : null;
  return profile || { name: "시스템 관리자", role: "", dept: "미들웨어", sil: "", email: "", phone: "" };
}

/* 헤더 사용자 메뉴 — 아바타 + 닉네임, 셀렉터의 로그인/로그아웃 버튼 */
function initHeaderUserMenu() {
  const menu = document.getElementById("userMenu");
  if (!menu || menu.dataset.ready === "1") return;
  menu.dataset.ready = "1";

  const me   = getCurrentUser();
  const auth = getAuthState();
  const loginBtn = document.getElementById("headerLoginBtn");

  // 아바타 · 닉네임 · 권한
  document.getElementById("userMenuAvatar").textContent   = me.name.slice(0, 1);
  document.getElementById("userMenuName").textContent     = me.name;
  document.getElementById("userMenuInfoName").textContent = me.name + " " + me.role;
  document.getElementById("userMenuInfoDept").textContent = teamLabel(me.sil, me.dept);

  const permEl = document.getElementById("userMenuPerm");
  if (permEl) {
    permEl.textContent = me.permissionLabel + " 권한" + (me.loginId ? " · " + me.loginId : "");
  }

  // 관리자 설정은 관리자 권한에서만 노출
  const settingBtn = document.querySelector('#krds-header .krds-btn.icon[aria-label="관리자 설정"]');
  if (settingBtn) settingBtn.hidden = !(auth.loggedIn && hasPermission("admin"));

  // 로그인 상태에 따라 사용자 메뉴 / 로그인 버튼 노출
  menu.hidden = !auth.loggedIn;
  if (loginBtn) loginBtn.hidden = !!auth.loggedIn;

  menu.querySelectorAll("[data-auth]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.dataset.auth === "logout") logoutUser();
      window.location.href = LOGIN_PAGE_URL;
    });
  });
}
initHeaderUserMenu();
document.addEventListener("ui-include:done", initHeaderUserMenu);

/* 보고 LNB(/html/code/report-side-nav.html) — 현재 페이지 항목 활성화.
   페이지는 <body data-report-nav="work|weekly|monthly"> 로 자신을 알린다.
   LNB는 인클루드로 비동기 삽입되므로 ui-include:done 에서도 한 번 더 실행한다. */
function setReportNavActive() {
  const key = document.body && document.body.dataset.reportNav;
  if (!key) return;
  document.querySelectorAll('#reportSideNav .nav-node__row').forEach(function (row) {
    const on = row.dataset.nav === key;
    row.classList.toggle('is-selected', on);
    if (on) row.setAttribute('aria-current', 'page');
    else row.removeAttribute('aria-current');
  });
}
setReportNavActive();
document.addEventListener('ui-include:done', setReportNavActive);

/* ============================================================
   모니터링 공용 유틸 (부서 대시보드 · 리스크 알림)
   ============================================================ */
function parseISODate(iso) {
  // "2026-07-15" -> local Date, avoids UTC off-by-one
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function diffDays(a, b) { return Math.round((b - a) / 86400000); }
function fmtDue(iso) {
  const d = parseISODate(iso);
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

function hashSeed(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/* 업무명을 시드로 한 결정적 의사난수로 실제 진척률을 만들고, 목표 대비 편차로 리스크 등급을 매김.
   baseDate를 주면 그 시점 기준으로 평가한다 (보고서는 보고 기간 종료일 기준으로 판단). */
function computeTaskRisk(task, baseDate) {
  const start = parseISODate(task.start);
  const end = parseISODate(task.end);
  const today = baseDate || new Date();
  const totalSpan = Math.max(1, diffDays(start, end));
  const elapsed = diffDays(start, today);
  const daysToEnd = diffDays(today, end);

  if (task.status === "done") return { tier: "ok", diff: 0, daysToEnd };
  if (task.status === "wait" && elapsed <= 0) return { tier: "ok", diff: 0, daysToEnd };

  const targetPct = Math.round((Math.min(totalSpan, Math.max(0, elapsed)) / totalSpan) * 100);
  const offset = (hashSeed(task.title) % 31) - 15;
  const actualPct = task.status === "wait" ? 0 : Math.min(96, Math.max(4, targetPct + offset));
  const diff = actualPct - targetPct;

  let tier = "ok";
  if (daysToEnd <= -14 || diff <= -20) tier = "danger";
  else if (daysToEnd < 0 || diff <= -8 || (daysToEnd <= 7 && diff < 0)) tier = "warning";

  // 초과일수를 우선하고 진척률 편차로 보정하는 단일 지연 심각도 점수 (Top5·정렬 공용)
  const severity = (daysToEnd < 0 ? -daysToEnd * 3 : 0) + Math.max(0, -diff);

  return { tier, diff, daysToEnd, targetPct, actualPct, severity };
}

function getAllTasksFlat() {
  const rows = [];
  ORG.forEach(sil => {
    getAllLeaves(sil).forEach(leaf => {
      (leaf.tasks || []).forEach(task => rows.push({ task, leaf, sil: sil.name }));
    });
  });
  return rows;
}

function getRiskTasks() {
  return getAllTasksFlat()
    .map(row => ({ ...row, risk: computeTaskRisk(row.task) }))
    .filter(row => row.risk.tier !== "ok")
    .sort((a, b) => b.risk.severity - a.risk.severity);
}
