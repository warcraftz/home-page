$(document).ready(function (){
    
    var data = new Date();
    var currentYear = data.getFullYear();

    var foo = `
    <div class="feed" id="feed">
        <div class="content">
            <div class="wrapper">
                <span class="paragraph"><h3>Deixe seu feedback</h3></span>
                <form action="https://formsubmit.co/f7d91712638afe7316d67683ec1c2b31" method="POST">
                    <label for="email"></label>
                    <input type="email" name="email" id="email" placeholder="e-mail" required>
                    
                    <label for="message"></label>
                    <input type="text" name="message" id="message" placeholder="comenta aqui" required>
                    <input type="hidden" name="_next" value="https://joyful-begonia-f703e2.netlify.app/page/thanks.html" >
                    <button type="submit"><i class="fa fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>
    <div>
        <p class="foo paragraph"> © ${currentYear} - Mereles Fernando. Todos direitos reservados.</p>
    </div>
        
    `
    var foot = $(document.querySelector('footer'))
    foot.append(foo)

})