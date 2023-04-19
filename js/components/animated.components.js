$(document).ready(function (){

    var animated = `
    <div class="platform">
        <div class="cubes" id='cubes'>
            <div class="face_01_ft border"></div>
            <div class="face_02_bc border"></div>
            <div class="face_03_rg border"></div>
            <div class="face_04_lf border"></div>
            <div class="face_05_tp border"></div>
            <div class="face_06_bo border"></div>
            <div class="face_07_ft border"></div>
            <div class="face_08_bc border"></div>
            <div class="face_09_rg border"></div>
            <div class="face_10_lf border"></div>
            <div class="face_11_tp border"></div>
            <div class="face_12_bo border"></div>
        </div>
        <div class="base"></div>
    </div>
    `
    var content = $(document.querySelector('.animated .container'))
    content.append(animated)

})