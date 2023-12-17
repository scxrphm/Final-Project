function handleImageEvents(previewPic) {
    const imageContainer = document.getElementById('image');

    if (previewPic) {
        // Update large image and text on mouseover or focus
        imageContainer.style.backgroundImage = "url(" + previewPic.src + ")";
        imageContainer.innerHTML = previewPic.alt;
    } else {
        // Reset large image and text on mouseout or blur
        imageContainer.style.backgroundImage = "url('')";
        imageContainer.innerHTML = 'Hover over an anime characters images!';
    }
}

// Function to add tabindex attribute to images and attach event listeners
function setUpImages() {
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        image.setAttribute('tabindex', i + 1);

        image.addEventListener('mouseover', function () {
            handleImageEvents(this);
        });

        image.addEventListener('focus', function () {
            handleImageEvents(this);
        });

        image.addEventListener('mouseout', function () {
            handleImageEvents(null);
        });

        image.addEventListener('blur', function () {
            handleImageEvents(null);
        });

        // Handle keyboard interaction (click on Enter key)
        image.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                handleImageEvents(this);
                this.style.border = '3px solid blue';
            }
        });
    }
    console.log("Tabindex attribute added to images and event listeners attached.");
}

// Event listener for page load
window.addEventListener('load', setUpImages);
