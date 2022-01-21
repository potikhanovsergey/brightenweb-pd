function isScrolledIntoView(elem) {
  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();
  let elemTop = $(elem).offset().top;
  let elemBottom = elemTop + $(elem).height();
  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
