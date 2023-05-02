(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
console.log('test');
const about_button = document.querySelector('.header-ele.about');
const tokenomics_button = document.querySelector('.header-ele.tokenomics');
const roadmap_button = document.querySelector('.header-ele.roadmap');
const bozo_logo = document.querySelector('.logo-first');
function playAudio(url) {
    new Audio(url).play();
}
about_button.addEventListener('click', () => {
    const about_section = document.getElementById('about');
    about_section.scrollIntoView({ behavior: 'smooth' });
});
tokenomics_button.addEventListener('click', () => {
    const tokenomics_section = document.getElementById('tokenomics');
    tokenomics_section.scrollIntoView({ behavior: 'smooth' });
});
bozo_logo.addEventListener('click', () => {
    playAudio('../assets/Bozo - Sound Effect.mp3');
});

},{}]},{},[1]);
