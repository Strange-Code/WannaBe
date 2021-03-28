$("#random").hover(function() {

    $("#random").addClass("random");
    $("#random").css("top", `${Math.random() * 700}px`);
    $("#random").css("right", `${Math.random() * 1500}px`);

});


$("#yes").click(function() {

    $("#message").css("display", 'block');
});

$("#close").click(function() {

    $("#message").css("display", 'none');
});