const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const photoGallery = document.getElementById('photo-gallery');

uploadButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const selectedFiles = Array.from(fileInput.files);

  selectedFiles.forEach(file => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const image = document.createElement('img');
      image.src = reader.result;
      photoGallery.appendChild(image);
    });

    reader.readAsDataURL(file);
  });

  fileInput.value = ''; // Limpiar el valor del input para poder seleccionar el mismo archivo nuevamente si se desea
});
