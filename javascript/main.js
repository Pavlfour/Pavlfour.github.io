const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

//position the slides next to one another
slides.forEach((slide,index) => {
    slide.style.left = slideWidth*index + 'px';
});

//function template to move the slide
const moveToSlide = (track,currentSlide,targetSlide)=>{
    track.style.transform = 'translateX(-'+targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const hideShowArrows = (slides,prevButton,nextButton,targetIndex) => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if(targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//next button
nextButton.addEventListener('click', e =>{

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track,currentSlide,nextSlide);
    hideShowArrows(slides,prevButton,nextButton,nextIndex);
});

//previous button
prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track,currentSlide,prevSlide);
    hideShowArrows(slides,prevButton,nextButton,prevIndex);
});
