// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Next button
document.querySelector('.slider-arrow.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Previous button
document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Shopping Cart Functionality
let cartCount = 0;
const cartBadge = document.querySelector('.cart-badge');

document.querySelectorAll('.product-overlay').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBadge.textContent = cartCount;
        
        // Add animation
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 200);
        
        // Show notification (optional)
        console.log('Produkti u shtua në shportë!');
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert('Faleminderit për abonimin! Do të merrni lajme të rregullta në: ' + email);
    e.target.reset();
});

// Wishlist Functionality
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent === '❤️') {
            if (this.style.color === 'red') {
                this.style.color = '';
                console.log('Hequr nga lista e dëshirave');
            } else {
                this.style.color = 'red';
                console.log('Shtuar në listën e dëshirave');
            }
        }
    });
});

// Search Functionality (basic)
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            console.log('Kërkimi për: ' + searchTerm);
            // Këtu do të shtohet logjika e kërkimit
            alert('Kërkimi për: ' + searchTerm);
        }
    }
});

// Product Quick View
document.querySelectorAll('.action-btn').forEach(btn => {
    if (btn.textContent === '👁️') {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            console.log('Shikimi i shpejtë për: ' + productName);
            // Këtu do të shtohet modal për quick view
        });
    }
});

// Scroll to Top Button (optional enhancement)
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Mund të shtohet një buton "Scroll to Top"
    }
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sanitari Kosova website loaded successfully!');
    
    // Set initial cart count
    cartBadge.textContent = cartCount;
    
    // Add smooth scroll class to html
    document.documentElement.style.scrollBehavior = 'smooth';
});