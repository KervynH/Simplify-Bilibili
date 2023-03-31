// ==UserScript==
// @name         Simplify Bilibili
// @version      0
// @description  Simplify UI of bibibili.com
// @author       Kervyn
// @run-at       document-start
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM_addStyle
// ==/UserScript==


//// 用 css 隐藏多余的页面元素 ////
const elements = [
  // 广告 
  ".scroll-sticky.right-container-inner>.ad-floor-exp.ad-report",
  ".part-undefined.report-scroll-module.report-wrap-module.pop-live-small-mode",

  // 热搜 
  ".trending",

  // 下载客户端按键 
  ".download-client-trigger.download-entry",
  ".download-client-trigger.link",

  // 多余的导航键 
  "ul.left-entry>li.nav-link-item:nth-of-type(n+5)",
  "ul.left-entry>li.v-popover-wrap:nth-of-type(n+5)",
  ".right-entry--vip.right-entry__outside",

  // 播放页面右侧栏
  ".is-in-large-ab.right-container",

  // 播放结束后推荐视频 
  ".bpx-player-ending-related",

  // 动态页面左右侧边栏 
  "aside.right", 
  "aside.left",

  // 发布动态的输入框 
  ".bili-dyn-publishing",
];

elements.forEach(e => {
  GM_addStyle(`${e} {display: none !important}`)
})


///// Static Settings /////
document.addEventListener('DOMContentLoaded', () => {
  // 禁用自动播放
  if (location.href.startsWith('https://www.bilibili.com/video')) {
    const autoPlayButton = document.querySelector('.switch-button.on');
    if (autoPlayButton) autoPlayButton.className = 'switch-button';
  };
});


///// Dynamic Settings //////
// setInterval(() => {
//   // 移除搜索框预设搜索词
//   document.querySelector('input.nav-search-input')?.removeAttribute('placeholder');

//   // 替换 logo 链接到动态首页
//   const logoLink = document.querySelector('li.v-popover-wrap > a');
//   if (logoLink) logoLink.href = 'https://t.bilibili.com/';

//   // 重定向首页
//   if (location.href == 'https://www.bilibili.com/') location.replace('https://t.bilibili.com/');

//   // 直播自动网页全屏
//   if (location.href.startsWith('https://live.bilibili.com')) {
//     const body = document.querySelector("body");
//     body.classList.add('player-full-win');
//     body.classList.add('over-hidden');
//   }
// }, 50);
