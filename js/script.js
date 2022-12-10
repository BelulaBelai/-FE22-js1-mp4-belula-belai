
const animateProperties = {
    targets: '#container h1',
    translateY: '-5rem',
    delay: anime.stagger(900),
    direction: 'alternate',
    easing: 'easeOutSine',
    duration: 5000,
    loop: true,
    autoplay: false,
}

const controlBtns = anime(animateProperties);

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');

// gör att användaren kan spela och pausa animationen 
playBtn.addEventListener('click', controlBtns.play);
pauseBtn.addEventListener('click', controlBtns.pause);

// gör att användaren kan stoppa spelet
stopBtn.addEventListener('click', function () {
    controlBtns.restart();
    controlBtns.pause();
});
