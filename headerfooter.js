function toggleFilters() {
    const filtersSection = document.getElementById("filtersSection");
    filtersSection.classList.toggle("active");
  }
  
  function showSignup() {
    document.getElementById("signupSection").classList.add("active");
    document.getElementById("filtersSection").classList.remove("active");
  }
  