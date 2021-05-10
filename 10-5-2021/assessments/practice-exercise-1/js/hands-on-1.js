$(() =>{
   // $('ul>li>ul>li').addClass('special');
   // $(#selected-plays>li>ul>li).addClass('special');
    $('#selected-plays li:not(#selected-plays>li)')
        .addClass('special');
    $('table tr td:nth-child(3)').addClass('year');
    $('td:contains(Tragedy)').first().addClass('special');
});