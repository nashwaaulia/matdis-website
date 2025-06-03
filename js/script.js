const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");
});
