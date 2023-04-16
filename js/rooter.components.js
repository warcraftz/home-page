const func_rooter_page = (e) => {
    var rooterElAnimated = document.querySelector('.rooter');
    var aboutPage = document.querySelector('.about');
    var workPage = document.querySelector('.works');
    
    switch(e){
        case 1:
            workPage.style.display = "none";
            aboutPage.style.display = "block";
            rooterAnimetion1();
            break;
        case 2:
            aboutPage.style.display = "none";
            workPage.style.display = "block";
            rooterAnimetion2();
            break;
        default:
    }

    function rooterAnimetion1(){
        rooterElAnimated.style.animation = 'animeTheme-1 .5s ease-in-out'
        rooterElAnimated.style.transition = 'opacity .5s ease-in-out'
    }
    function rooterAnimetion2(){
        rooterElAnimated.style.animation = 'animeTheme-2 .5s ease-in-out'
        rooterElAnimated.style.transition = 'opacity .5s ease-in-out'
    }
}