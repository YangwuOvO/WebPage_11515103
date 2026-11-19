/**
 * 小歪飲料 - 網站共用腳本 (site.js)
 * 負責功能：手機版導覽列展開/收合、無障礙屬性管理、互動細節
 */

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    // 點擊漢堡按鈕切換選單展開/收合
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // 點擊選單內部連結時自動關閉選單（便利手機瀏覽）
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('open')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.classList.remove('open');
          navMenu.classList.remove('open');
        }
      });
    });

    // 點擊選單以外區域時關閉選單
    document.addEventListener('click', function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        if (navMenu.classList.contains('open')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.classList.remove('open');
          navMenu.classList.remove('open');
        }
      }
    });

    // 按下 ESC 鍵關閉選單
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        navToggle.focus();
      }
    });
  }
});
