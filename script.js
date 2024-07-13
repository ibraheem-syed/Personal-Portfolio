document.addEventListener('DOMContentLoaded', (event) => {
    // const intro = "Hi, I'm Ibraheem";
    // const typedElement = document.getElementById('type');
    // let j = 0;
    
    // function typeWriters() {
    //     if (j < intro.length) {
    //         typedElement.innerHTML += intro.charAt(j);
    //         j++;
    //         setTimeout(typeWriters, 50); // Adjust speed here
    //     }
    // }
    // setTimeout(typeWriters, 2000);
    
    const text = "Senior at UC San Diego studying Computer Science";
    const typedTextElement = document.getElementById('typed-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typedTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Adjust speed here
        }
    }

    // Start the typing effect after a short delay
    setTimeout(typeWriter, 3000);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});