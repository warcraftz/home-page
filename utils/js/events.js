// THEME OVENTS AND CHANGES


function func_theme_change(){
    const iconeEl = document.querySelector('.theme #icon');
    const classEl = iconeEl.className;
    
    // APP-ELEMENT
    const appEl = document.querySelector('.app');
    
    // HEADER ELEMENT
    const heaEl = document.querySelector('.hea');
    const themeEl = document.querySelector('.hea .r-side .theme');
    themeIconEl = document.querySelector('.hea .r-side .theme i');

    // ANIMATED ELEMENT
    const animatedContentEl = document.querySelector('.animated .platform');

    const animatedLettersEl = document.querySelectorAll('.letters');
    const lettersEl = document.querySelectorAll('#letters')
    
    var i;
    if(classEl == 'fa fa-moon'){
        alert('A opção selecionada encontra-se em desenvolvimento! Por favor mantenha-se em light tema')
        $(iconeEl).attr("class", "fa fa-sun");
        
        // APPLY CHANGES IN THE CASE
        document.body.style.background = 'var(--back-dark-def)';
        heaEl.style.color = 'var(--text-dark-def)';
        themeEl.style.background = 'var(--back-dark-icon-def)';
        themeIconEl.style.color = 'var(--dark-color-icon)';

        // ANIMATED        
        for(i=0; i<12; i++){
            lettersEl[i].style.color = 'var(--text-dark-def)';
            animatedLettersEl[i].style.background = 'var(--back-light-blur)';
            animatedLettersEl[i].style.border = '1px solid var(--text-dark-def)';
        }

    }else{
        $(iconeEl).attr("class", "fa fa-moon");
        
        // APPLY CHANGES IN THE CASE
        document.body.style.background = 'var(--back-light-def)';
        heaEl.style.color = 'var(--text-light-def)';
        themeEl.style.background = 'var(--back-light-icon-def)';
        themeIconEl.style.color = 'var(--light-color-icon)';

        // ANIMATED
        for(i=0; i<12; i++){
            lettersEl[i].style.color = 'var(--text-light-def)';
            animatedLettersEl[i].style.background = 'var(--back-light-blur)';
            animatedLettersEl[i].style.border = '1px solid var(--text-light-def)';
        }
    }
}