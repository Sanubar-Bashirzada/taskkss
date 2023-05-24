function toggleMenu() {
    var menu = document.getElementById("menu");
    var icon = document.getElementById("icon");
    
    if (menu.style.display === "block") {
      menu.style.display = "none";
      icon.classList.remove("change");
    } else {
      menu.style.display = "block";
      icon.classList.add("change");
    }
  }
  