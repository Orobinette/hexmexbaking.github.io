$.get("/templates/head.html", function(data){
    $("#head-placeholder").replaceWith(data);
});
$.get("/templates/nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});