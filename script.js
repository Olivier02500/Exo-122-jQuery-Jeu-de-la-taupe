const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');

//click on button whit id #starrtGame for a start a game
$('#startGame').click(function (){
    scoreBoard.text(0);
    let time = 10;

            let newParti = setInterval(function (){
                let taupeSpeed = Math.floor(Math.random() * 1000);
                let item = Math.floor(Math.random() * 6);//select ramdom Moles
                setTimeout(function (){
                    holes.eq(item).addClass('up');

                }, taupeSpeed);
                holes.removeClass('up');
                time--;
                console.log(time);
                if (time <= 0 ) {
                    clearTimeout();
                    clearInterval(newParti);
                    moles.removeClass('up');
                    alert(`WELL PLAY
                     Vous avez :  ${scoreBoard.text()} points.`);
                }
        }, 1000)
    })


moles.click(function (){
    scoreBoard.text(parseInt(scoreBoard.text()) +1);
    $(this).parent().removeClass('up');
    return scoreBoard;
})