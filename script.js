document.addEventListener("DOMContentLoaded", () =>{

    const moon = document.querySelector(".moon");
    const text = document.querySelector(".text");

    moon.addEventListener("mouseenter", () =>{
        gsap.to(moon, {
           scale:10,
            duration: 1,
            ease: "power2.inOut",
            yoyo:true,
            repeat:1,
        });
    });

    document.addEventListener("click", () => {
        gsap.to(text, {
            opacity:0,
            duration:2,
            ease: "power2.out",
            onComplete: () => {
                text.style.display = "none";
            }
        });
    });


    document.querySelectorAll(".allstars div").forEach(star =>{
        star.addEventListener("mouseenter", () => {
            gsap.to(star, {
                rotation:"+=360", 
                duration:2,
                ease:"power1.in",
                repeat:-1,
    
            });
        });
        star.addEventListener("mouseleave",() =>{
            gsap.killTweensOf(star);
            gsap.to(star, {
                rotation:10,
                duration:0.5,
                ease:"linear",
            });

        });
    });
});