jQuery(function($) {
    $('.my-button').click(function() {
        $('.background').toggleClass('active-class');
        return false;
    });
});