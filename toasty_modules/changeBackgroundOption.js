function toggleBG (){
    document.getElementById(toggleBG).innerHTML = "Changed Background";
    document.body.style.backgroundImage = 'url(snowy_fest.gif)';  
}


// toggle bg listen
startButton.addEventListener('click', () => {
    toggleBG();
}) 

// var className = ' ' + myButton.className + ' ';

// if ( ~className.indexOf(' active ') ) {
//     this.className = className.replace(' active ', ' ');
// } else {
//     this.className += ' active';
// }              
// }
 