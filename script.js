let currentIndex = 0;
const displayedImages = document.querySelectorAll('.displayed-image');
const displayedMessages = document.querySelectorAll('.displayed-message');

function startExperience() {
  document.getElementById("start-menu").style.display = "none";
  document.getElementById("experience-container").style.display = "block";
  showImageAndMessage(currentIndex);
}

function showImageAndMessage(index) {
  displayedImages.forEach((image, i) => {
    image.style.display = i === index ? 'block' : 'none';
    image.style.opacity = i === index ? '1' : '0';
  });
  displayedMessages.forEach((message, i) => {
    message.style.display = i === index ? 'block' : 'none';
    message.style.opacity = i === index ? '1' : '0';
  });
  document.getElementById("next-button").style.display = "block";

  var audio = document.getElementById("background-music");
  audio.play();

  currentIndex = index;
}

function showNextImage() {
  currentIndex++;
  if (currentIndex < displayedImages.length) {
    showImageAndMessage(currentIndex);
  } else {
    document.getElementById("image-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    // Mostrar mensaje final o realizar otra acción
  }
}