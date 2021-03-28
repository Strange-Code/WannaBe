$("#random").hover(function() {

    //var altura = screen.height;
    var ancho = screen.width;
    var randomAncho = 1500;
    //console.log('ALTO' + altura)
    console.log('ANCHO' + ancho);
    console.log('Math.random()' + Math.random());
    if (ancho < 980) {
        randomAncho = 200;
    }

    $("#random").addClass("random");
    $("#random").css("top", `${Math.random() * 700}px`);
    $("#random").css("right", `${Math.random() * randomAncho}px`);

});


$("#yes").click(function() {

    $("#message").css("display", 'block');
});

$("#close").click(function() {

    $("#message").css("display", 'none');
});