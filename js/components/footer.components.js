$(document).ready(function (){
    
    var data = new Date();
    var currentYear = data.getFullYear();

    var foo = `
    <div class="content">
        <div class="feed" id="feed">
            <form action="https://formsubmit.co/20181057@isptec.co.ao" method="POST">
                <div class="row">
                    <div class="inputBox">
                        <input type="email" name="email" id="email" required>
                        <label for="email">Email</label>
                    </div>
                    
                    <div class="inputBox">
                        <input type="text" name="message" id="message" required>
                        <label for="message">Texto</label>
                    </div>
                </div>

                <!--
                <input type="hidden" name="_next" value="https://joyful-begonia-f703e2.netlify.app/page/thanks.html" >
                -->
                <div class="btn"><button type="submit">ENVIAR <i class="fa fa-paper-plane"></i></button></div>
            </form>
        </div>
        <div class="right">
            <p class="foo paragraph"> © ${currentYear} - Mereles Fernando.</p>
        </div>
    </div>
        
    `
    var foot = $(document.querySelector('footer'))
    foot.append(foo)

})