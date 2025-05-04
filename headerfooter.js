document.addEventListener("DOMContentLoaded", () => {// leiab asjad ja teeb muutujad et funktsioonid all töötaks
    const arrowButton = document.getElementById("arrow-button");
    const topCircle = document.getElementById("top-circle");
    const filters = document.getElementById("filters");
    const aboutLink = document.getElementById("about-link"); // Leia About Us link
  
    const arrowButtonFooter = document.getElementById("arrow-button-footer");
    const bottomCircle = document.getElementById("bottom-circle");
    const Sign_upFooter = document.getElementById("Sign_up-footer");
    const feedbackLink = document.querySelector("footer p a"); // Leia "Leave Feedback" link
  
    // Ülemine nupp
    arrowButton.addEventListener("click", () => {//siin on headeris olevad asjad mida kuvatakse kui vajutatakse headeris olevale noolele
      arrowButton.classList.toggle("moved");
      topCircle.classList.toggle("moved");
      filters.classList.toggle("visible");
      aboutLink.classList.toggle("visible"); // Lülita About Us lingi nähtavus

    });
  
    // Alumine nupp
    arrowButtonFooter.addEventListener("click", () => {// siin on footeris olevad asjad mida ta toob nähtavaks või liigutab kui vajutada footeris olevale noolelel.
      arrowButtonFooter.classList.toggle("moved");//liigutab
      bottomCircle.classList.toggle("moved");
      Sign_upFooter.classList.toggle("visible");
      feedbackLink.classList.toggle("visible"); // Lülita nähtavust
    });
  });
  