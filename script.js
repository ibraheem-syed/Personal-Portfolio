// script.js
document.addEventListener('DOMContentLoaded', () => {
    // typing intro
    const text = "Senior at UC San Diego studying Computer Science";
    const el = document.getElementById('typed-text');
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i++);
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 3000);

    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        });
    });

    // scroll-reveal
    const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                o.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
