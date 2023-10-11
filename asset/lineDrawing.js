anime({
  targets: ".line-drawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 900,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});
