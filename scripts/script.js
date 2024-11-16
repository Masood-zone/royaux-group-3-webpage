document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const video = document.querySelector("video");
  const designsTab = document.getElementById("designsTab");
  const buildTab = document.getElementById("buildTab");
  const designsContent = document.getElementById("designsContent");
  const buildContent = document.getElementById("buildContent");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  // Video play/pause functionality
  if (playButton && video) {
    playButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
      }
    });

    video.addEventListener("play", function () {
      playButton.style.opacity = "0";
    });

    video.addEventListener("pause", function () {
      playButton.style.opacity = "1";
    });
  }

  // Tab switching functionality
  if (designsTab && buildTab && designsContent && buildContent) {
    designsTab.addEventListener("click", function () {
      designsContent.classList.remove("hidden");
      buildContent.classList.add("hidden");
      designsTab.classList.add("bg-green-200");
      designsTab.classList.remove("bg-green-100");
      buildTab.classList.add("bg-green-100");
      buildTab.classList.remove("bg-green-200");
    });

    buildTab.addEventListener("click", function () {
      buildContent.classList.remove("hidden");
      designsContent.classList.add("hidden");
      buildTab.classList.add("bg-green-200");
      buildTab.classList.remove("bg-green-100");
      designsTab.classList.add("bg-green-100");
      designsTab.classList.remove("bg-green-200");
    });
  }

  // Image modal functionality
  const images = document.querySelectorAll("main img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      imageModal.classList.remove("hidden");
    });
  });

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.classList.add("hidden");
    }
  });
});
