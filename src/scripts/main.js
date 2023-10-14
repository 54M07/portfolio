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

