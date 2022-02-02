function pressStart(){
        
    var imagen = document.querySelector('.banner-tittle');
        
    if(imagen.style.display =='block'){
        imagen.style.display = 'none'
        return
    };

    imagen.style.display = 'block'
 }

 setInterval(() => pressStart(),700);