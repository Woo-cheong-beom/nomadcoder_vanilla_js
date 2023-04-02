const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const imgHtml = document.createElement("img");
imgHtml.id = "backimg";
imgHtml.src = `img/${chosenImage}`;

document.body.style.backgroundImage = "url('" + imgHtml.src + "')";
