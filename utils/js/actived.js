function activeds(e){
    const linkBoxEl = document.querySelectorAll('#linksBox .link')
    
    for(var i = 0; i < linkBoxEl.length; i++){
        if(i == e){
            linkBoxEl[i].classList.classList.add("active")

            linkBoxEl[i + 1].classList.classList.remove("active")
            linkBoxEl[i + 2].classList.classList.remove("active")
            linkBoxEl[i + 3].classList.classList.remove("active")
        }else  if(i == e){
            linkBoxEl[i].classList.classList.add("active")

            linkBoxEl[i - 1].classList.classList.remove("active")
            linkBoxEl[i + 1].classList.classList.remove("active")
            linkBoxEl[i + 3].classList.classList.remove("active")

        }else  if(i == e){
            linkBoxEl[i].classList.classList.add("active")

            linkBoxEl[i + 4].classList.classList.remove("active")
            linkBoxEl[i - 1].classList.classList.remove("active")
            linkBoxEl[i - 2].classList.classList.remove("active")
        }else  if(i == e){
            linkBoxEl[i].classList.classList.add("active")

            linkBoxEl[i - 3].classList.classList.remove("active")
            linkBoxEl[i - 2].classList.classList.remove("active")
            linkBoxEl[i - 1].classList.classList.remove("active")
        }
    }
}