(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	tl.from(".bg", { duration: .4, opacity: 0, ease: Power3.easeIn });
	tl.from(".hand", { duration: .3, x: "+=130", ease: Power3.easeOut });
	tl.from(["._swirl", "._lime-bottom", "._lime-top"], { duration: .4, scale: 0, ease: Back.easeOut, onComplete: function onComplete() {
			console.log('lkj');
			TweenLite.to(["._swirl", "._lime-bottom", "._lime-top"], { duration: .3, yoyo: true, repeat: 8, ease: Linear.easeNone, rotation: "+=11" });
		} });
	tl.from(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], { duration: .4, scale: 0, ease: Back.easeOut, onComplete: function onComplete() {
			TweenLite.to(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], { duration: .3, yoyo: true, repeat: 8, ease: Linear.easeNone, rotation: "+=11" });
		} });
	tl.from(["._lemon-main"], { duration: .4, scale: 0, ease: Back.easeOut });

	tl.from(".t1", { duration: .65, scale: 1, opacity: 0, ease: Back.easeIn });
	tl.from(".cta", { duration: .3, opacity: 0, ease: Power3.easeOut }, "+=.3");

	tl.from([".logo", ".legal"], { duration: .3, opacity: 0, ease: Power3.easeOut }, "+=.5");
}

start();

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

var w = size.w;
var h = size.h;

function init() {

	return tl;
}

exports.size = size;
exports.init = init;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
