document.addEventListener('DOMContentLoaded', () => {    
  const images = [   
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1024/400/300",
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1003/400/300",
    "https://picsum.photos/id/1002/400/300",
    "https://picsum.photos/id/1043/400/300",
    
  ]; 

  let start = 0;

  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

    for (let i = 0; i < 3; i++) {
      const index = (start + i) % images.length; // loop back if needed
      const img = document.createElement("img");
      img.src = images[index];
      img.alt = `Image ${index + 1}`;
      carousel.appendChild(img);
    }
  // Function to show 3 images based on start index
  function showImages() {
       carousel.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const index = (start + i) % images.length; // loop back if needed
      const img = document.createElement("img");
      img.src = images[index];
      img.alt = `Image ${index + 1}`;
      carousel.appendChild(img);
    }
  }

  // Move to next set of images
  nextBtn.addEventListener("click", function() {
    carousel.style.transform = "translateX(-10px)";
    setTimeout(() => {
      start = (start + 1) % images.length;
      showImages();
      carousel.style.transform = "translateX(0)";
    }, 300);
  });

  // Move to previous set of images
  prevBtn.addEventListener("click", function() {
    carousel.style.transform = "translateX(10px)";
    setTimeout(() => {
      start = (start - 1 + images.length) % images.length;
      showImages();
      carousel.style.transform = "translateX(0)";
    }, 300);
  });
  show(0);
});
