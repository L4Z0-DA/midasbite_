document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close');
    var form = document.getElementById('contactForm');

    function closePopup() {
        popup.style.display = 'none';
    }

    closeBtn.addEventListener('click', closePopup);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted');
        closePopup();
    });

    window.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
});

    const video1 = document.getElementById('video1');
        const video2 = document.getElementById('video2');
        const muteBtn1 = document.getElementById('mutebtn1');
        const muteBtn2 = document.getElementById('mutebtn2');

        muteBtn1.addEventListener('click', () => {
            if (video1.muted) {
                video1.muted = false;
                muteBtn1.textContent = 'Mute'; 
            } else {
                video1.muted = true;
                muteBtn1.textContent = 'Unmute'; 
            }
        });

        muteBtn2.addEventListener('click', () => {
            if (video2.muted) {
                video2.muted = false;
                muteBtn2.textContent = 'Mute';
            } else {
                video2.muted = true;
                muteBtn2.textContent = 'Unmute';
            }
        });


        const specs = {
            power: 306,
            speed: 155,
            acceleration: 5.3
        };

        function createDigitStrip(container, value) {
            const digits = String(value).split('');
            digits.forEach(digit => {
                const digitContainer = document.createElement('div');
                digitContainer.className = 'digit-container';
                const digitStrip = document.createElement('div');
                digitStrip.className = 'digit-strip';
                for (let i = 0; i <= 9; i++) {
                    const digitElement = document.createElement('div');
                    digitElement.className = 'digit';
                    digitElement.textContent = i;
                    digitStrip.appendChild(digitElement);
                }
                digitContainer.appendChild(digitStrip);
                container.appendChild(digitContainer);
            });
        }

        function animateDigitStrip(strip, targetDigit) {
            const currentPosition = parseInt(strip.style.transform.replace('translateY(', '')) || 0;
            const targetPosition = -targetDigit * 60;
            strip.style.transform = `translateY(${targetPosition}px)`;
        }

        function animateSpec(id, value) {
            const container = document.getElementById(id);
            container.innerHTML = '';
            createDigitStrip(container, value);
            const strips = container.querySelectorAll('.digit-strip');
            const digits = String(value).split('');
            strips.forEach((strip, index) => {
                setTimeout(() => {
                    animateDigitStrip(strip, parseInt(digits[index]));
                }, index * 300);
            });
        }

        function animateSpecs() {
            animateSpec('power', specs.power);
            animateSpec('speed', specs.speed);
            animateSpec('acceleration', specs.acceleration);
        }

        // Initial animation
        animateSpecs();
