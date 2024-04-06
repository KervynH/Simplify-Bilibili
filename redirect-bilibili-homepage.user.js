// ==UserScript==
// @name         Redirect Bilibili Homepage
// @version      2024-04-05
// @description  重定向哔哩哔哩首页
// @author       You
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
  
    setInterval(() => {
        if (location.host == 'www.bilibili.com' && location.pathname == '/') location.replace(redirectUrl);
    }, 1000);
})();
