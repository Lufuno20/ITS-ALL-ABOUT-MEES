gsap.registerPlugin(ScrollTrigger);

const check = gsap.utils.toArray(".checkpoint");

check.forEach(checkpoint => {
    gsap.from(checkpoint.firstElementChild,{
        height: 0,
        scrollTrigger:{
            trigger: checkpoint,
            start: "center center",
            end: "bottom+=340 center",
            scrub: true,
        }
    });
});

const checktext = gsap.utils.toArray(".text");

checktext.forEach(text =>{
    gsap.from(text, {
        opacity: 0,
        x: 100,
        ease: "power2.inOut",
        scrollTrigger:{
            trigger: text.parentElement,
            start: "top+=200 center",
            end: "bottom+=340 center",
            toggleActions: "restart none none reverse",
        }
    });
});

const images = document.querySelectorAll(".images img");
images.forEach((img, i)=>{
    const adjust = img.parentElement.nextElementSibling.children[i];
    gsap.from(img, {
        opacity: 0,
        scrollTrigger:{
            trigger: adjust,
            start: "top+=200 center",
            end: "bottom+=340 center",
            toggleActions: "restart none none reverse",
        }
    })
})