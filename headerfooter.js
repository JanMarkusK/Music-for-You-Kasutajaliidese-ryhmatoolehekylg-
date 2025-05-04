document.addEventListener("DOMContentLoaded", () => {
    const arrowButton = document.getElementById("arrow-button");
    const topCircle = document.getElementById("top-circle");
    const filters = document.getElementById("filters");
  
    const arrowButtonFooter = document.getElementById("arrow-button-footer");
    const bottomCircle = document.getElementById("bottom-circle");
    const Sign_upFooter = document.getElementById("Sign_up-footer");
    const feedbackLink = document.querySelector("footer p a"); // Leia "Leave Feedback" link
  
    // Ülemine nupp
    arrowButton.addEventListener("click", () => {
      arrowButton.classList.toggle("moved");
      topCircle.classList.toggle("moved");
      filters.classList.toggle("visible");
    });
  
    // Alumine nupp
    arrowButtonFooter.addEventListener("click", () => {
      arrowButtonFooter.classList.toggle("moved");
      bottomCircle.classList.toggle("moved");
      Sign_upFooter.classList.toggle("visible");
      feedbackLink.classList.toggle("visible"); // Lülita nähtavust
    });
  });
  