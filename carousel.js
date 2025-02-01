document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    
 
    function moveCarousel() {
      index = (index + 1) % items.length; // Ciclo infinito
      carousel.style.transform = `translateX(-${index * 100}%)`; 
    }
    
   
    setInterval(moveCarousel, 3000);
  });
  
