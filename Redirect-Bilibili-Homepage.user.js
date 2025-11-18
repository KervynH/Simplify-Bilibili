// ==UserScript==
// @name         Redirect Bilibili Homepage
// @description  重定向哔哩哔哩首页
// @namespace    https://github.com/KervynH/Simplify-Bilibili/raw/main/redirect-bilibili-homepage.user.js
// @match        https://www.bilibili.com/
// @match        https://www.bilibili.com/?*
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const redirectUrl = 'https://t.bilibili.com/';

    if (location.pathname === '/') {
        location.replace(redirectUrl);
    }
})();
