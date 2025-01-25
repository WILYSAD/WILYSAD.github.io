document.addEventListener('DOMContentLoaded', () => {
    const menuSection = document.querySelector('#menu');
    const toggleMenuButton = document.createElement('button');
  
    toggleMenuButton.style.cursor = 'pointer';
    menuSection.insertAdjacentElement('beforebegin', toggleMenuButton);

    toggleMenuButton.addEventListener('click', () => {
        if (menuSection.style.maxHeight) {
            menuSection.style.maxHeight = null;
        } else {
            menuSection.style.maxHeight = menuSection.scrollHeight + 'px';
        }
    });

    menuSection.style.overflow = 'hidden';
    menuSection.style.transition = 'max-height 0.5s ease-in-out';
    menuSection.style.maxHeight = menuSection.scrollHeight + 'px';
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Responderemos lo antes posible.');
});
