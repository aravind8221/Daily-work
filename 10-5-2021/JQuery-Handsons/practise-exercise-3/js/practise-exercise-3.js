$(() => {
    $('.chapter-title').click(function() {
        $(this).nextAll().toggle();
    });
});