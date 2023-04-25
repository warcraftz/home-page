$(document).ready(function (){
    var worksData = [        
        {
            'id': '',
            'listName': 'P II - Lista de Exercicios 05',
            'exerNumb': 'Exercicios: 05',
            'exerSolv': 'Resolvidos: 04'
        },
        {
            'id': 'https://drive.google.com/drive/folders/1FaTLIe74JULB4E47q9Ami5T4RZhjkiRx',
            'listName': 'P II - Lista de Exercicios 04',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'https://drive.google.com/drive/folders/1L8KYZp0kl07TMdIo6UdZLyden0_3Kv4v',
            'listName': 'P II - Lista de Exercicios 03',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'Lista02',
            'listName': 'P II - Lista de Exercicios 02',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'Lista01',
            'listName': 'P II - Lista de Exercicios 01',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        }
    ]
    
    for(var i in worksData) {
        var card = `
            <div class="cards">
                <a href="${worksData[i].id}" target="_blank">
                    <div class="card">
                        <img src="./assets/imgs/tumblr.jpg" alt="" class="tumblr">
                        <div class="view">
                            <span class="button">
                                <i class="fab fa-java"></i>
                            </span>
                        </div>
                    </div>
                </a>
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