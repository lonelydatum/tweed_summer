(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.init)([".wiggle1", ".wiggle2"]);

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

var looper = { duration: .3, yoyo: true, repeat: 15, ease: Linear.easeNone, rotation: "+=20" };

function starter() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from(".bg", { duration: .4, opacity: 0, ease: Power3.easeIn });
	return tl;
}

function wiggle(list) {
	var tl = new TimelineMax();
	list.map(function (a) {
		tl.from(a, { duration: .4, scale: 0, ease: "custom", onComplete: function onComplete() {
				TweenLite.to(a, looper);
			} });
	});
	return tl;
}

function ender(tl) {
	tl.to(".t1", { duration: .2, opacity: 0, ease: Power3.easeOut }, 4.3);
	tl.from(".t2", { duration: .5, scale: 1.5, opacity: 0, ease: "custom" });
}

function init(list) {
	var tl = starter();
	wiggle(list);
	tl.from([".fruit-main"], { duration: .4, scale: 0, ease: "custom" });
	ender(tl);
}

function mango() {
	var tl = starter();
	tl.add(wiggle([".wiggle"]));

	tl.from([".fruit-main"], { duration: .4, scale: 0, ease: "custom" });
	ender(tl);
}

function tweed(wiggle) {

	var tl = starter();
	wiggle.map(function (a) {
		tl.from(a, { duration: .4, scale: 0, ease: "custom", onComplete: function onComplete() {
				TweenLite.to(a, looper);
			} });
	});
	ender(tl);
}

exports.size = size;
exports.init = init;
exports.mango = mango;
exports.tweed = tweed;
exports.looper = looper;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
