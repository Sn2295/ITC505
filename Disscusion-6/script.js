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

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Functionality for the Next and Previous buttons
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateGallery();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

function updateGallery() {
    images.forEach((image, index) => {
        image.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}

// Initialize gallery to show the first image
updateGallery();
