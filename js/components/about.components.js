$(document).ready(function (){

    var about = `
        <h1 class="greet">Ola! Eu sou um desenvolvedor de aplicativos baseado em Angola.</h1>
        
        <div class="less">
            <div class="lessme">
                <h1 class="name">Mereles Fernando</h1>
                <p class="paragraph">Draftsman ( Desenvolvidor / Designer / Estudante )</p>
            </div>

            <div class="pickme">
                <div class="circle">
                    <span class="blur"></span>
                </div>
            </div>
        </div>
    
        <div class="moreme">
            <div class="text">
                <span class="item">Sobre</span>
                <div class="paragraph">
                    <p>
                    Mereles Fernando, estudante do <a href="https://www.isptec.co.ao/" class="ex-link"><span>ISPTEC</span></a> (Instituto Superior Politécnico de Tecnologias e Ciências) cursando na area de Engenharia Informática. Trabalha como freelancer.
                    Gosta de criar programas que ajudam a resolver problemas do dia dia, construir layouts com photoshop e emplementar com codigo.    
                    </p>
                    
                    <label for="work" class="port">Portifólio</label>
                </div>
            </div>
        </div>

        <div class="ilike">
            <span class="item">Eu <i class="fa fa-heart"></i></span>
            <div class="paragraph">
                <span>Musica, Desenho, Fotografia</span>
            </div>
        </div>

        <div class="onweb">
            <span class="item">Segui Me</span>
            <div class="socials">
                <li><a href="https://github.com/warcraftz" target="_blank"> 
                    <span><i class="fab fa-github"></i></span>
                    <span>github / @warcraftz</span> 
                </a></li>
                
                <li><a href="#" target="_blank"> 
                    <span><i class="fab fa-pinterest"></i></span>
                    <span>pinterest / @warcraftz</span> 
                </a></li>

                <li><a href="#" target="_blank"> 
                    <span><i class="fab fa-facebook"></i></span>
                    <span>facebook / @warcraftz</span> 
                </a></li>
                <li><a href="#" target="_blank"> 
                    <span><i class="fab fa-twitter"></i></span>
                    <span>twitter / @warcraftz</span> 
                </a></li>
            </div>
        </div>
    `
    var content = $(document.querySelector('.about .container'))
    content.append(about)

})