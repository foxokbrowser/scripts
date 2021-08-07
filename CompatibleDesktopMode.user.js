// ==UserScript==
// @name         Compatible Desktop Mode(兼容桌面版)
// @version      1.0
// @description  Compatible Desktop Mode
// @author       Foxok
// @include      www.aliyundrive.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var oMeta = document.createElement('meta');
    let DEFAULT_WIDTH = 640,
        ua = navigator.userAgent.toLowerCase(),
        deviceWidth = window.screen.width,
        devicePixelRatio = window.devicePixelRatio || 1,
        targetDensitydpi = DEFAULT_WIDTH / deviceWidth * devicePixelRatio * 160;
    oMeta.content = 'target-densitydpi=' + targetDensitydpi;
    oMeta.name = 'viewport';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
})();
