
function navFunction() {
    var nav = document.getElementById('myNav');
    
    if(nav.className === "navMain") { 
        nav.className += " responsive";
    } else {
        nav.className = "navMain";
    }
};