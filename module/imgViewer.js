export const imageGalleryModule = (() => {
    const imageGallery = document.getElementById('image-gallery');

    const displayImage = (file) => {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        image.classList.add('gallery-image');
        imageGallery.appendChild(image);
    };

    const handleFileSelect = (event) => {
        const files = event.target.files;
        for (const file of files) {
            displayImage(file);
        }
    };

    return {
        init: () => {
            const imageUpload = document.getElementById('image-upload');
            imageUpload.addEventListener('change', handleFileSelect);
        },
    };
})();

