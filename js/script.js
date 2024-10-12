function myFunction(x) {
    x.classList.toggle("fa-chevron-up");
}

$("a.link").click(function () {
    $("a.link").css("background-color", "black");
    $(this).css("background-color", "red");
});