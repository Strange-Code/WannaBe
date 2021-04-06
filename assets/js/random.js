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

    //$("#random").innerHTML = "Si";

    $("#random").addClass("random");
    $("#random").css("top", `${Math.random() * 700}px`);
    $("#random").css("right", `${Math.random() * randomAncho}px`);


    var x = Math.floor((Math.random() * 10) + 1);
    var audio = document.getElementById('audio');

    if (x % 2 == 0) {
        audio.src = 'assets/audio/casi1.mp3';
    } else {
        audio.src = 'assets/audio/casi2.mp3';
    }

    /*
    switch (foo) {
        case 1:
            audio.src = 'assets/audio/acepto.mp3';
        default:
            audio.src = 'assets/audio/acepto.mp3';
    }
    */
    audio.load();
    audio.play();

});

$("#yes").click(function() {

    $("#message").css("display", 'block');
    var audio = document.getElementById('audio');
    audio.src = 'assets/audio/acepto.mp3';
    audio.load();
    audio.play();
});

$("#close").click(function() {



    $("#message").css("display", 'none');
});