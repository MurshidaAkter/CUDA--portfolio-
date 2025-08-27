$(document).ready(function(){

    //STICKY MENU
    $(".js--service-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //ACTIVE class
    $("nav ul li a").click(function () { 
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav a img.logo").click(function () { 
        $("nav ul li a").removeClass("active");
        $("nav ul li a:first-child a").addClass("active");
    });

    
    //MIX IT UP (Portfolio section)
    var mixer = mixitup('.filter-container');

});


function openNav(){
    document.getElementById("mobileNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobileNav").style.width = "0%";
}
