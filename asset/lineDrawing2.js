anime({
  targets: ".line-drawing2 .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 5500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});
