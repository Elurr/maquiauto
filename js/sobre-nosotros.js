let slideIndex = 0;
gallerySlider(slideIndex);

function gallerySlider(n) {
    let i;
    let slides = document.querySelectorAll(".legacy-container");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('highlight');
    }
    if (n) {
        slideIndex = n;
    } else slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add('highlight');

    setTimeout(gallerySlider, 4500);
}