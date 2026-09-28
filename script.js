document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Thank you! Your message has been sent to Golden House Coffee.');
    this.reset(); 
});

document.getElementById('menuBtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ 
        behavior: 'smooth' 
    });
});
