var slideIndex = 0;
var timeouts = [];
showSlides_auto();

function plusSlides(n) {
    showSlides_manu(slideIndex += n);
}

function showSlides_manu(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < timeouts.length; i++)
        clearTimeout(timeouts[i]);
    timeouts = [];
    timeouts.push(setTimeout(showSlides_auto, 8000));
}

function showSlides_auto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    timeouts[0] = setTimeout(showSlides_auto, 5000); // Change image every 2 seconds
}
