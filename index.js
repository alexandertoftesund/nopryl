
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "img/lambs1.webp",
        "img/lambs4.webp",
        "img/lambs5.webp",
        "img/lambs7.webp",
        "img/lambs10.webp",
        "img/lambs11.webp"
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const homeElement = document.getElementById("home");
    const gradient = "linear-gradient(var(--menu-color), rgba(255, 255, 255, 0.1))";

    homeElement.style.backgroundImage = `${gradient}, url(${randomImage})`;
});

document.querySelectorAll('.scroll-link, .scroll-link-top').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            let targetPosition;
            if (this.classList.contains('scroll-link-top')) {
                targetPosition = 0;
            } else {
                targetPosition = targetElement.offsetTop + (targetElement.offsetHeight / 2) - (window.innerHeight / 2);
            }
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});