// ==UserScript==
// @name         Simplify Bilibili UI
// @namespace    https://raw.githubusercontent.com/KervynH/Simplify-Bilibili/refs/heads/main/simplify-bilibili.user.js
// @version      2024-05-01
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
  ".ad-report",
  ".ad-floor-cover",
  ".adblock-tips",

  // 热搜
  ".trending",

  // 首页推荐
  ".feed2",

  // 下载客户端按键
  ".download-client-trigger.download-entry",
  ".download-client-trigger.link",

  // 顶栏左侧导航键
  "ul.left-entry > li.nav-link-item:nth-of-type(n+2)",
  "ul.left-entry > li.v-popover-wrap:nth-of-type(n+2)",
  "div.mini-header__title",

  // 顶栏右侧大会员按键
  ".vip-wrap",

  // 播放页面推荐视频
  ".next-play > .video-page-card-small > .card-box",
  ".rec-list",

  // 播放页面广告
  ".pop-live-small-mode",
  "div.ad-floor-cover",

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
