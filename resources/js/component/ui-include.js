/**
 * HTML 인클루드 로더
 * 사용법: <div data-include="/html/code/header.html"></div>
 *
 * 페이지 내 모든 [data-include] 요소를 찾아 해당 파일을 fetch한 뒤 삽입합니다.
 * DOMContentLoaded 이후 자동 실행되며, 완료 후 "ui-include:done" 이벤트를 dispatch합니다.
 */
(function () {
  function loadIncludes() {
    const targets = document.querySelectorAll('[data-include]');
    if (!targets.length) {
      document.dispatchEvent(new CustomEvent('ui-include:done'));
      return;
    }

    const promises = Array.from(targets).map(function (el) {
      const src = el.getAttribute('data-include');
      return fetch(src)
        .then(function (res) {
          if (!res.ok) throw new Error('Include 로드 실패: ' + src + ' (' + res.status + ')');
          return res.text();
        })
        .then(function (html) {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = html;
          el.replaceWith.apply(el, Array.from(wrapper.childNodes));
        })
        .catch(function (err) {
          console.error(err);
        });
    });

    Promise.all(promises).then(function () {
      document.dispatchEvent(new CustomEvent('ui-include:done'));
      // 헤더가 동적으로 삽입된 후 KRDS GNB · 드롭다운 재초기화
      if (typeof krds_mainMenuPC !== 'undefined') {
        krds_mainMenuPC.init();
      }
      if (typeof krds_dropEvent !== 'undefined') {
        krds_dropEvent.init();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIncludes);
  } else {
    loadIncludes();
  }
})();
