$("#start").click(function() {
    $(".ball").show();
    $(".basketball").hide();
    $(".lonzo").hide();
    $(".net").hide();
     $("body").css("background-color","black");
     $("body").css("color","white");
});


$(".ball").click(function() {
    $("#swish").text("Now click on the basketball");
    $(".ball").hide();
    $(".basketball").show();
    $(".lonzo").hide();
    $("body").css("background-color","yellow");
    $("body").css("color","black");
    
});

$(".basketball").dblclick(function() {
    $("#swish").text("He SHOOTS");
    $(".ball").hide();
    $(".basketball").hide();
    $(".lonzo").show();
    $("body").css("background-color","green");
});

$(".lonzo").mouseleave(function() {
    $("#swish").text("THREE POINTERRRRRRRR!!!!");
    $(".ball").hide();
    $(".basketball").hide();
    $(".lonzo").hide();
    $(".net").show();
    $("body").css("background-color","purple");
    $("body").css("color","white");
});



