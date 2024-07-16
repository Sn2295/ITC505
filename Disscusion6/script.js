// Select all image containers and modal elements
const images = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// Add click event to each image container
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = image.querySelector('img').src;
        captionText.innerHTML = image.querySelector('.overlay').innerHTML;
    });
});

// Close the modal when the user clicks on (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}
