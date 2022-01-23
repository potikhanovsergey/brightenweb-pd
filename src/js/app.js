const mainTitle = document.getElementsByClassName('main-title')[0];
var width = mainTitle.clientWidth || document.body.clientWidth;
var height = mainTitle.clientHeight || document.body.clientHeight;
var optionsBackground, bsBackground;

optionsBackground = {
  points: 10,
  inkAmount: 35,
  size: 400,
  frames: 10,
  frameAnimation: true,
  splashing: false,
  image: '../img/mainback.png',
  centered: true,
  queue: true,
  padding: 11,
  stretch: true,
  overlap: 100,
  frames: 60,
  frameAnimation: true,
  width: width,
  height: height,
};

bsBackground = new Brushstroke(optionsBackground);

//const mainTitle = document.getElementsByClassName('main-title')[0];

const canvas = bsBackground.defaults.ctx.canvas;
const ctx = bsBackground.defaults.ctx;
mainTitle.append(canvas);

bsBackground.draw();

$('.modal-link').animatedModal({
  animatedIn: 'fadeIn',
  animatedOut: 'fadeOut',
  color: '#111111',
});
