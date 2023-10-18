  function animateIcon(icon) {
    anime({
      targets: icon,
      translateY: -10,
      scale: 1.2,
      duration: 300,
      easing: 'easeOutBack'
    });
  }
  
  function resetIcon(icon) {
    anime({
      targets: icon,
      translateY: 0,
      scale: 1,
      duration: 300,
      easing: 'easeOutBack'
    });
  }

  function toggleMenu() {
    var x = document.querySelector(".nav-menu__list");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
 
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById('skillsTitle').innerText = 'Technologias que uso, toque para mais informações';
  }
  