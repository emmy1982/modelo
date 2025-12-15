// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
const tlHero = gsap.timeline({ defaults: { ease: "power4.out" } });

tlHero.to(".hero-title", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 0.5
})
    .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1.5
    }, "-=1.2")
    .from(".logo", {
        y: -30,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    }, "-=1.5")
    .from(".menu a", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
    }, "-=1.5");

// Hero Image Parallax on Scroll
gsap.to(".hero-image img", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// About Section Animations
gsap.from(".about-text", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".about",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".about-image img", {
    scale: 1.2,
    duration: 2,
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Services Section Animations (Redesign)
gsap.from(".srv-item", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".srv-big-title", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".srv-feature-img img", {
    scale: 1.2,
    duration: 2,
    scrollTrigger: {
        trigger: ".services",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Gallery Stagger Animation (Masonry)
gsap.from(".masonry-item", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 60%",
        toggleActions: "play none none reverse"
    }
});

// Contact Fade In
gsap.from(".contact-content", {
    scale: 0.9,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Stacking visual enhancement (Dim previous section)
// Only apply to sticky panels (exclude gallery if it's scrolling)
const panels = gsap.utils.toArray(".panel:not(.gallery)");

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        pin: false,
        pinSpacing: false
    });
});

// LIGHTBOX LOGIC
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const galleryImages = document.querySelectorAll(".masonry-item img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const menuLinks = document.querySelectorAll(".menu a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
