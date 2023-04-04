function switch_buttom(e){    
    const headerEl = document.querySelector('.hea');
    const themeBtnEl = document.querySelector('.theme');
    const menuBtnEl = document.querySelector('.menu');

    //animated
    const animatedEl = document.querySelectorAll('.animated .sides');


    const themeButtonElAnimated = document.querySelector('.theme');
    const themeButtonEl = document.querySelector('.theme i');
    
    const menuBoxEl = document.querySelector('#linksBox');
    const menuButtonEl = document.querySelector('.menu i');

    /* PAGES CONSTs */



    // code to switch icon here
    switch(e)
    {    
        case 1:
            if(themeButtonEl.className === 'fa fa-moon'){
                $(themeButtonEl).attr("class","fa fa-sun")
                // apply theme behavior [dark]
                darkTheme();
                themeAnimetion1();
            }else{
                $(themeButtonEl).attr("class","fa fa-moon")
                // apply theme behavior [light]
                lightTheme();
                themeAnimetion2();
            }
            break;

        case 2:
            if(menuButtonEl.className === 'fa fa-bars'){
                $(menuButtonEl).attr("class","fa fa-times")
                // apply behavior
                hiddein_off()
            }else{
                $(menuButtonEl).attr("class","fa fa-bars")
                // apply behavior
                hiddein_on()
            }
            break;

        case 3:
            break;
        default:
    }

    // hiddem status [ on ]
    function hiddein_on(){
        menuBoxEl.classList.add('hidde')
    }

    // hiddem status [ on ]
    function hiddein_off(){
        menuBoxEl.classList.remove('hidde')
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

        // menuBox
        menuBoxEl.style.color = 'var(--text-dark-color-def)';
        menuBoxEl.style.background = 'var(--back-dark-theme-def)';
        menuBoxEl.style.border = '1px solid var(--color-dark-button-aux)';

        //pages bahavior
        $(document).ready(function(){
            // about bahavior
        })
    }
    
    // light theme of behavior
    function lightTheme(){

        const bodyEl = document.querySelector('body')
        bodyEl.style.background = 'var(--back-light-theme-def)';
        headerEl.style.background = 'var(--back-light-theme-blur';

        
        bodyEl.style.color = 'var(--text-light-color-def)';

        // animated
        for(var side = 0; side < animatedEl.length; side++){
            animatedEl[side].style.color = 'var(--text-light-color-def)';
            animatedEl[side].style.boxShadow = '0 0 10px #202023, 0 0 20px #202023, 0 0 30px #202023, 0 0 50px #202023, 0 0 60px #202023, 0 0 70px #202023, 0 0 90px #202023';
        }

        themeBtnEl.style.background = 'var(--back-light-button-def)';
        themeBtnEl.style.color = 'var(--color-light-button-def)';

        // menuBox
        menuBoxEl.style.color = 'var(--text-light-color-def)';
        menuBoxEl.style.background = 'var(--back-light-theme-def)';
        menuBoxEl.style.border = '1px solid var(--color-dark-button-aux)';
    }

    // button theme animation
    function themeAnimetion1(){
        themeButtonElAnimated.style.animation = 'animeTheme-1 .3s ease-in-out'
        themeButtonElAnimated.style.transition = 'opacity .3s ease-in-out'
    }
    function themeAnimetion2(){
        themeButtonElAnimated.style.animation = 'animeTheme-2 .3s ease-in-out'
        themeButtonElAnimated.style.transition = 'opacity .3s ease-in-out'
    }
}