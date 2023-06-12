const teclas = document.querySelectorAll('.tecla');

for (let index = 0; index < teclas.length; index++) {

    const instrumento = teclas[index].classList[1];
    console.log(instrumento);

    teclas[index].onclick = function(){
        tocaSom(`#som_${instrumento}`);
    }
}

function tocaSom(idAudio){
    const audio = document.querySelector(idAudio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}