let menu = document.querySelector('#menu');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('shopping-bag-alt');
    nav.classList.toggle('active');

}

window.onscroll =() =>{
    menu.classList.remove('shopping-bag-alt');
    nav.classList.remove('active');
}

let slides = document.querySelectorAll('.container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

document.querySelectorAll('.image2').forEach(image_2 =>{
    image_2.addEventListener('click' ,() =>{
       var src = image_2.getAttribute('src');
       document.querySelector('.big-image2').src = src;
    });
});

document.querySelectorAll('.image3').forEach(image_3 =>{
    image_3.addEventListener('click' ,() =>{
       var src = image_3.getAttribute('src');
       document.querySelector('.big-image3').src = src;
    });
});

document.querySelectorAll('.image4').forEach(image_4 =>{
    image_4.addEventListener('click' ,() =>{
       var src = image_4.getAttribute('src');
       document.querySelector('.big-image4').src = src;
    });
});

document.querySelectorAll('.image5').forEach(image_5 =>{
    image_5.addEventListener('click' ,() =>{
       var src = image_5.getAttribute('src');
       document.querySelector('.big-image5').src = src;
    });
});

document.querySelectorAll('.image6').forEach(image_6 =>{
    image_6.addEventListener('click' ,() =>{
       var src = image_6.getAttribute('src');
       document.querySelector('.big-image6').src = src;
    });
});
