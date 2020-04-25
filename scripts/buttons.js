function nextImage() {
    let img = document.getElementById('pokemon');
    let currImg = img.src
    console.log(currImg);
    pIndex = parseInt(currImg.split('\\').pop().split('/').pop().replace('.png', '')) + 1
    console.log(pIndex);
    if (pIndex <= 809) {
        img.src = `data/images/${pIndex.toString().padStart(3,'0')}.png`
        console.log(img.src)
    }
}

function prevImage() {
    let img = document.getElementById('pokemon');
    let currImg = img.src
    console.log(currImg);
    pIndex = parseInt(currImg.split('\\').pop().split('/').pop().replace('.png', '')) - 1
    console.log(pIndex);
    if (pIndex >= 1) {
        img.src = `data/images/${pIndex.toString().padStart(3,'0')}.png`
        console.log(img.src)
    } 
}