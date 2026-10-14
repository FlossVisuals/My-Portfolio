// welcome message
window.addEventListener("load", function () {
  alert("Welcome to Floss Visuals! 👋");
});

// Create Back to Top Button
const backToTop = document.createElement("button");

backToTop.textContent = "🔝";
backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

// Show The Button When Scrolling
window.onscroll = function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
  
};

// Go Back To Top When The Button Is Clicked
backToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
};