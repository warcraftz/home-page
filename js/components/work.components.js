$(document).ready(function (){
    var worksData = [        
        {
            'id': 'https://drive.google.com/drive/folders/1MvhPzugXSqULSn-QsxT4ovJgd7P2Pi_d',
            'listName': 'P II - Lista de Exercicios 05',
            'exerNumb': 'Exercicios: 05',
            'exerSolv': 'Resolvidos: 04'
        },
        {
            'id': 'https://drive.google.com/drive/folders/1mSNl2uvSqUBcYIOI7YR8B13K67i6KBU5',
            'listName': 'P II - Lista de Exercicios 04',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'https://drive.google.com/drive/folders/1NzB7td44PJXG2k-pLEt_PQxoprva6KU5',
            'listName': 'P II - Lista de Exercicios 03',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'https://drive.google.com/drive/folders/1In5Msm5VQ2kv42hNUffvLmvsWAoRY5uQ',
            'listName': 'P II - Lista de Exercicios 02',
            'exerNumb': 'Exercicios: 10',
            'exerSolv': 'Resolvidos: 09'
        },
        {
            'id': 'https://drive.google.com/drive/folders/1moQQmJ8rs2rg0d30Yrm7gSgR0oU8vnGV',
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