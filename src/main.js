import './style.css'

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// Form submission
function enviarFormulario() {
    const btn = document.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '✓ Solicitud enviada. Te contactaremos pronto.';
        btn.classList.remove('from-sigma-magenta', 'to-pink-600');
        btn.classList.add('bg-green-500');
        document.getElementById('cotizacionForm').reset();

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.classList.add('from-sigma-magenta', 'to-pink-600');
            btn.classList.remove('bg-green-500');
        }, 3000);
    }, 1500);
}
