const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');

let timer = 0;

startGame = function (){
    holes.toggleClass('up');
}

$('#startGame').click(event => {

    startGame()
})