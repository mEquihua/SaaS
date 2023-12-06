window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#18988bff';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Función para mostrar u ocultar el menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.menu');
    mobileMenu.classList.toggle('active');
}

// Agregar evento de clic al botón de menú móvil
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Cerrar el menú al hacer clic en un enlace del menú móvil
const mobileMenuLinks = document.querySelectorAll('.menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

// Agregar console.log para depuración
console.log("Botón de menú clickeado");
const mobileMenu = document.querySelector('.menu');
console.log("Mobile menu:", mobileMenu);