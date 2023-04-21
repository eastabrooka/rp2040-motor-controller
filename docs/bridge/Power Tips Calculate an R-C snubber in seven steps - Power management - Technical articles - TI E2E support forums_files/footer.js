/* v1.20.37 */
/*
* Copyright (c) 2020 Texas Instruments. All rights reserved.
*/

(function(){function a(a){if(a&&com.TI.header&&com.TI.header.getDomainToUse){var b=com.TI.header.getDomainToUse();if(!b.match(/^(www\.|login)/i)){var c=a.querySelectorAll("a");Array.prototype.slice.call(c).map(function(a){var c=a.getAttribute("href");return c.match(/^\/[^\/]/)&&a.setAttribute("href",c.replace(/^\/([^\/])/,"//"+b+"/$1")),c.match(/^\/\/www\.(ti\.com\.cn|ti\.com|tij\.co\.jp)\//)&&a.setAttribute("href",c.replace(/^\/\/www\.(ti\.com\.cn|ti\.com|tij\.co\.jp)\//i,"//"+b+"/")),a})}}}function b(a){var b=a.querySelectorAll(".js-footer-collapsible"),c="is-open";Array.prototype.forEach.call(b,function(a){a.addEventListener("click",function(a){a.preventDefault(),766>=window.innerWidth&&(void 0,this.classList.toggle(c),this.nextElementSibling.classList.toggle(c))})})}window.com||(com={}),com.TI||(com.TI={}),com.TI.footer||(com.TI.footer={});var c=function(c){var d=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){c?(e.target.parentElement.removeAttribute("id"),e.target.parentElement.innerHTML=com.TI.footer.contents):(e.target.removeAttribute("id"),e.target.removeAttribute("style"),e.target.innerHTML=com.TI.footer.contents);var f=document.querySelector(".ti_p-responsiveFooter");a(f),b(f),document.getElementById("copyrightYear").innerText=new Date().getFullYear(),d.disconnect()}})}),e=document.getElementById("ti-io-footer");d.observe(e)};com.TI.footer.contents="<footer id=\"tiResponsiveFooter\" class=\"ti_p-responsiveFooter\"> <div class=\"ti_p-responsiveFooter-content\"> <div class=\"ti_p-responsiveFooter-row\"> <svg class=\"ti_p-responsiveFooter-collapse-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\"> <defs> <symbol id=\"ti_p-responsiveFooter-icon-chevron-down\" viewBox=\"0 0 192 192\"> <path d=\"M152.049 75.093l-55.956 55.956-.093-.093-.093.093-55.956-55.956 14.142-14.142L96 102.858l41.907-41.907 14.142 14.142z\"></path> </symbol> </defs> </svg> <div class=\"ti_p-responsiveFooter-col mod-quarter\"> <div class=\"ti_p-responsiveFooter-links-title mod-collapsible js-footer-collapsible\"> \u5173\u4E8E TI <svg class=\"ti_p-responsiveFooter-collapse-icon\" viewBox=\"0 0 192 192\" role=\"img\" title=\"Texas Instruments\"> <use xlink:href=\"#ti_p-responsiveFooter-icon-chevron-down\"></use> </svg> </div> <div class=\"ti_p-responsiveFooter-links-list mod-collapsible\"> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_company\" href=\"//www.ti.com.cn/zh-cn/about-ti/company/overview.html\">\u516C\u53F8</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_careers\" href=\"https://careers.ti.com/zh-hans/\">\u62DB\u8D24\u7EB3\u58EB</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_news\" href=\"https://news.ti.com.cn/\">\u65B0\u95FB\u548C\u6D3B\u52A8</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_investor\" href=\"https://investor.ti.com/\">\u6295\u8D44\u8005\u5173\u7CFB</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_manufacturing\" href=\"https://www.ti.com.cn/zh-cn/about-ti/company/ti-at-a-glance/manufacturing.html\">\u5236\u9020</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_citizenship\" href=\"https://www.ti.com/about-ti/citizenship-community/overview.html\">\u4F01\u4E1A\u516C\u6C11\u610F\u8BC6</a> </div> </div> <div class=\"ti_p-responsiveFooter-col mod-quarter\"> <div class=\"ti_p-responsiveFooter-links-title mod-collapsible js-footer-collapsible\"> \u5FEB\u901F\u94FE\u63A5 <svg class=\"ti_p-responsiveFooter-collapse-icon\" viewBox=\"0 0 192 192\" role=\"img\" title=\"Texas Instruments\"> <use xlink:href=\"#ti_p-responsiveFooter-icon-chevron-down\"></use> </svg> </div> <div class=\"ti_p-responsiveFooter-links-list mod-collapsible\"> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_contact\" href=\"//www.ti.com.cn/zh-cn/info/contact-us.html\">\u8054\u7CFB\u6211\u4EEC</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_e2e_forums\" href=\"https://e2echina.ti.com/\">TI E2E\u2122 \u8BBE\u8BA1\u652F\u6301\u8BBA\u575B</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_csc\" href=\"https://support.ti.com/csm?lang=zh\">\u5BA2\u6237\u652F\u6301\u4E2D\u5FC3</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_packaging\" href=\"//www.ti.com.cn/zh-cn/support-packaging/packaging.html\">\u5C01\u88C5/\u5305\u88C5</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_quality\" href=\"//www.ti.com.cn/zh-cn/support-quality/quality-reliability.html\">\u8D28\u91CF\u548C\u53EF\u9760\u6027&nbsp;</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_faq\" href=\"//www.ti.com.cn/zh-cn/info/myti-faq.html\">myTI \u5E38\u89C1\u95EE\u9898\u89E3\u7B54</a> </div> </div> <div class=\"ti_p-responsiveFooter-col mod-quarter\"> <div class=\"ti_p-responsiveFooter-links-title mod-collapsible js-footer-collapsible\"> \u91C7\u8D2D <svg class=\"ti_p-responsiveFooter-collapse-icon\" viewBox=\"0 0 192 192\" role=\"img\" title=\"Texas Instruments\"> <use xlink:href=\"#ti_p-responsiveFooter-icon-chevron-down\"></use> </svg> </div> <div class=\"ti_p-responsiveFooter-links-list mod-collapsible\"> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_ordering_resources\" href=\"//www.ti.com.cn/zh-cn/ordering-resources/buy.html\">\u8BA2\u8D2D\u4E2D\u5FC3</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_api\" href=\"//www.ti.com.cn/zh-cn/ordering-resources/api-buying.html\">TI API \u5957\u4EF6</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_help\" href=\"//www.ti.com.cn/zh-cn/ordering-resources/help.html\">\u8BA2\u8D2D\u5E2E\u52A9\u548C\u5E38\u89C1\u95EE\u9898\u89E3\u7B54</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_bom_tool\" href=\"//www.ti.com.cn/cross-reference-search/zh-cn/\">\u4EA4\u53C9\u53C2\u8003\u641C\u7D22</a> <a class=\"ti_p-responsiveFooter-link\" data-navtitle=\"footer_distributors\" href=\"//www.ti.com.cn/zh-cn/ordering-resources/distributors.html\">\u6388\u6743\u7ECF\u9500\u5546</a> </div> </div> <div class=\"ti_p-responsiveFooter-col mod-quarter\"> <div class=\"ti_p-responsiveFooter-links-title\">\u8054\u7CFB\u6211\u4EEC</div> <div class=\"ti_p-responsiveFooter-links-list mod-inline mod-socialIcons\"> <a class=\"ti_p-responsiveFooter-social-icon mod-wechat\" data-navtitle=\"footer_wechat\" href=\"https://e2echina.ti.com/group/helpgroup/f/63/t/147487\" target=\"_blank\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 192\" title=\"wechat\"><path d=\"M74 25.6c-36.432 0-66 23.672-66 52.8 0 16.632 9.504 31.328 24.464 41.008L25.6 140l22-13.2a77.78 77.78 0 0025.608 4.4 45.934 45.934 0 01-3.608-17.6c0-29.128 27.544-52.8 61.6-52.8a30.302 30.302 0 014.928.264C127.152 40.472 102.864 25.6 74 25.6m-26.4 22a8.8 8.8 0 11-8.8 8.8 8.8 8.8 0 018.8-8.8m44 0a8.8 8.8 0 11-8.8 8.8 8.8 8.8 0 018.8-8.8m39.6 22c-29.128 0-52.8 19.712-52.8 44s23.672 44 52.8 44a61.542 61.542 0 0016.808-2.2l18.392 11-5.456-16.456C174.76 141.936 184 128.648 184 113.6c0-24.288-23.672-44-52.8-44m-17.6 22a8.8 8.8 0 11-8.8 8.8 8.8 8.8 0 018.8-8.8m35.2 0a8.8 8.8 0 11-8.8 8.8 8.8 8.8 0 018.8-8.8z\"></path></svg> </a> <a class=\"ti_p-responsiveFooter-social-icon mod-e2e\" data-navtitle=\"footer_e2e\" href=\"https://e2echina.ti.com/\" target=\"_blank\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 192\" title=\"e2e\"><path d=\"M170.818 12.627H21.182A13.197 13.197 0 008 25.81v105.349a13.197 13.197 0 0013.182 13.182h97.007l34.622 34.62a1.407 1.407 0 002.403-.995V144.34h15.604A13.197 13.197 0 00184 131.158V25.808a13.197 13.197 0 00-13.182-13.18zM95.361 32.274A20.435 20.435 0 1174.925 52.71a20.458 20.458 0 0120.436-20.436zm36.505 91.66a1.408 1.408 0 01-1.408 1.407H116.5v-22.18a2.111 2.111 0 10-4.223 0v22.18H78.444v-22.18a2.111 2.111 0 10-4.222 0v22.18h-13.96a1.408 1.408 0 01-1.407-1.408V97.786A16.824 16.824 0 0175.66 80.98h39.401a16.824 16.824 0 0116.805 16.805z\"></path></svg> </a> <a class=\"ti_p-responsiveFooter-social-icon mod-bilibili\" data-navtitle=\"footer_bilibili\" href=\"https://space.bilibili.com/1444529151?from=search&seid=7825355417950738039\" target=\"_blank\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 192\" title=\"bilibili\"><path d=\"M38.306 45.446c-19.8 5.578-18.28 25.563-18.28 25.563s.263 42.37-.025 63.808c2.128 21.44 18.675 24.863 18.675 24.863s6.595.129 11.417.129c.506 1.394.886 8.125 8.372 8.125s8.372-8.125 8.372-8.125 54.802-.263 59.37-.263c.262 2.283 1.394 8.5 8.88 8.372s7.992-8.875 7.992-8.875a89.64 89.64 0 0110.148 0c17.759-3.297 18.773-24.1 18.773-24.1s-.238-42.622 0-63.934c-.506-21.312-19.026-25.563-19.026-25.563s-14.464.097-33.275 0l13.645-13.242s2.2-2.708-1.523-5.75-3.931-1.691-5.174-.847c-1.14.77-20.413 19.839-20.413 19.839h-20.04S66.57 25.945 65.317 25.106s-1.452-2.2-5.174.844-1.523 5.75-1.523 5.75l14.04 13.746zm118.416 93.389a6.02 6.02 0 01-5.948 6.088H42.75a6.017 6.017 0 01-5.945-6.088V67.279a6.017 6.017 0 015.945-6.089h108.025a6.02 6.02 0 015.948 6.089z\"></path><path d=\"M48.177 87.493l31.713-6.089 2.411 11.926-31.461 6.089-2.663-11.926zM146.869 87.493l-31.712-6.089-2.412 11.926 31.461 6.089 2.663-11.926zM82.301 117.05s6.978 12.559 14.715-4.06c7.483 16.239 15.726 4.305 15.726 4.305l4.695 3.053s-8.752 14.08-20.298 3.426c-9.766 10.655-20.043-3.407-20.043-3.407z\"></path></svg> </a> </div> </div> </div> <hr class=\"ti_p-responsiveFooter-hr\"> <div class=\"ti_p-responsiveFooter-row\"> <div class=\"ti_p-responsiveFooter-col mod-third\"> <a href=\"//www.ti.com.cn\" class=\"ti_p-responsiveFooter-logo\" data-navtitle=\"footer_logo_link\"> <div class=\"ti_p-responsiveFooter-logo-container\"> <svg class=\"ti_p-responsiveFooter-logo-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4600 600\" role=\"img\" title=\"Texas Instruments\"> <path d=\"M2061.95 123v8.25c14.66 4.58 25.65 8.24 25.65 31.14V396c0 23.8-11.9 27.48-25.65 31.14v8.25h107.18v-8.3c-14.65-3.7-25.65-7.3-25.65-31.2V162.4c0-22.9 11.9-26.57 25.65-31.15V123zM806 123l-19.23 56.8 6.42 3.66c21-26.56 36.6-27.48 89.7-27.48 17.4 0 22 3.67 22 16.5h-.9v222.6c0 23.82-11.9 27.48-23.8 31.14v8.25h102.6v-8.25c-11.9-3.66-23.8-7.32-23.8-31.14v-222.6c0-13.75 4.5-16.5 21.9-16.5 48.5 0 71.4.92 88.8 27.48l6.4-3.66L1057 123zm1003.12 68.74c-48.56 0-86.1 24.74-86.1 70.54 0 34.8 21.06 56.8 65.94 66.87l41.23 9.16c27.4 6.5 36.6 15.6 36.6 33 0 23.8-19.3 35.8-50.4 35.8-44 0-71.5-22.9-94.4-49.4l-6.4 4.6 19.2 70.6h11.9v1.8c0-3.7 3.7-11.9 8.2-11.9 11 5.5 28.4 15.6 62.3 15.6 55.8 0 95.2-27.4 95.2-75.1 0-44.9-24.8-62.3-71.5-73.3l-43-10c-24.8-5.5-32.1-12.8-32.1-27.5 0-17.4 13.7-29.3 44.9-29.3 33.9 0 61.3 16.5 80.6 38.5l6.4-4.5-17.4-61.4h-11c0 5.5-2.8 11-7.3 11-10.1-5.5-25.7-14.6-53.2-14.6zm2674.03.86c-48.56 0-86.1 24.73-86.1 70.53 0 34.8 21.06 56.8 65.94 66.87l41.2 9.16c27.5 6.4 36.6 15.57 36.6 32.98 0 23.82-19.3 35.73-50.4 35.73-44 0-71.5-22.9-94.4-49.47l-6.4 4.58 19.2 70.54h11.9c0-3.66 3.6-11.9 8.2-11.9 11 5.5 28.4 15.56 62.3 15.56 55.8 0 95.2-27.5 95.2-75.12 0-44.9-24.8-60.6-71.5-71.6-13.9-2.87-28.9-6.57-43.1-9.9-24.8-5.5-32.1-12.82-32.1-27.48 0-17.4 13.7-29.32 44.8-29.32 33.9 0 61.4 16.5 80.6 38.47l6.44-4.58-17.4-61.38h-11c0 5.5-2.77 11-7.35 11-10.06-5.5-25.63-14.67-53.1-14.67zm-1951.25 0c-48.55 0-86.1 24.74-86.1 70.54 0 34.8 21.06 56.8 65.94 66.87l41.22 9.2c27.48 6.4 36.64 15.6 36.64 33 0 23.8-19.24 35.7-50.4 35.7-43.97 0-71.45-22.9-94.35-49.4l-6.42 4.6 19.24 70.6h11.9c0-3.6 3.67-11.9 8.25-11.9 11 5.5 28.4 15.6 62.3 15.6 55.87 0 95.26-27.5 95.26-75.1 0-44.9-24.54-60.6-71.26-71.5-14.24-2.9-28.88-6.5-43.2-9.9-24.75-5.5-32.07-12.8-32.07-27.4 0-17.4 13.73-29.3 44.88-29.3 33.9 0 61.38 16.5 80.62 38.48l6.4-4.6-17.4-61.35h-11c0 5.5-2.74 11-7.32 11-10.07-5.5-25.65-14.66-53.13-14.66zm-344.44 3.7v8.23c13.74 6.4 22.9 11 22.9 31.14V396c0 22-8.25 27.48-22.9 31.15v8.24h79.7v-8.3c-12.83-3.7-24.74-9.2-24.74-31.2V257.6h1.83l157.57 180.47h8.24V235.7c0-22.9 11.9-26.56 21.07-31.14v-8.25h-74.2v8.2c13.74 4.6 22 8.3 22 31.2v97.1h-1.85l-120-136.5zm-1166.16 0v8.24c15.56 4.58 22.9 8.25 22.9 31.15V396c0 23.82-8.25 27.48-22.9 31.14v8.25h194.2l22-55.9-6.42-4.6c-19.23 25.6-39.4 31.1-66.87 31.1h-50.3c-15.5 0-19.2-.9-19.2-15.6v-66.8h60.5c23.8 0 27.5 5.5 31.2 19.2h9.2V276h-9.1c-3.6 13.74-7.3 20.15-31.1 20.15H1095v-55.88c0-11.9 3.63-15.57 19.2-15.57h43c27.45 0 42.1 7.33 62.26 29.3l6.43-4.57-19.3-53.13zm372.83.03v8.25c17.4 1.83 22.9 11 12.83 26.57l-36.65 54.05-32.9-49.47c-13.7-20.15-3.6-28.4 11.9-31.15v-8.25h-112.7v8.24c15.6 4.58 23.8 9.16 36.7 27.5l-1.8-.05 59.5 84.28-55.9 79.7c-17.4 23.82-27.5 27.5-43 31.15v8.25h89.8v-8.24c-17.4-3.66-24.7-10.07-12.8-27.48l39.4-61.38 41.2 59.55c15.6 22-.9 27.48-14.6 29.3v8.26h163v-8.2c-16.5-2.7-23.8-8.2-15.6-30.2l11-27.5h97.1l10.1 27.5c6.4 18.3 4.6 27.5-14.6 30.3v8.3h99.9v-8.2c-11.9-3.6-22-13.7-27.5-26.5l-76.9-203.4h-53.1L1494 386c-8.24 19.25-14.65 29.3-22.9 33.9-6.4-3.67-11.9-10.1-19.23-20.16l-65.05-92.5 53.13-74.2c13.74-20.12 25.65-23.8 39.4-28.4v-8.22zm1467.56.87v8.24c15.5 4.58 22.9 8.25 22.9 31.15v160.3c0 23.8-8.3 27.5-22.9 31.1v8.2h99.8V428c-14.7-3.65-23.8-7.32-23.8-31.13v-59.54h24.7c28.4 0 33 11.9 51.3 50.38 15.6 32.1 35.7 52.2 74.2 52.2 19.2 0 27.5-3.6 34.8-8.2v-6.4c-31.2-4.6-41.3-30.2-59.6-60.4-14.7-22.9-29.3-32.9-46.7-37.5v-1.8c41.2-6.4 64.1-27.5 64.1-62.3 0-46.7-36.7-65.9-97.1-65.9zm1314.5 0l-19.2 61.38 6.4 4.58c25.6-33.9 32-36.64 65.9-36.64 11.9 0 15.5.92 15.5 15.57v154.8c0 23.8-7.4 27.5-25.7 31.1v8.2H4321V428c-18.32-3.66-25.65-7.32-25.65-31.14V242.1c0-14.66 3.66-15.57 15.57-15.57 33.9 0 43.06 3.66 67.8 36.64l6.4-4.58-19.23-61.4h-188.8zm-97.2 0v8.25h.9c13.7 4.58 22 8.25 22 31.15v97.1h-1.9l-120-136.5h-69.6v8.26c13.7 6.4 22.9 11 22.9 31.14v160.3c0 22-8.3 27.5-22.9 31.16v8.24h78.7v-8.24c-12.9-3.66-24.8-9.16-24.8-31.15V258.6h1.8L4124 439.05h8.25V236.6c0-22.9 11.9-26.57 21.07-31.15v-8.24zm-1429.1 0l-19.3 61.4 6.4 4.57c25.6-33.9 32-36.65 65.9-36.65 11.9 0 15.5.92 15.5 15.58v154.8c0 23.83-7.3 27.5-25.7 31.16v8.25h101.7v-8.2c-18.35-3.6-25.68-7.3-25.68-31.1V242.1c0-14.66 3.64-15.57 15.55-15.57 33.9 0 43.1 3.66 67.8 36.64l6.4-4.58-19.2-61.4H2651zm624.7 0v8.26h-.9c11.9 2.74 23.8 8.24 23.8 31.14v117.26c0 38.48-14.7 55.88-58.6 55.88-46.7 0-63.2-17.4-63.2-55.88V236.6c0-22.9 9.1-28.4 22.9-31.14v-8.24h-97.1v8.24c14.6 2.75 23.8 8.25 23.8 31.15v121c0 63.2 54.9 82.5 107.2 82.5 57.7 0 98.9-19.2 98.9-86.1V236.6c0-22.9 7.3-27.48 21-31.15v-8.24zm414.9.03v8.25c15.5 4.58 22.9 8.25 22.9 31.15v160.3c0 23.83-8.3 27.5-22.9 31.16v8.2H3884l22-55.9-6.4-4.6c-19.25 25.6-40.32 31.1-66.9 31.1-16.44 1.6-33.7.2-50.35-.1-15.57-.3-19.24-.9-19.24-15.6v-66.9h60.5c23.8 0 27.5 5.5 31.2 19.2h9.2v-66.8h-9.1c-3.6 13.7-7.3 20.1-31.1 20.1h-60.5V241c0-11.92 3.7-15.6 19.3-15.6h43.1c27.5 0 41.2 7.35 62.3 29.34l6.4-4.6-19.2-53.1zm-104.5.9l-65.5 152.8-68.2-152.8h-85.2v8.25c15.6 4.58 22.9 8.25 22.9 31.15v160.3c0 21.08-9.2 26.58-22.9 31.16v8.2h75.1V429c-15.6-4.58-22.9-10.08-22.9-31.15V248.5l86.1 191.47h6.4l83.3-191.46v149.4c0 23.9-10.1 27.5-22 31.2v8.3h97.1V429c-15.6-3.67-22.9-7.34-22.9-31.16v-160.3c0-22.9 8.2-26.57 22.9-31.15v-8.3zm-633 28.4h26.6c28.4 0 45.8 11 45.8 38.47 0 29.32-19.3 43.97-46.7 43.97h-41.3v-63.2c0-15.58 3.7-19.25 15.6-19.25zm-1370.5 11.9l38.46 103.5h-77.85z\"></path> <path d=\"M437.65 46.6h-54.97l-11 53.14h54.97l11-53.13zm-62.3 316.97L423 122.64h-54.97L320.4 363.57zm185.97-170.4v-70.53h-113.6l-14.65 71.46h41.22l-12.9 65.94h-41.2l-13.7 71.5c-.9 4.6-1.9 8.27-2.8 11.9-3.7 22 6.4 21.1 36.6 21.1l-13.8 70.54h-53.1c-50.4 0-91.6-.9-81.6-52.2 1.8-8.26 3.6-15.6 5.5-23.83l19.2-98h-39.4l12.8-65.9h39.4l14.7-71.5h-36.6V15.55H171v219.8H8c3.67 56.8 54.05 65.02 72.38 105.33 12.82 27.48 23.82 76.96 60.47 76.96 28.4 0 28.4-36.65 65.04-36.65 36.6 0 52.2 68.7 85.2 126.4 23.8 44.9 64.1 74.2 100.7 76.9 30.2 1.8 44.9-8.3 44.9-8.3-8.3-16.5-11.9-32.1-11.9-56.8 0-36.7 28.4-73.3 60.4-97.1 44.9-33 92.5-44.9 109-48.6V260s-32.9-19.2-32.9-66.83z\"></path> </svg> </div> </a> </div> <div class=\"ti_p-responsiveFooter-col mod-twothirds\"> <p class=\"ti_p-responsiveFooter-copy\">\u6570\u5341\u5E74\u6765\uFF0C\u5FB7\u5DDE\u4EEA\u5668 (TI) \u4E00\u76F4\u5728\u8FDB\u6B65\u3002\u6211\u4EEC\u662F\u4E00\u5BB6\u5168\u7403\u6027\u7684\u534A\u5BFC\u4F53\u516C\u53F8\uFF0C\u81F4\u529B\u4E8E\u8BBE\u8BA1\u3001\u5236\u9020\u3001\u6D4B\u8BD5\u548C\u9500\u552E\u6A21\u62DF\u548C\u5D4C\u5165\u5F0F\u5904\u7406\u82AF\u7247\u3002\u6211\u4EEC\u7684\u4EA7\u54C1\u53EF\u5E2E\u52A9\u5BA2\u6237\u9AD8\u6548\u5730\u7BA1\u7406\u7535\u6E90\u3001\u51C6\u786E\u5730\u611F\u5E94\u548C\u4F20\u8F93\u6570\u636E\u5E76\u5728\u5176\u8BBE\u8BA1\u4E2D\u63D0\u4F9B\u6838\u5FC3\u63A7\u5236\u6216\u5904\u7406\u3002</p> </div> </div> <div class=\"ti_p-responsiveFooter-row\"> <div class=\"ti_p-responsiveFooter-col mod-full\"> <div class=\"ti_p-responsiveFooter-inlineLinks\"> <div class=\"ti_p-responsiveFooter-links-overflow\"> <div class=\"ti_p-responsiveFooter-links-list mod-inline\"> <a class=\"ti_p-responsiveFooter-link mod-bordered\" data-navtitle=\"footer_cookie\" href=\"//www.ti.com.cn/zh-cn/legal/terms-conditions/cookie-policy.html\">Cookie \u653F\u7B56</a> <a class=\"ti_p-responsiveFooter-link mod-bordered\" data-navtitle=\"footer_privacy\" href=\"//www.ti.com.cn/zh-cn/legal/terms-conditions/privacy-policy.html\">\u9690\u79C1\u6743\u653F\u7B56</a> <a class=\"ti_p-responsiveFooter-link mod-bordered\" data-navtitle=\"footer_termSale\" href=\"//www.ti.com.cn/zh-cn/legal/terms-conditions/terms-of-sale.html\">\u9500\u552E\u6761\u6B3E</a> <a class=\"ti_p-responsiveFooter-link mod-bordered\" data-navtitle=\"footer_termUse\" href=\"//www.ti.com.cn/zh-cn/legal/terms-conditions/terms-of-use.html\">\u4F7F\u7528\u6761\u6B3E</a> <a class=\"ti_p-responsiveFooter-link mod-bordered\" data-navtitle=\"footer_trademarks\" href=\"https://www.ti.com/legal/terms-conditions/trademarks.html\">\u5546\u6807</a> <a class=\"ti_p-responsiveFooter-link mod-bordered\" data-navtitle=\"footer_websiteFeedback\" href=\"//www.ti.com.cn/guidedsupport/cn/docs/webform/tiwebsitefeedback.tsp\">\u7F51\u7AD9\u53CD\u9988</a> </div> </div> <p class=\"ti_p-responsiveFooter-copyright\"><a data-navtitle=\"footer_copyright\" href=\"https://www.ti.com/legal/terms-conditions/copyright.html\">\xA9 Copyright 1995-<span id=\"copyrightYear\"></span></a> Texas Instruments Incorporated\u3002\u7248\u6743\u6240\u6709\u3002</p> </div> </div> </div> <div class=\"ti_p-responsiveFooter-row\"> <div class=\"ti_p-responsiveFooter-col mod-full\"> <p class=\"ti_p-responsiveFooter-biz mod-lined\"> <span>\u6CAAICP\u590718023290\u53F7</span> <a href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502008906\" data-di-id=\"di-id-93cd9d9b-efadb7ce\"> <img src=\"https://www.ti.com/store/_ui/responsive/common/images/ICP-Beian-Logo.png\" alt=\"China Police Logo\"> \u6CAA\u516C\u7F51\u5B89\u5907 31011502008906\u53F7 </a> </p> </div> </div> </div></footer>",document.addEventListener("DOMContentLoaded",function(){var a=document.getElementById("tiFooter"),b=document.querySelector(".sp-page-root"),d=!1;if(a)a.innerHTML="<div id=\"ti-io-footer\" style=\"height:20px;\"></div>",d=!0;else{if(a=document.getElementById("tiResponsiveFooter"),a&&0<a.children.length)return;var e=document.createElement("div");e.setAttribute("id","ti-io-footer"),e.setAttribute("style","height:20px;"),b?document.querySelector(".sp-page-root section.page").appendChild(e):document.body.appendChild(e)}c(d)})})();