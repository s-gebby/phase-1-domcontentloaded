document.addEventListener("DOMContentLoaded", function () {
  // Select the <p> element
  const paragraphElement = document.querySelector("p");

  // Check if the <p> element exists
  if (paragraphElement) {
    // Change the text content of the <p> element
    paragraphElement.textContent = "This is really cool!";
  }
});
