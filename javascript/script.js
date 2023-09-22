const image = document.querySelector('img');
const invertedImage = image.cloneNode(true);
invertedImage.style.filter = 'invert(100%)';
document.body.appendChild(invertedImage);