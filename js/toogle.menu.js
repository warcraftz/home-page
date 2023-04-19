function switchToggleIcon(){
    menuEl = document.querySelector('header .menu')
    toggleBtnIconEl = document.querySelector('header .toggleBtn i')


    if((toggleBtnIconEl.className) === 'fa fa-bars'){
        $(toggleBtnIconEl).attr("class", "fa fa-times");
        menuEl.style.display = 'flex';
    }
    else if((toggleBtnIconEl.className) === 'fa fa-times'){
        $(toggleBtnIconEl).attr("class", "fa fa-bars");
        menuEl.style.display = 'none';
    }
}