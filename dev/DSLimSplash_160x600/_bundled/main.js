(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.init)();

module.exports = {};

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power4.out"
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

var w = size.w;
var h = size.h;

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	var looper = { duration: .3, yoyo: true, repeat: 15, ease: Linear.easeNone, rotation: "+=16" };

	tl.set(".frame1", { opacity: 1 });

	tl.from(".bg", { duration: .4, opacity: 0, ease: Power3.easeIn });

	tl.from(["._swirl", "._lime-bottom", "._lime-top"], { duration: .4, scale: 0, ease: "custom", onComplete: function onComplete() {
			console.log('lkj');
			TweenLite.to(["._swirl", "._lime-bottom", "._lime-top"], looper);
		} });
	tl.from(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], { duration: .4, scale: 0, ease: "custom", onComplete: function onComplete() {
			TweenLite.to(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], looper);
		} });

	tl.from(["._lemon-main"], { duration: .4, scale: 0, ease: "custom" });

	tl.to(".t1", { duration: .2, opacity: 0, ease: Power3.easeOut }, 4.3);
	tl.from(".t2", { duration: .65, scale: 1.5, opacity: 0, ease: "custom" });
}

exports.size = size;
exports.init = init;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
