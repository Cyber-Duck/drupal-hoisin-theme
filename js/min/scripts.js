/*
 * febs
 * Cyber-Duck front end basic build system.
 * @version v1.2.0
 */

$(document).ready(function () {
"use strict";

// Main navigation
jQuery('.btn-menu').on('click', function (e) {
  e.preventDefault();
  jQuery('body').toggleClass('menu-open');
}); // Links

jQuery(document).on('click', '.ascroll', function (e) {
  e.preventDefault();
  var target = jQuery(this).attr('href');
  scrollToHash(target);
});

var scrollToHash = function scrollToHash(target) {
  var headerHeight;
  var targetElem = jQuery(target);

  if (jQuery('.main-head').css('position') === 'fixed') {
    headerHeight = jQuery('.main-head').outerHeight();
  } else {
    headerHeight = 0;
  }

  var scrollTo = jQuery(targetElem).offset();

  if (scrollTo) {
    jQuery(document).trigger('scroll');
    var scrollTarget = scrollTo.top - headerHeight;
    jQuery('html, body').animate({
      scrollTop: scrollTarget
    }, 500, null);
  }
};
//# sourceMappingURL=scripts.js.map
