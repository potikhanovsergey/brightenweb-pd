// $(window).scroll(testScroll);
// let viewed = false;

// function testScroll() {
//   if (isScrolledIntoView($('.numbers__number')) && !viewed) {
//     viewed = true;
//     $('.numbers__number span').each(function() {
//       let w = $(this).width();
//       $(this).css('display', 'block');
//       $(this).css('width', w + 10);
//       $(this)
//         .prop('Counter', 0)
//         .animate(
//           {
//             Counter: $(this).text(),
//           },
//           {
//             duration: 2000,
//             easing: 'swing',
//             step: function(now) {
//               $(this).text(Math.ceil(now));
//             },
//           },
//         );
//     });
//   }
// }
