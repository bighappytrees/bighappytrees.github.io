"use strict";

var moonPath = 'M13 27.5C13 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 13 12.3122 13 27.5Z';
var sunPath = 'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z';
var darkMode = document.querySelector('#darkMode');
var helpText = document.querySelector('#helpText');
var toggle = false;
anime({
  targets: '#headline path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 500,
  delay: function delay(el, i) {
    return i * 33;
  },
  direction: 'alternate',
  loop: true
}); // click on the sun

darkMode.addEventListener('click', function () {
  // setup the timeline
  var timeline = anime.timeline({
    duration: 750,
    easing: 'easeOutExpo'
  });
  timeline.add({
    targets: '.sun',
    d: [{
      value: toggle ? moonPath : sunPath
    }]
  }).add({
    targets: '#darkMode',
    rotate: '1turn'
  }, '-=600').add({
    targets: 'section',
    backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(0,166,79)'
  }, '-=700'); // toggle logic

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});