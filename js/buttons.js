
function navImage(e) {
    let img = document.getElementById('pokemon');
    let currImg = img.src
    console.log(currImg);
    pIndex = parseInt(currImg.split('\\').pop().split('/').pop().replace('.png', '')) + e
    console.log(pIndex);
    if (pIndex <= 809) {
        img.src = `data/images/${pIndex.toString().padStart(3,'0')}.png`
        console.log(img.src)
    }
}

let timer = null;
let speed = 200;
document.onkeyup = e => {
    clearInterval(timer);
    timer = null;
    speed = 200;
    if (e.which == 39) {
        navImage(1);
    } else if (e.which == 37) {
        navImage(-1);
    }
}

document.onkeydown = e => {
    if (timer == null) {
        if (e.which == 39) {
            timer = setInterval(navImage(1), speed);
        } else if (e.which == 37) {
            timer = setInterval(navImage(-1), speed);
        }
    }
}
