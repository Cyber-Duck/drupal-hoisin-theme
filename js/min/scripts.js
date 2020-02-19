/*
 * drupal-hoisin-theme
 * Hoisin starter theme for Drupal. Hoisin is a very simple responsive front end mini framework made to kick start your web project, written in Sass.
 * @version v1.0.0
 */

(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.hoisin_behaviors = {
        attach: function (settings) {
"use strict";

// Main navigation
jQuery(document).once('nav-click').on('click touchend', '.btn-menu', function (e) {
  e.preventDefault();
  jQuery('body').toggleClass('menu-open');
});
"use strict";

var _this = void 0;

// Links
jQuery(document).once('scroll-click').on('click', '.ascroll', function (e) {
  e.preventDefault();
  var target = jQuery(_this).attr('href');
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
        }
    };
})(jQuery, Drupal, drupalSettings);
//# sourceMappingURL=scripts.js.map
