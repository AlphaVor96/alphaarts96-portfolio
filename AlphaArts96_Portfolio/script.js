const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const images =
document.querySelectorAll(".card img");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");
        

        lightboxImg.src = image.src;


    });

});

document.querySelector(".close")
.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";
    }
    

});
const c=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{
c.style.left=e.clientX+'px';
c.style.top=e.clientY+'px';
});
