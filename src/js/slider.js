// import {dictionary} from "./dictionary";

// console.log('tittle', dictionary.mario.tittle);

// function de flecha retorna de manrea inmediata el resultado.
// const secondConverter = second => second * 1000; 

const loadDict = (content) => {
    fetch('dictionary.json') 
    .then(response => response.json()) 
    .then(data => {
        content.innerText = data.donkey.decription;
    })
    .catch(error => console.log(error)); 
}

var slideIndex = 0;

showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName('mySlides');

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    if(slideIndex < 1){
        slideIndex = slides.length;
    }

    // CLASS_ENUM esto es un diccionarrio json

    const CLASS_ENUM = {
        0: '--donkey-kong',
        1: '--pacman',
        2: '--mario-bross'
    }

    var contenidoDic = ['donkey','pacman','mario'];

    // esta variable captura el valor del diccionario de arriba
    // siempre buscando capturar el indice al cual va a navegar el usuario cuando haga click
    // en el slider

    const pageStyle = CLASS_ENUM[slideIndex -1];
    const currentSlider = slides[slideIndex -1];
    const dynamicContent = document.querySelector('.dynamic-slider-content');
    const currentDynamicClass = dynamicContent.className.split(' ');
    const content = document.querySelector('.slider-content');

    currentSlider.style.display = 'block'; 
    
    loadDict(content);

    if(currentDynamicClass.length > 1){
        dynamicContent.classList.remove(currentDynamicClass[1]);   
        dynamicContent.classList.add(pageStyle);

        fetch('dictionary.json') // esto es una promesa
            .then(response => response.json()) // espera la respuesta
            .then(data => {
                content.innerText = data[contenidoDic[slideIndex -1]].decription;
            }) // then = ejecuta algo cuando la promesa se cumple
            .catch(error => console.log(error));
        
        return;
    } 

    dynamicContent.classList.add(pageStyle);
}

// 2 maneras de llamar a una funcion a travez de => (arrow function)

// setInterval(function() {
//     showSlides() 
// } ,secondConverter(4)); 

// setInterval(() => showSlides(),secondConverter(6));

// setInterval: da un tiempo de intervalo para llamar la funcion
// setTimeout: ejecuta una function una vez despues de x cantidad de tiempo