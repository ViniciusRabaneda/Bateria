document.body.addEventListener('keyup',(event)=>{ // fica "escutando" os eventos que ocorrem no corpo da pagina
    playSound(event.code.toLowerCase()); // chama a função playsound e passa o evento da tecla como parâmetro para função
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value; // capta o texto digitado pelo usuário
    if (song !== ''){
        let songArray = song.split(''); // quebra a String em letras e adiciona a um array
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); // procura a div correspondente a tecla

    if(audioElement){ // verifica se a key existe
        audioElement.currentTime = 0; // para tirar o delay do audio quando aperta a mesma tecla muito rapido
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active'); // adiciona a classe ativa a classe key
        setTimeout(()=>{ // após 300 ms a arrow Funcion remove a class active do document
            keyElement.classList.remove('active')
        },300)
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){ // recebe o array e percorre cada letra do mesmo passando como parâmetro para a função playSound
       setTimeout(()=>{ // função para dar delay entre as teclas, caso contrário tudo seria executado "de uma vez"
            playSound(`key${songItem}`);
       },wait)
       wait+=250;
       
    }
}