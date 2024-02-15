// Array of image URLs
const images = [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  
  let currentIndex = 0;
  const imgElement = document.getElementById("galleryImg");
  
  // Function to display current image
  function displayCurrentImage() {
    imgElement.src = images[currentIndex];
  }
  
  // Event listener for left button
  document.getElementById("leftButton").addEventListener("click", () => {
    // Decrement index and wrap around if necessary
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayCurrentImage();
  });
  
  // Event listener for right button
  document.getElementById("rightButton").addEventListener("click", () => {
    // Increment index and wrap around if necessary
    currentIndex = (currentIndex + 1) % images.length;
    displayCurrentImage();
  });
  
  // Display initial image
  displayCurrentImage();
  