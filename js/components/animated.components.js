$(document).ready(function (){

    var animated = `
    <div class="platform">
        <div class="sc-link">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
        </div>
    </div>
    `
    var content = $(document.querySelector('.animated .container'))
    content.append(animated)

})