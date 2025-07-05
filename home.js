//loader//
window.addEventListener("load" , () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home").classList.add("active");
    //page loading//
    document.querySelector(".loader").classList.add("fade-out");
    setTimeout(() =>{
       document.querySelector(".loader").style.display = "none";
    }, 600)
})














//navbar//
const toggle = document.querySelector(".toggler");
toggle.addEventListener("click" , () =>{
    hidesection();
    bars();
    document.body.classList.toggle("hide-scrolling");
});
function hidesection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function bars(){
    document.querySelector(".head").classList.toggle("active");
}

//active section//
document.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("link") && e.target.hash !== ""){
        //add an overlay to avoid multiple clicks//
        document.querySelector(".overlay").classList.add("active");
        toggle.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            bars();
        }
        else{
            hidesection();
            document.body.classList.add("hide-scrolling");

        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active" , "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            toggle.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");

        }, 500);
    }
})









//about tabs//
const tabcontain = document.querySelector(".tabs"),
aboutsection = document.querySelector(".about");

tabcontain.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab") && !e.target.classList.contains("active")){
       tabcontain.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const target = e.target.getAttribute("data-target");
       aboutsection.querySelector(".tab-content.active").classList.remove("active");
       aboutsection.querySelector(target).classList.add("active");
    }
});

//portfolio details//
document.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("project")){
        togglePortpop();
        document.querySelector(".popup").scrollTo(0,0);
        porfoliodetails(e.target.parentElement);
    }

})
function togglePortpop(){
    document.querySelector(".popup").classList.toggle("open");
    document.body.classList.toggle("hide-scroll");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".close").addEventListener("click", togglePortpop);

function porfoliodetails(portfolioitem){
    document.querySelector(".thumbnail2 img").src =
    portfolioitem.querySelector(".thumbnail img").src;

    document.querySelector(".header h3").innerHTML =
    portfolioitem.querySelector(".item-title").innerHTML;

    document.querySelector(".body").innerHTML =
    portfolioitem.querySelector(".details").innerHTML;
}










