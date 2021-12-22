const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');

$('#startGame').click(function (){
    scoreBoard.text(0);

    let gameTime = setInterval(function (){
            let taupeSpeed = Math.floor(Math.random() * 800 + 200);
            let item = Math.floor(Math.random() * 6);
            setTimeout(function (){
                holes.eq(item).addClass('up');

            }, taupeSpeed)
            holes.removeClass('up');



    }, 1000)
})

moles.click(function (){
    scoreBoard.text(parseInt(scoreBoard.text()) +1);
    $(this).parent().removeClass('up');
})