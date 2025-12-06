function toggleProject(id) {
  const project = document.getElementById(id);
  project.style.display =
    project.style.display === "block" ? "none" : "block";
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  event.target.reset();
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

