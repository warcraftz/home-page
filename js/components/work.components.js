$(document).ready(function (){
    var worksData = [
        {
            'id': 'lista04',
            'listName': 'P II - Lista de Exercicios 04',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'lista03',
            'listName': 'P II - Lista de Exercicios 03',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'lista02',
            'listName': 'P II - Lista de Exercicios 02',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'lista01',
            'listName': 'P II - Lista de Exercicios 01',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        }
    ]
    
    for(var i in worksData) {
        var card = `
            <div class="cards">
                <div class="card">
                    <a href="../../../assets/list/${worksData[i].id}" target="_blank">
                        <img src="./assets/imgs/tumblr.jpg" alt="" class="tumblr">
                        <div class="view">
                            <span class="button">
                                <i class="fab fa-java"></i>
                            </span>
                        </div>
                    </a>
                </div>
                <div class="winfo">
                    <li><span class="title">${worksData[i].listName}</span></li>
                    <li>
                        <span class="paragraph">${worksData[i].exerNumb}</span> | 
                        <span class="paragraph">${worksData[i].exerSolv}</span>
                    </li>
                </div>
            </div>
        `
        var cards = $(document.querySelector('.works .container'))
        cards.append(card)
    }
})