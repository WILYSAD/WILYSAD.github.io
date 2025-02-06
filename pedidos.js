document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const quantityControls = document.querySelectorAll(".quantity-controls");

    function updateShape(quantity, control) {
        const quantityDisplay = control.querySelector(".quantity-value");
        
        if (quantity === 0) {
            control.classList.add("circle");
            quantityDisplay.classList.add("hidden");
        } else {
            control.classList.remove("circle");
            quantityDisplay.classList.remove("hidden");
        }
    }

    document.querySelectorAll('.quantity-controls').forEach(control => {
        const decreaseButton = control.querySelector('.decrease');
        const increaseButton = control.querySelector('.increase');
        const quantityDisplay = control.querySelector('.quantity-value');
    
        // Incrementar contador
        increaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = currentValue + 1;
        });
    
        // Decrementar contador
        decreaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityDisplay.textContent);
            if (currentValue > 0) {
                quantityDisplay.textContent = currentValue - 1;
            }
        });
    });
    
});

