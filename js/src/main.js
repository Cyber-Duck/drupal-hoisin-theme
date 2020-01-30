// Main navigation
jQuery(document).once('nav-click').on('click', '.btn-menu', function (e) {
    e.preventDefault();
    jQuery('body').toggleClass('menu-open');
});
