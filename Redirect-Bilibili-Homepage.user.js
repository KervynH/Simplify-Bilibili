// ==UserScript==
// @name         Redirect Bilibili Homepage
// @version      2024-12-01
// @description  重定向哔哩哔哩首页
// @author       Kervyn
// @namespace    https://github.com/KervynH/Simplify-Bilibili/raw/main/redirect-bilibili-homepage.user.js
// @match        https://www.bilibili.com/
// @match        https://www.bilibili.com/?spm_id_from=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 在此设定重定向链接
    const redirectUrl = 'https://t.bilibili.com/';

    redirectHomepage();

    function redirectHomepage() {
        if (location.host == 'www.bilibili.com' && location.pathname == '/') location.replace(redirectUrl);
        setTimeout(redirectHomepage, 500);
    }
})();
