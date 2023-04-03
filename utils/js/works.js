$(document).ready(function (){
    var worksData = [
        {
            'list_Name': 'Lista -01',
            'questNumbers': '12',
            'questResolvs': '12'
        },
        {
            'list_Name': 'Lista -02',
            'questNumbers': '12',
            'questResolvs': '12'
        },
        {
            'list_Name': 'Lista -03',
            'questNumbers': '12',
            'questResolvs': '12'
        }
    ]

    for(var i in worksData){
        var card = `
            <div class="card">
                <div class="imgBox">
                    <img src="./assets/imgs/b-cup.png" alt="">
                    <h1>Java</h1>
                </div>
                <div class="more">
                    <div class="info">
                        <h2>${worksData[i].list_Name}</h2>
                    </div>
                    <div class="detail">
                        <li><span>Problemas.: </span><span>${worksData[i].questNumbers}</span></li>
                        <li><span>Resolvidos.: </span><span>${worksData[i].questResolvs}</span></li>
                    </div>
                    <div class="btn">
                        <span><i class="fa fa-eye"></i></span>
                    </div>
                </div>
            </div>
        `
        
        var cards = $(document.querySelector('.work-card'))
        cards.append(card)
    }
})