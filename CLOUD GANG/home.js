function imgSlider(anything){
    document.querySelector('.sweater1').src =anything;
}

function changeCircle(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function togglemenu(){
    var togglemenu = document.querySelector('.toggle');
    var navigation = document.querySelector('.nav');
    togglemenu.classList.toggle('active');
    navigation.classList.toggle('active');

}