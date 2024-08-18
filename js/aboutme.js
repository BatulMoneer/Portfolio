document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.about-buttons .button');
    const infoText = document.getElementById('info-text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');

            if (!isActive) {
                buttons.forEach(b => {
                    if (b !== button) {
                        b.style.opacity = '0';
                        b.disabled = true;
                    }
                });
                button.classList.add('active');
                infoText.innerHTML = button.getAttribute('data-text');
                infoText.style.display = 'block';
                setTimeout(() => {
                    infoText.style.opacity = '1';
                }, 30);
            }
            else{
                buttons.forEach(b => {
                    b.classList.remove('active');
                    b.style.opacity = '1';
                    b.disabled = false;
                });
                infoText.style.opacity = '0';
                setTimeout(() => {
                    infoText.style.display = 'none';
                }, 30);
            }
        });

    });
});







