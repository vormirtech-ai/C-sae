// Custom Cursor Logic
const cursor = document.getElementById('cursor');
const cursorText = document.getElementById('cursor-text');
const hoverElements = document.querySelectorAll('.cursor-hover, a, button');

if (window.innerWidth >= 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            
            // Customize text inside cursor based on element
            const textContent = element.innerText.toUpperCase();
            if (textContent.includes('WHATSAPP') || element.href?.includes('wa.me')) {
                cursorText.innerText = 'CHAT';
            } else if (textContent.includes('INSTAGRAM') || textContent.includes('YOUTUBE')) {
                cursorText.innerText = 'OPEN';
            } else {
                cursorText.innerText = 'VIEW';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// Scroll Animations using Intersection Observer
// Handling both text reveals and simple fades
const revealTriggers = document.querySelectorAll('.reveal-trigger, .reveal-fade');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealTriggers.forEach(trigger => {
    revealOnScroll.observe(trigger);
});

// Navbar subtle border on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('border-black/5');
        navbar.classList.remove('border-transparent');
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('border-black/5');
        navbar.classList.add('border-transparent');
        navbar.classList.remove('shadow-sm');
    }
});
