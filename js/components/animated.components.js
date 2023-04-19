$(document).ready(function (){

    var animated = `
    <div class="platform">
        <div class="cubes" id='cubes'>
            <div class="face_01_ft border">H</div>
            <div class="face_02_bc border">I</div>
            <div class="face_03_rg border">!</div>
            <div class="face_04_lf border">W</div>
            <div class="face_05_tp border">A</div>
            <div class="face_06_bo border">R</div>
            <div class="face_07_ft border">C</div>
            <div class="face_08_bc border">R</div>
            <div class="face_09_rg border">A</div>
            <div class="face_10_lf border">F</div>
            <div class="face_11_tp border">T</div>
            <div class="face_12_bo border">Z</div>
        </div>
    </div>
    `
    var content = $(document.querySelector('.animated .container'))
    content.append(animated)

})