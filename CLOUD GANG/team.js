const team = [

  {name: "NEO XOLILE PHIRI", role: "Owner of CLOUD GANG"},
  {name: "TSHEPANG", role: "brand strategist"},
  {name: "ORATILWE PULE", role: "designer"},
  {name: "LUFUNO DAGADA", role: "lead designer"},

];

const cursor =document.querySelector('.cursor');
const icon = document.querySelector('i');

const width = cursor.offsetWidth / 2;
const height = cursor.offsetHeight / 2;

let slide = 1;
const totalslide = 4;

constupdate = (xPosition) =>{
    const half = window.innerWidth / 2;
    if(xPosition > half) {
        if(slide < totalslide) {
            icon.classList.remove('bxs-chevrons-left');
            icon.classList.add('bxs-chevrons-right');
            cursor.style.display = '';
        }
        else{
            cursor.style.display = 'none';
        }
    }
    else{
        if(slide > 1){
            icon.classList.remove('bxs-chevrons-right' );
            icon.classList.add('bxs-chevrons-left');
            cursor.style.display ='none'
        }
        else{
            cursor.style.display = 'none';
        }
    }
}


document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - width,
        y: e.clientY - height,
        duration: 1,
        ease: "power3.out"
    });
    update(e.clientX);
});
