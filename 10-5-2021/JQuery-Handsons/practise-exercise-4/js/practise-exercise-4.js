$(() => {

    
    $('<a href="#top">back to top</a>')
        .insertAfter('p:nth-child(n+4)');
    $('a[href="#top"]').click(function() {
        $('<p>You were here</p>').insertAfter(this);
    });
});
