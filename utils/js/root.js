function func_menu_toggle (){
    const menuBtn = document.querySelector('.menu #icon')
    const menuEl = document.querySelector('.hea .l-side  .links')
}



function func_rooter_page(e){
    var aboutPage = document.querySelector('.about');
    var workPage = document.querySelector('.works');
    
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