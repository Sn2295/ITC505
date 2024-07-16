// JavaScript is used to dynamically create image overlays with descriptions

const images = document.querySelectorAll('.image-container');

images.forEach(image => {
    const description = image.querySelector('.overlay').textContent.trim();
    const imgAlt = image.querySelector('img').getAttribute('alt');

    // Add image description as overlay text
    image.addEventListener('mouseover', () => {
        image.querySelector('.overlay').textContent = description;
    });

    // Restore original alt text on mouseout
    image.addEventListener('mouseout', () => {
        image.querySelector('.overlay').textContent = imgAlt;
    });
});
