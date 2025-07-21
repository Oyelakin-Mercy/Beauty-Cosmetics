document.addEventListener("DOMContentLoaded", function () {
    const promoContainer = document.querySelector(".promo-info");
    const backgroundImages = document.querySelector(".background-images");
    const scrollAmount = promoContainer.clientWidth;
    const navBackground = document.querySelector(".nav-container");
    const logo = document.querySelector(".loreal-logo-image");

    function scrollNext() {

        const maxScroll = promoContainer.scrollWidth - promoContainer.clientWidth;
        let newScroll = promoContainer.scrollLeft + scrollAmount;

        if (newScroll > maxScroll + 20) newScroll = 0;
        promoContainer.scrollTo({ left: newScroll, behavior: "smooth" });
    }

    setInterval(scrollNext, 10000);

    document.querySelectorAll(".left-arrow, .right-arrow").forEach((button) => {
        button.addEventListener("click", function () {
            const isLeft = this.classList.contains("left-arrow");
            const maxScroll = promoContainer.scrollWidth - promoContainer.clientWidth;
            let newScroll = isLeft ? promoContainer.scrollLeft - scrollAmount : promoContainer.scrollLeft + scrollAmount;

            if (newScroll < 0) newScroll = maxScroll;
            if (newScroll > maxScroll + 20) newScroll = 0;
            promoContainer.scrollTo({ left : newScroll, behavior: "smooth" });
        });
    });
    
    document.querySelectorAll(".cancel-button").forEach((button) => {
        button.addEventListener("click", () => {
            promoContainer.style.transition = "opacity 0.5s ease-out";
            promoContainer.style.opacity = "0";

        setTimeout(() => {
            promoContainer.style.display = "none";
        }, 500);
        });
    });

    function backgroundScroll() {
        let maxScroll = backgroundImages.scrollWidth - backgroundImages.clientWidth;
        let newScroll = backgroundImages.scrollLeft + backgroundImages.clientWidth;

        if (newScroll > maxScroll) newScroll = 0;
        backgroundImages.scrollTo({ left: newScroll, behavior: "smooth" });
    }

    setInterval(() => {
    backgroundScroll();
    }, 12000);


    function navBackgroundover () {
        navBackground.addEventListener("mouseover", function() {
            logo.style.filter = "grayscale(100%) brightness(0)";
        });
        
        navBackground.addEventListener("mouseleave", function() {
            logo.style.filter = "grayscale(0%)"; 
        });

    }
    navBackgroundover(); 
});