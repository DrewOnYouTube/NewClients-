var menuIcon = document.querySelector(".menu_icon")
var sidebar = document.querySelector(".sidebar")
var content = document.querySelector(".content")

menuIcon.onclick =function(){
    sidebar.classList.toggle("small-sidebar")
    content.classList.toggle("large-content")
}


document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = "index.html";
});

if (window.innerWidth < 900) {
    // Add the class to the element
sidebar.classList.add("small-sidebar");
content.classList.add("large-content");
  }
window.addEventListener('resize', function() {

if (window.innerWidth < 900) {
    // Add the class to the element
sidebar.classList.add("small-sidebar");
content.classList.add("large-content");
  }else {
    // Remove the class from the element
    sidebar.classList.remove("small-sidebar");
    content.classList.remove("large-content");
  }
});







// -------------------------------



