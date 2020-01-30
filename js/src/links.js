// Links
jQuery(document).once('scroll-click').on('click', '.ascroll', function (e) {
    e.preventDefault();
    let target = jQuery(this).attr('href');
    scrollToHash(target);
});

const scrollToHash = function (target) {
    let headerHeight;
    let targetElem = jQuery(target);

    if (jQuery('.main-head').css('position') === 'fixed') {
        headerHeight = jQuery('.main-head').outerHeight();
    } else {
        headerHeight = 0;
    }

    let scrollTo = (jQuery(targetElem).offset());

    if (scrollTo) {
        jQuery(document).trigger('scroll');
        let scrollTarget = (scrollTo.top - headerHeight);

        jQuery('html, body').animate({
            scrollTop: scrollTarget
        }, 500, null);
    }
}
