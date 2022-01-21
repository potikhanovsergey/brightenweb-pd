// const stages = document.querySelector('.stages');
// const links = stages.querySelectorAll('a');
// const anchors = document.querySelectorAll('.stage');
// let activeAnchor = 0;
// for (let link of links) {
//   const href = link.getAttribute('href');
//   const anchorBlock = stages.querySelector(href);
//   //console.log(anchorBlock);
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     anchorBlock.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   });
// }

// window.addEventListener('wheel', stagesScroll, { passive: false });

// let activeStage = -1;
// let changingBlock = false;
// function focusOn(element) {
//   element.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });
// }

// function stagesScroll(e) {
//   console.log(e);
//   if (e.path.includes(stages)) {
//     console.log('include');
//     if (
//       (activeStage <= 0 && e.wheelDelta > 0) ||
//       (activeStage >= anchors.length - 1 && e.wheelDelta < 0)
//     ) {
//       activeStage = -1;
//       return;
//     }
//     e.preventDefault();
//     if (changingBlock) {
//       return;
//     }
//     changingBlock = true;
//     activeStageMid = e.wheelDelta > 0 ? -1 : 1;
//     focusOn(anchors[activeStageMid + activeStage]);
//     setTimeout(() => {
//       changingBlock = false;
//       activeStage += activeStageMid;
//       focusOn(anchors[activeStage]);
//     }, 800);
//   }
// }
