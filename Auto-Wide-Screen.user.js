// ==UserScript==
// @name         Bilibili Auto Wide Screen
// @namespace    https://raw.githubusercontent.com/KervynH/Simplify-Bilibili/refs/heads/main/Auto-Wide-Screen.user.js
// @description  打开视频页面自动切换宽屏播放器
// @match        https://www.bilibili.com/video/*
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function clickWide() {
        const btn = document.querySelector('[aria-label="宽屏"]');
        if (!btn) return;
        if (btn.dataset.__autoWideClicked) return;    // 防止疯狂连点

        btn.dataset.__autoWideClicked = '1';
        btn.click();
    }

    clickWide();

    const observer = new MutationObserver(clickWide);
    observer.observe(document.body, { childList: true, subtree: true });
})();
