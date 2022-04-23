let musicas = [
    {titulo:'Carros', artista:'N sei', src:'musicas/carros.mp3.mp3', img:'imagens/Carros-Disney-Pixar.jpg'},
    {titulo:'Sherek', artista:'N sei', src:'musicas/sherek.mp3.mp3', img: 'imagens/shrek.jpg'},
    {titulo:'kung fu', artista:'N sei', src:'musicas/kung fu .mp3.mp3', img: 'imagens/Kungfupanda.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica);

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

document.querySelector('.img-botao-play').addEventListener('click' , tocarMusica);

document.querySelector('.img-pause').addEventListener('click' , pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.img-fim').addEventListener('click', () => {
    indexMusica--; 
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
   

});

document.querySelector('.img-next').addEventListener('click', () => {
    indexMusica++; 
    if (indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
            nomeMusica.textContent = musicas[index].titulo;
            nomeArtista.textContent = musicas[index].artista;
            imagem.src = musicas[index].img;
            duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}

function tocarMusica(){
    musica.play();

}
function pausarMusica(){
        musica.pause();

}

function atualizarBarra(){

    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%' ;
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if ( campoSegundos < 10){
        campoSegundos = '0'+campoSegundos;
    }

    return campoMinutos+':'+campoSegundos
}


