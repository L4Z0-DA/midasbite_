document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('loading-video');
    var loadingScreen = document.querySelector('.loading-screen');
    var logo = document.querySelector('.logo');
    var mainContent = document.querySelector('.main-content');

    video.addEventListener('loadedmetadata', function() {
        // Establecer la duración del video como una variable CSS
        document.documentElement.style.setProperty('--video-duration', video.duration + 's');
    });

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= video.duration - 2) {
            loadingScreen.style.opacity = '0';
        }
    });

    video.addEventListener('ended', function() {
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000);
    });
});



const cars = {
    general: {
        image: 'fotossss/Nissan_350Z_____undergrounds350z__jdm__supercars__350z__nissan__iconiccars__car__cars-removebg-preview.png',
        desc: 'El Nissan 350Z se presenta como un coupé deportivo compacto, con un motor V6 de 3.5L que entrega 287 hp y una aceleración destacada de 0 a 100 km/h en 5.8 segundos. Este modelo es conocido por su equilibrio entre potencia y maniobrabilidad, haciéndolo ideal tanto para el rendimiento en pista como en carreras callejeras.'
    },
    modificacion: {
        image: 'fotossss/Nissan_350z_wide_body-removebg-preview.png',
        desc: 'El Nissan 350Z, para optimizar su rendimiento en carreras callejeras, suele incorporar modificaciones internas como la instalación de un turbo doble, aumentando la potencia del motor a 450-500 hp. La ECU es reprogramada para mejorar la respuesta del acelerador y la gestión de combustible. También se agregan intercoolers más grandes para mantener bajas las temperaturas y asegurar un rendimiento constante. La suspensión es ajustable, permitiendo adaptaciones según el terreno, mientras que los frenos se mejoran con discos perforados y pinzas Brembo, garantizando un mejor control en condiciones extremas.'
    },
    bodykit: {
        image: 'fotossss/Nissan_370z-removebg-preview.png',
        desc: 'Visualmente, el 350Z destaca por su diseño aerodinámico y agresivo, potenciado en las carreras callejeras con modificaciones como kits de carrocería ampliados, alerones de fibra de carbono, rines de gran tamaño y vinilos personalizados que capturan la atención. Su perfil bajo y estilizado, junto con luces LED modernas, completan un look potente y desafiante.'
    },
    general_: {
        image: 'fotossss/bmw1.png',
        desc: 'Este coche de carreras cuenta con un motor V8 biturbo, capaz de generar 600 caballos de fuerza. Su transmisión es manual de 6 velocidades, optimizada para alcanzar los 100 km/h en solo 3.2 segundos.'
    },
    modificacion_: {
        image: 'fotossss/bmw2.png',
        desc: 'El motor ha sido ajustado con un sistema de admisión de aire frío y un intercooler de alto rendimiento, lo que mejora la potencia en un 20%. Además, se han reforzado los frenos y el sistema de suspensión para mayor estabilidad a altas velocidades.'
    },
    bodykit_: {
        image: 'fotossss/bmw3.png',
        desc: 'El coche está equipado con un body kit aerodinámico personalizado, que incluye faldones laterales, un difusor trasero, y un alerón ajustable de fibra de carbono, diseñado para maximizar la adherencia en curvas cerradas.'
    },
    genera: {
        image: 'fotossss/mazda1.png',
        desc: 'El Mazda RX-7 es un coche deportivo con motor rotativo Wankel de 1.3 litros twin-turbo. Con un peso ligero y un diseño ágil, es conocido por su manejo preciso y aceleración rápida..'
    },
    modifica: {
        image: 'fotossss/mazda2.png',
        desc: 'Se han instalado un intercooler de mayor capacidad, un sistema de escape de alto rendimiento y ajustes en la ECU para optimizar la respuesta del turbo y aumentar la potencia del motor.'
    },
    bodyki: {
        image: 'fotossss/mazda3.png',
        desc: 'El RX-7 cuenta con un body kit Veilside, que incluye faldones laterales, un difusor trasero y un alerón ajustable, diseñados para mejorar la aerodinámica y darle un aspecto más agresivo'
    },
    general1: {
        image: 'fotossss/r341.png',
        desc: 'El Nissan Skyline R34 está equipado con un motor RB26DETT de 2.6 litros y doble turbo. Es famoso por su robusto rendimiento y capacidad de modificación, ideal para carreras y competición.'
    },
    modificacion1: {
        image: 'fotossss/r342.png',
        desc: 'El motor ha sido mejorado con turbos de mayor capacidad, un sistema de inyección de combustible avanzado y un escape de alto flujo, logrando una notable mejora en la potencia y el rendimiento.'
    },
    bodykit1: {
        image: 'fotossss/r343.png',
        desc: 'El R34 dispone de un body kit NISMO, que incluye un parachoques frontal agresivo, faldones laterales y un alerón trasero ajustable, diseñado para maximizar la estabilidad y el estilo del coche.'
    },
};

function setupSection(sectionId) {
    const carOptions = document.querySelectorAll(`#car-selector-${sectionId} .car-option`);
    const carImage = document.getElementById(`car-image-${sectionId}`);
    const carName = document.getElementById(`car-name-${sectionId}`);
    const backgroundText = document.getElementById(`background-text-${sectionId}`);
    const description = document.getElementById(`description-${sectionId}`);

    function updateCar(car) {
        carOptions.forEach(opt => opt.classList.remove('active'));
        document.querySelector(`#car-selector-${sectionId} [data-car="${car}"]`).classList.add('active');
        carImage.style.backgroundImage = `url(${cars[car].image})`;
        carName.textContent = car.charAt(0).toUpperCase() + car.slice(1);
        backgroundText.textContent = car.toUpperCase();
        description.textContent = cars[car].desc;
        carImage.setAttribute('aria-label', `Imagen del ${car}`);
    }

    carOptions.forEach(option => {
        option.addEventListener('click', () => {
            updateCar(option.dataset.car);
        });
    });

    // Inicializar con el primer coche de la sección
    updateCar(carOptions[0].dataset.car);

    // Posicionar el texto de fondo
    function positionBackgroundText() {
        const containerWidth = document.querySelector(`#section${sectionId} .car-image-container`).offsetWidth;
        const textWidth = backgroundText.offsetWidth;
        backgroundText.style.left = `${(containerWidth - textWidth) / 2}px`;
        backgroundText.style.top = '50%';
        backgroundText.style.transform = 'translateY(-50%)';
    }

    window.addEventListener('load', positionBackgroundText);
    window.addEventListener('resize', positionBackgroundText);
}

// Configurar todas las secciones
for (let i = 1; i <= 5; i++) {
    setupSection(i);
}