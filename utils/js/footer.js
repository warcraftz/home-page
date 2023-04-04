$(document).ready(function(){
    const date = new Date();
    const currentYear = date.getFullYear();
    var classData = $(document.querySelector('.year'));

    classData.append(currentYear);
})