$(document).ready(function(){
    
    const headerEl = document.querySelector('.hea');
    const themeBtnEl = document.querySelector('.theme');
    const menuBtnEl = document.querySelector('.menu');
    const menuBoxEl = document.querySelector('#linksBox');

    //animated
    const animatedEl = document.querySelectorAll('.animated .sides');


    //const themeButtonElAnimated = document.querySelector('.theme');
    const themeButtonEl = document.querySelector('.theme i');
    
    //const menuBoxEl = document.querySelector('#linksBox');
    //const menuButtonEl = document.querySelector('.menu i');


    // code to switch icon here
    if(themeButtonEl.className === 'fa fa-moon'){
        $(themeButtonEl).attr("class","fa fa-sun")

        // apply theme behavior [dark]
        darkTheme();
    }else if(themeButtonEl.className === 'fa fa-sun'){
        $(themeButtonEl).attr("class","fa fa-moon")

        // apply theme behavior [light]
        lightTheme();
    }


    // dark theme of behavior
    function darkTheme(){

        const bodyEl = document.querySelector('body')
        bodyEl.style.background = 'var(--back-dark-theme-def)';
        headerEl.style.background = 'var(--back-dark-theme-blur';

        
        bodyEl.style.color = 'var(--text-dark-color-def)';

        // animated
        for(var side = 0; side < animatedEl.length; side++){
            animatedEl[side].style.color = 'var(--text-dark-color-def)';
            animatedEl[side].style.boxShadow = '0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 90px #00fff2';
        }

        themeBtnEl.style.background = 'var(--back-dark-button-def)';
        themeBtnEl.style.color = 'var(--color-dark-button-def)';
        themeBtnEl.style.borderRadius = '8px';

        menuBtnEl.style.borderRadius = '8px';
        menuBtnEl.style.marginLeft = '10px';
        menuBtnEl.style.marginRight = '10px';
        menuBtnEl.style.background = 'var(--back-dark-aux)';
        menuBtnEl.style.color = 'var(--color-dark-button-aux)';
        menuBtnEl.style.border = '1px solid var(--color-dark-button-aux)';
        
        // menuBox
        menuBoxEl.style.color = 'var(--text-dark-color-def)';
        menuBoxEl.style.background = 'var(--back-dark-theme-def)';
        menuBoxEl.style.border = '1px solid var(--color-dark-button-aux)';
    }
    
    // light theme of behavior
    function lightTheme(){

        const bodyEl = document.querySelector('body')
        bodyEl.style.background = 'var(--back-light-theme-def)';
        headerEl.style.background = 'var(--back-light-theme-blur';

        bodyEl.style.color = 'var(--text-light-color-def)';

        // animated
        for(var side = 0; side < animatedEl.length; side++){
            animatedEl[side].style.boxShadow = '0 0 10px #ffa94f, 0 0 20px #ffa94f, 0 0 30px #ffa94f, 0 0 50px #ffa94f, 0 0 60px #ffa94f, 0 0 70px #ffa94f, 0 0 90px #ffa94f';
        }

        themeBtnEl.style.color = 'var(--color-light-button-def)';
        themeBtnEl.style.background = 'var(--back-light-button-def)';
        
        // menuBox
        menuBoxEl.style.color = 'var(--text-light-color-def)';
        menuBoxEl.style.background = 'var(--back-light-theme-def)';
        menuBoxEl.style.border = '1px solid var(--color-dark-button-aux)';
    }

})