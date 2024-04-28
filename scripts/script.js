const link1 = document.getElementsByClassName('link1');
for (let i=0; i < link1.length; i++) {
    link1[i].onclick = function() {
        document.getElementById("pick_your_korm").scrollIntoView({behavior: "smooth"});
    }
}

const link2 = document.getElementsByClassName('link2');
for (let i=0; i < link2.length; i++) {
    link2[i].onclick = function() {
        document.getElementById("about-us1").scrollIntoView({behavior: "smooth"});
    }
}

const link3 = document.getElementsByClassName('link3');
for (let i = 0; i < link3.length; i++) {
    link3[i].onclick = function() {
        document.getElementById("reviews").scrollIntoView({behavior: "smooth"});
    }
}

const link4 = document.getElementsByClassName('link4');
for (let i= 0; i < link4.length; i++) {
    link4[i].onclick = function() {
        document.getElementById('contacts').scrollIntoView({behavior: "smooth"});
    }
}

function playAudio() {
    const homyakator = document.getElementById('homyakator');
    homyakator.play()
    homyakator.volume = 0.2;

}