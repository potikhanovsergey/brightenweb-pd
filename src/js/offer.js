// $(document).ready(function() {
//     $(window).scroll(offerTestScroll);
//     let offerViewed = false;
//     let offerSection = $('.offer');

//     console.log('offer')

//     var offerWidth = offerSection.width || document.body.clientWidth;
//     var offerHeight = offerSection.height || document.body.clientHeight;
//     var offerOptionsBackground, offerBsBackground;

//     offerOptionsBackground = {
//         points: 10,
//         inkAmount: 10,
//         size: 300,
//         frames: 10,
//         frameAnimation: true,
//         splashing: false,
//         image: '../img/mainback.png',
//         centered: true,
//         queue: true,
//         padding: 11,
//         stretch: true,
//         overlap: 100,
//         frames: 100,
//         width: offerWidth,
//         height: offerHeight,
//     };

//     offerBsBackground = new Brushstroke(offerOptionsBackground);
//     const offerCanvas = bsBackground.defaults.ctx.canvas;
//     const offerCtx = bsBackground.defaults.ctx;
//     offerSection.append(offerCanvas);

//     function offerTestScroll() {
//         if (isScrolledIntoView(offerSection && !offerViewed)) {
//             console.log('draw bg')
//             offerViewed = true;
//             // offerBsBackground.draw();
//         }
//     }
// })
