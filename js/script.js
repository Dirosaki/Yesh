let menu = document.querySelector('.menu');
let burguer = document.querySelector('.burguer');
let barras = document.querySelectorAll('.barra');
let inicio = document.querySelector('.inicio');
let img = document.querySelector('header>img');
let img2 = document.querySelector('.nave>img');
let anterior = document.querySelector('.anterior');
let proximo = document.querySelector('.proximo');
let body = document.querySelector('body');
let up = document.querySelector('.up');
let arrow = document.querySelector('.arrow');


body.onscroll = () => {
    if(scrollY > 120){
        up.classList.add('up-scroll');
        if(scrollY > 520){
            up.style.backgroundColor = '#EAB000';
            arrow.style.borderColor = 'black';
        }
        else{
            up.style.backgroundColor = 'black';
            arrow.style.borderColor = '#EAB000';
        }
    }
    else{
        up.classList.remove('up-scroll');
    }
}

up.onclick = () => {
    window.scrollTo(0, 0);
}

img.onclick = () => {
    location.href = '#inicio';
}
img2.onclick = () => {
    location.href = '#inicio';
}

menu.onclick = () => {
    burguer.classList.toggle('burguer-toggle');
    for(let barra of barras){
        barra.classList.toggle('barra-toggle');
    }
}

inicio.style.backgroundSize = 'cover';
inicio.style.backgroundPosition = 'center';
inicio.style.backgroundAttachment = 'fixed';

let contador = 0;
let number = document.querySelector('.number-one');

let slide1 = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(C:/Users/Dirosaki/Desktop/Teste/img/bg1.png)';
let slide2 = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(C:/Users/Dirosaki/Desktop/Teste/img/bg2.png)';
let slide3 = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(C:/Users/Dirosaki/Desktop/Teste/img/bg3.png)';
let slide4 = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(C:/Users/Dirosaki/Desktop/Teste/img/bg4.png)';
let slide5 = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(C:/Users/Dirosaki/Desktop/Teste/img/bg5.png)';

function slide() {
    contador++;
    if(contador === 1){
        inicio.style.background = slide1;
        inicio.style.backgroundSize = 'cover';
        inicio.style.backgroundPosition = 'center';
        inicio.style.backgroundAttachment = 'fixed';
        number.innerHTML = `01`;
    }
    else if(contador === 2){
        inicio.style.background = slide2;
        inicio.style.backgroundSize = 'cover';
        inicio.style.backgroundPosition = 'center';
        inicio.style.backgroundAttachment = 'fixed';
        number.innerHTML = `02`;
    }
    else if(contador === 3){
        inicio.style.background = slide3;
        inicio.style.backgroundSize = 'cover';
        inicio.style.backgroundPosition = 'center';
        inicio.style.backgroundAttachment = 'fixed';
        number.innerHTML = `03`;
    }
    else if(contador === 4){
        inicio.style.background = slide4;
        inicio.style.backgroundSize = 'cover';
        inicio.style.backgroundPosition = 'center';
        inicio.style.backgroundAttachment = 'fixed';
        number.innerHTML = `04`;
    }
    else if(contador === 5){
        inicio.style.background = slide5;
        inicio.style.backgroundSize = 'cover';
        inicio.style.backgroundPosition = 'center';
        inicio.style.backgroundAttachment = 'fixed';
        number.innerHTML = `05`;
    }
    if(contador === 6){
        contador = 1;
        inicio.style.background = slide1;
        inicio.style.backgroundSize = 'cover';
        inicio.style.backgroundPosition = 'center';
        inicio.style.backgroundAttachment = 'fixed';
        number.innerHTML = `01`;
    }    
}

slide();

let girar = setInterval(slide, 2250);

anterior.onclick = () => {
    stop();
    contador--;
    if(contador === 5){
        inicio.style.background = slide5;
        number.innerHTML = `05`;
    }
    else if(contador === 4){
        inicio.style.background = slide4;
        number.innerHTML = `04`;
    }
    else if(contador === 3){
        inicio.style.background = slide3;
        number.innerHTML = `03`;
    }
    else if(contador === 2){
        inicio.style.background = slide2;
        number.innerHTML = `02`;
    }
    else if(contador === 1){
        inicio.style.background = slide1;
        number.innerHTML = `01`;
    }
    else if(contador === 0){
        contador = 1;
        inicio.style.background = slide1;
        number.innerHTML = `01`;
        return;
    }
        
}

proximo.onclick = () => {
    stop();
    contador++;
    if(contador === 1){
        inicio.style.background = slide1;
        number.innerHTML = `01`;
    }
    else if(contador === 2){
        inicio.style.background = slide2;
        number.innerHTML = `02`;
    }
    else if(contador === 3){
        inicio.style.background = slide3;
        number.innerHTML = `03`;
    }
    else if(contador === 4){
        inicio.style.background = slide4;
        number.innerHTML = `04`;
    }
    else if(contador === 5){
        inicio.style.background = slide5;
        number.innerHTML = `05`;
    }
    else if(contador > 5){
        contador = 5;
        inicio.style.background = slide5;
        number.innerHTML = `05`;
        return;
    }
        
}

function stop (){
    clearInterval(girar);
}


