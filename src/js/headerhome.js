// function pressStart(){
        
//     var imagen = document.querySelector('.banner-tittle' ,'.title-name' );
        
//     if(imagen.style.display =='block'){
//         imagen.style.display = 'none'
//         return
//     };

//     imagen.style.display = 'block'
//  }

function toggleDisplay(selector) {
    var element = document.querySelector(selector);
    if (element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
  
  setInterval(() => toggleDisplay('.banner-tittle, .subtitle'), 700);