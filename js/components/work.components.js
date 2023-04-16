$(document).ready(function (){
    var worksData = [
        {
            'listName': 'P II - Lista de Exercicios 04',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'listName': 'P II - Lista de Exercicios 03',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'listName': 'P II - Lista de Exercicios 02',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'listName': 'P II - Lista de Exercicios 01',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        }
    ]
    
    for(var i in worksData) {
        var card = `
            <div class="cards">
                <div class="card">
                    <img src="./assets/imgs/java_tumblr.jpg" alt="" class="tumblr">
                    <div class="view">
                        <span class="button">
                            <i class="fab fa-java"></i>
                        </span>
                    </div>
                </div>
                <div class="winfo">
                    <li><span class="title">${worksData[i].listName}</span></li>
                    <li>
                        <span>${worksData[i].exerNumb}</span> | 
                        <span>${worksData[i].exerSolv}</span>
                    </li>
                </div>
            </div>
        `
        var cards = $(document.querySelector('.works .container'))
        cards.append(card)
    }
})