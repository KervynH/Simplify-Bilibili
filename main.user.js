// ==UserScript==
// @name         Simplify Bilibili
// @namespace    https://github.com/KervynH/Simplify-Bilibili/raw/main/main.user.js
// @version      0.3
// @description  Simplify UI of bilibili.com
// @author       Kervyn
// @run-at       document-start
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM.addStyle
// ==/UserScript==

'use strict';

// 需要隐藏的页面元素
const BLOCK_LIST = [
  // 广告
  ".scroll-sticky.right-container-inner > .ad-floor-exp.ad-report",
  ".part-undefined.report-scroll-module.report-wrap-module.pop-live-small-mode",

  // 热搜
  ".trending",

  // 首页推荐
  ".feed2",

  // 下载客户端按键
  ".download-client-trigger.download-entry",
  ".download-client-trigger.link",

  // 多余的导航键
  "ul.left-entry > li.nav-link-item:nth-of-type(n+2)",
  "ul.left-entry > li.v-popover-wrap:nth-of-type(n+2)",
  "div.mini-header__title",

  // 右侧导航栏大会员按键
  ".right-entry--vip.right-entry__outside",

  // 播放页面的整个右侧栏
  // ".is-in-large-ab.right-container",

  // 播放界面推荐直播
  ".part-undefined.pop-live-small-mode",

  // 播放结束后播放器内部推荐视频
  ".bpx-player-ending-related",

  // 动态页面左右侧边栏
  "aside.right",
  "aside.left",

  // 发布动态的输入框
  ".bili-dyn-publishing",
];

// 用 CSS 隐藏多余的页面元素
BLOCK_LIST.forEach(e => {
  GM.addStyle(`${e} {display: none !important}`);
});


// Static Settings
document.addEventListener('DOMContentLoaded', () => {
  // 重定向首页到动态
  if (location.href == 'https://www.bilibili.com/') {
    location.replace('https://t.bilibili.com/');
  }
});
