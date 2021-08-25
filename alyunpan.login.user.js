// ==UserScript==
// @name         阿里云盘影音宝X登录脚本
// @version      1.0
// @match        https://passport.aliyundrive.com/*
// @grant        GM_openInTab
// @run-at       document-start

// ==/UserScript==

(function () {
    'use strict';
    // Demo code
    let prefLocation = location.href;
    let url = "https://passport.aliyundrive.com/mini_login.htm?lang=zh_cn&appName=aliyun_drive&appEntrance=web&styleType=auto&bizParams=&notLoadSsoView=false&notKeepLogin=false&isMobile=true&hidePhoneCode=true&rnd=0.9186864872885723";
    if (location.href != url){
        alert("由于当前地址不是登录地址，请再一次运行此油猴脚本。");
        window.location = url;
    }
    let loginCallback = function () {
        setTimeout(function () {
            window.location = "https://www.aliyundrive.com"
        },5000);
    }
    if (window.alyunInited){
        return;
    }
    window.alyunInited = true;
    !function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}({6:function(t,e,r){t.exports=r(7)},7:function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){function e(t){var e=t.split("?");if(e.length>1){for(var r=e[1].split("&"),n={},o=0;o<r.length;o++){var i=r[o].split("="),a=i[0],s=i[1];n[a]=s}return n}return null}function r(t){return t instanceof File||t instanceof Blob||t instanceof ArrayBuffer?"binary":t instanceof FormData?"form-data":"x-www-form-urlencoded"}!function(t){var o=XMLHttpRequest.prototype,i=o.open,a=o.send,s=o.setRequestHeader;o.open=function(t,e){return this._method=t,this._url=e,this._requestHeaders={},this._startTime=(new Date).getTime(),i.apply(this,arguments)},o.setRequestHeader=function(t,e){return this._requestHeaders[t]=e,s.apply(this,arguments)},o.send=function(o){return this.addEventListener("load",(function(){var i=(new Date).getTime(),a=i-this._startTime;if(t){var s=this._url?this._url.toLowerCase():this._url;if(s){var u={url:this._url,method:this._method,timestamp:this._startTime,headers:this._requestHeaders},f=e(s);if(f&&(u.params=f),o)if("string"==typeof o){var l=void 0;try{var c=JSON.parse(o);l="object"==(void 0===c?"undefined":n(c))&&c?"JSON":"text"}catch(t){l="text"}u.body=o,u.dataType=l}else"object"!==(void 0===o?"undefined":n(o))&&"array"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o||(u.body=o,u.dataType=r(o));else u.dataType="none";var p=this.getAllResponseHeaders(),d={status:this.status,timestamp:i,time:a,headers:p};this.responseText&&(d.body=this.responseText);try{var y={};y.response=this.response,y.url=s,t(y)}catch(t){console.log(t)}}}})),a.apply(this,arguments)}}((function(e){try{var r=JSON.parse(e.response).content.data.bizExt;if(r){var n="yybx://account?type=alyun&data="+r;window.location=n,t()}}catch(t){}}))}((function(){loginCallback()}))}});
})();
