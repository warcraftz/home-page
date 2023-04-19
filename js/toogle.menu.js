function switchToggleIcon(){
    menuEl = document.querySelector('header .menu')
    toggleBtnIconEl = document.querySelector('header .toggleBtn i')


    if((toggleBtnIconEl.className) === 'fa fa-bars'){
        $(toggleBtnIconEl).attr("class", "fab fa-close");
        menuEl.style.display = 'flex';
    }
    else if((toggleBtnIconEl.className) === 'fa fa-close'){
        $(toggleBtnIconEl).attr("class", "fab fa-bars");
        menuEl.style.display = 'none';
    }
}