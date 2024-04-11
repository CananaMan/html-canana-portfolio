document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll(".slideshow");

    let totalDelay = 0;

    slideshows.forEach(slideshow => {
        const unfilteredImages = slideshow.querySelectorAll(".slideshow img");

        const images = Array.from(unfilteredImages).filter(image => !image.classList.contains("always-active"));


        const numImages = images.length;
        let index = 1;

        function initializeRandomPositions() {
            images.forEach(img => {
                const randomX = Math.random() * (slideshow.offsetWidth - img.offsetWidth);
                const randomY = Math.random() * (slideshow.offsetHeight - img.offsetHeight);
                img.style.left = `${randomX}px`;
                img.style.top = `${randomY}px`;
            });
        }

        initializeRandomPositions();

        function showImage() {
            images.forEach(img => img.classList.remove("active"));

            const randomX = Math.random() * (slideshow.offsetWidth - images[index].offsetWidth);
            const randomY = Math.random() * (slideshow.offsetHeight - images[index].offsetHeight);
            images[index].style.left = `${randomX}px`;
            images[index].style.top = `${randomY}px`;

            images[index].classList.add("active");
            index = (index + 1) % images.length;
        }

        totalDelay += 200;

        setTimeout(() => {
            showImage();
            setInterval(showImage, 3000);
        }, totalDelay);
        
    });
});