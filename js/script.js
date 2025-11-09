// LexIT JavaScript - Back to top functionality
console.log('LexIT loading...');

function setupBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '⬆';
    btn.setAttribute('title', 'Takaisin ylös');
    btn.setAttribute('aria-label', 'Takaisin ylös');
    
    document.body.appendChild(btn);
    
    function toggle() {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
    
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', toggle);
    toggle();
}

document.addEventListener('DOMContentLoaded', setupBackToTop);
