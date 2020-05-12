const currPokemon = document.getElementById('pokemon');
const next = document.getElementById('next-button');
const prev = document.getElementById('prev-button');
next.addEventListener('click', next_pokemon);
prev.addEventListener('click', prev_pokemon);
document.addEventListener('keydown', e => {
    if (e.keyCode == 39)
        next_pokemon();
    else if (e.keyCode == 37)
        prev_pokemon();
    else if (e.keyCode == 38)
        currPokemon.src = 'data/images/001.png';
    else if (e.keyCode == 40)
        currPokemon.src = 'data/images/809.png';
});

function next_pokemon() {
    let src = currPokemon.getAttribute('src');
    fetch(`http://127.0.0.1:5000/next_image?url=${src}`)
    .then(resp => resp.json())
    .then(resp => {
        currPokemon.src = resp['url'];
    });
}
function prev_pokemon() {
    let src = currPokemon.getAttribute('src');
    fetch(`http://127.0.0.1:5000/prev_image?url=${src}`)
    .then(resp => resp.json())
    .then(resp => {
        currPokemon.src = resp['url'];
    });
}