// Fonction pour animer les éléments au scroll
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll("[data-animate], .fade-in");

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 150) {
            el.classList.add("animate");
        }
    });
});

// Scroll automatique vers les sections
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});
