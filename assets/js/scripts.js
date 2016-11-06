$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


 $(document).ready(function () {
    $('a').click(function() {
        //store the id of the collapsible element
        localStorage.setItem('collapseItem', $(this).attr('href'));
    });

    var collapseItem = localStorage.getItem('collapseItem'); 
    if (collapseItem) {
       $(collapseItem).collapse('show')
    }
})

$(document).ready(function() {
    if(location.hash) {
        $('a[href=' + location.hash + ']').tab('show');
    }
    $(document.body).on("click", "a[data-toggle]", function(event) {
        location.hash = this.getAttribute("href");
    });
});
// $(window).on('popstate', function() {
//     var anchor = location.hash || $("a[data-toggle=tab]").first().attr("href");
//     $('a[href=' + anchor + ']').tab('show');
// });
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


