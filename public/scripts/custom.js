var mainNav = $("#mainNavBar");
var collapsedNav = $("#collapsedNav");

$(document).on("scroll", function(){
    if($("html").scrollTop() > $("nav").height()){	
	collapsedNav.show();
    }else{
	collapsedNav.hide();
    }
});


$(document).ready(function(){
    collapsedNav.hide();
});
