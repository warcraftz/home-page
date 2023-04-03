function func_menu_toggle (){
    const menuBtn = document.querySelector('.menu #icon')
    const menuEl = document.querySelector('.hea .l-side  .links')
}



function func_rooter_page(e){
    var aboutPage = document.querySelector('.about');
    var workPage = document.querySelector('.work');
    
    switch(e){
        case 1:
            workPage.style.display = "none";
            aboutPage.style.display = "block";
            break;
        case 2:
            aboutPage.style.display = "none";
            workPage.style.display = "block";
            break;
        default:
    }
}
            
/*
if(menuBtn.className == 'fa fa-bars'){
    $(menuBtn).attr("class", "fa fa-times");
    menuEl.style.display = 'flex';
}else{
    $(menuBtn).attr("class", "fa fa-bars");

    function myFunction(x) {
        if (x.matches) { // If media query matches
            menuEl.style.display = 'none';
        } else {
            menuEl.style.display = 'block';
        }
        }
        
        var x = window.matchMedia("(min-width: 766px)")
        myFunction(x) // Call listener function at run time
        //x.addListener(myFunction) // Attach listener function on state changes
}
*/