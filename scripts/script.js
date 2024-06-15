const confirmTrue = document.querySelector('.confirm-true');
const confirmFalse = document.querySelector('.confirm-false');
const confirm = document.querySelector('.hamster-confirm');
const backButton = document.querySelector('.back-button-false-confirm');
const confirmFalseWindow = document.querySelector('.confirm-false-window');
const preload = document.querySelector('.preload');
document.body.style.overflow = 'hidden';

confirmFalse.addEventListener ('click', getFalseWindow);

function getFalseWindow() {
        confirm.classList.add('hidden');
        confirmFalseWindow.classList.remove('hidden');
}

backButton.addEventListener('click', () => {
    confirm.classList.remove('hidden');
    confirmFalseWindow.classList.add('hidden');
})

confirmTrue.addEventListener('click', () => {
    preload.hidden = true;
    document.body.style.overflow = '';
})

  

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('link1')) {
        document.getElementById("pick_your_korm").scrollIntoView({behavior: "smooth"});
    } else if (event.target.classList.contains('link2')) {
        document.getElementById("about-us1").scrollIntoView({behavior: "smooth"});
    } else if (event.target.classList.contains('link3')) {
        document.getElementById("reviews").scrollIntoView({behavior: "smooth"});
    } else if (event.target.classList.contains('link4')) {
        document.getElementById('contacts').scrollIntoView({behavior: "smooth"});
    }
});





function playAudio() {
    const homyakator = document.getElementById('homyakator');
    homyakator.play()
    homyakator.volume = 0.2;

}




