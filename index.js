
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "img/lambs1.jpg",
        "img/lambs4.jpg",
        "img/lambs5.jpg",
        "img/lambs7.jpg",
        "img/lambs10.png",
        "img/lambs11.jpg"
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const homeElement = document.getElementById("home");

    homeElement.style.backgroundImage = `linear-gradient(var(--menu-color), rgba(255, 255, 255, 0.1)), url(${randomImage})`;
});

document.querySelectorAll('.scroll-link-top').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetAboveMiddle = 1000;
            const targetPosition = targetElement.offsetTop + (targetElement.offsetHeight / 2) - (window.innerHeight / 2) - offsetAboveMiddle;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop + (targetElement.offsetHeight / 2) - (window.innerHeight / 2);
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});