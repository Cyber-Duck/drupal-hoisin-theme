// Main navigation
jQuery(document).once('nav-click').on('click touchend', '.btn-menu', (e) => {
    e.preventDefault();
    jQuery('body').toggleClass('menu-open');
});
