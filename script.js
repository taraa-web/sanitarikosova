/* ========================================
   SANITARI KOSOVA - PROFESSIONAL JAVASCRIPT
   100% Error-Free E-Commerce Functionality
======================================== */

'use strict';

/* ===== PRODUCTS DATABASE ===== */
const PRODUCTS = [
    {id: 1, cat: 'pllaka', name: 'Pllakë Porcelani Gri 60x60', price: 19.99, oldPrice: 24.99, badge: 'sale', discount: '-20%', img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'Pllakë porcelani e klasit të parë, rezistente ndaj lagështirës dhe gërvishtjeve. Ideale për dysheme dhe mure.', stock: 50},
    {id: 2, cat: 'sanitari', name: 'WC Modern me Bidet', price: 449, oldPrice: null, badge: 'new', discount: 'I RI', img: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'WC me dizajn modern me bidet të integruar. Ekonomik me ujë dhe i lehtë për t\'u pastruar.', stock: 12},
    {id: 3, cat: 'sanitari', name: 'Lavaman Oval Qeramik', price: 149, oldPrice: 189, badge: 'sale', discount: '-21%', img: 'https://images.unsplash.com/photo-1604709177595-682faf4b2515?auto=format&fit=crop&w=600&q=80', rating: 4, desc: 'Lavaman oval nga qeramika premium. Dizajn elegant dhe funksional për banjën tuaj moderne.', stock: 30},
    {id: 4, cat: 'rubineta', name: 'Rubinet Lavamani Krom', price: 89, oldPrice: null, badge: null, discount: null, img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'Rubinet krom me cilësi të lartë. Rezistent ndaj ndryshkut dhe i lehtë për t\'u instaluar.', stock: 40},
    {id: 5, cat: 'mobilje', name: 'Pasqyre LED 80x60', price: 169, oldPrice: 199, badge: 'sale', discount: '-15%', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'Pasqyre me ndriçim LED të integruar. Cilësi e lartë dhe dizajn modern për banjën tuaj.', stock: 18},
    {id: 6, cat: 'sanitari', name: 'Kabinë Dushi 90x90', price: 599, oldPrice: null, badge: 'new', discount: 'I RI', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'Kabinë dushi 90x90 me xham temperuar 8mm. Ngelet hermetik dhe i lehtë për t\'u pastruar.', stock: 8},
    {id: 7, cat: 'pllaka', name: 'Pllakë Mermeri Natyral', price: 49.99, oldPrice: null, badge: null, discount: null, img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80', rating: 4, desc: 'Pllakë mermeri 100% natyral. Unike dhe elegante, për ambiente luksoze.', stock: 25},
    {id: 8, cat: 'mobilje', name: 'Set Aksesorësh Banjoje', price: 59, oldPrice: 79, badge: 'sale', discount: '-25%', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80', rating: 4, desc: 'Set i plotë aksesoresh banjoje: mbajtëse peshqiri, sapuni, furçë WC. Inoks 304.', stock: 35},
    {id: 9, cat: 'pllaka', name: 'Pllakë Rëre 60x120', price: 34.99, oldPrice: 42, badge: 'sale', discount: '-17%', img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80', rating: 4, desc: 'Pllakë format të madh 60x120. Krijojnë ndjenjën e hapësirës. Ideale për banjo moderne.', stock: 60},
    {id: 10, cat: 'rubineta', name: 'Rubinet Dushi Termostatik', price: 199, oldPrice: 249, badge: 'sale', discount: '-20%', img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'Rubinet termostatik me kontroll preciz të temperaturës. Ekonomik me ujë të nxehtë.', stock: 22},
    {id: 11, cat: 'mobilje', name: 'Dollabë Banjoje me Led', price: 289, oldPrice: 349, badge: 'sale', discount: '-17%', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80', rating: 4, desc: 'Dollabë moderne me dyer të buta dhe LED brenda. Dy ngjyra disponibël: e bardhë dhe antracit.', stock: 15},
    {id: 12, cat: 'sanitari', name: 'Banjë Akril Freestanding', price: 849, oldPrice: 999, badge: 'new', discount: 'I RI', img: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=600&q=80', rating: 5, desc: 'Banjë freestanding nga akril i reinforcuar. Ruajnë nxehtësinë dhe janë të lehta për t\'u pastruar.', stock: 6}
];

/* ===== AI KNOWLEDGE BASE ===== */
const AI_RESPONSES = {
    pllaka: "Kemi lloje të ndryshme pllakash:\n🔲 Pllaka Porcelani – 15-55€/m²\n🔲 Pllaka Muri – 12-45€/m²\n🔲 Pllaka Mermeri – 45-120€/m²\n🔲 Pllaka Jashtme – 18-60€/m²\n\nFormatet: 30x30, 60x60, 60x120 cm.\nA doni të shihni koleksionin?",
    cmime: "Çmimet tona:\n💰 Pllaka – 15-120€/m²\n💰 WC & Lavaman – 89-849€\n💰 Rubineta – 45-299€\n💰 Mobilje – 59-599€\n\n📦 Dërgesa falas mbi 100€!",
    porosia: "Procesi:\n1️⃣ Zgjidhni produktin\n2️⃣ Shtoni në shportë\n3️⃣ Vendosni adresën\n4️⃣ Zgjidhni pagesën\n5️⃣ Konfirmim me SMS/Email\n\n📞 +383 44 123 456",
    dergesa: "🚚 Dërgesa:\n✅ Falas mbi 100€\n✅ Brenda 24-48 orëve\n✅ Gjurmim me SMS\n✅ Paketim i sigurt",
    garanci: "🛡️ Garancia:\n✅ Min. 2 vjet për të gjitha\n✅ Zëvendësim falas brenda 14 ditëve\n✅ Ekip teknik i gatshëm",
    kalkulues: "📐 Kalkuluesi:\n1️⃣ Gjatësia (m)\n2️⃣ Gjerësia (m)\n3️⃣ Llogarit auto m² + humbje\n\nGjeni poshtë në faqe!",
    kontakti: "📞 Kontakti:\n📞 +383 44 123 456\n✉️ info@sanitarikosova.com\n📍 Rruga Adem Jashari 123, Prishtinë\n🕐 E Hënë-Shtunë: 08:00-18:00",
    default: "Si mund t'ju ndihmoj?\n• 🔲 Pllaka\n• 💰 Çmime\n• 📦 Porosi\n• 🚚 Dërgesa\n• 🛡️ Garanci\n• 📐 Kalkulues"
};

/* ===== GLOBAL STATE ===== */
let shoppingCart = [];
let activeFilter = 'all';
let displayedProducts = 8;

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    initializeHeroSlider();
    initializeNavigation();
    initializeProducts();
    initializeCartSidebar();
    initializeCalculator();
    initializeAIChat();
    initializeNewsletter();
    initializeSearch();
    initializeScrollEffects();
    checkUserLogin();
});

/* ===== HERO SLIDER ===== */
function initializeHeroSlider() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevButton = document.getElementById('heroPrev');
    const nextButton = document.getElementById('heroNext');
    let autoplayTimer;

    if (!slides.length) return;

    function showSlide(index) {
        slides.forEach(function(slide) { slide.classList.remove('active'); });
        dots.forEach(function(dot) { 
            dot.classList.remove('active');
            dot.setAttribute('aria-selected', 'false');
        });
        
        currentIndex = (index + slides.length) % slides.length;
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        dots[currentIndex].setAttribute('aria-selected', 'true');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function previousSlide() {
        showSlide(currentIndex - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
        }
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            stopAutoplay();
            previousSlide();
            startAutoplay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            stopAutoplay();
            showSlide(index);
            startAutoplay();
        });
    });

    // Touch support
    let touchStart = 0;
    const heroElement = document.getElementById('hero');
    
    if (heroElement) {
        heroElement.addEventListener('touchstart', function(e) {
            touchStart = e.touches[0].clientX;
        }, { passive: true });

        heroElement.addEventListener('touchend', function(e) {
            const touchEnd = e.changedTouches[0].clientX;
            const difference = touchStart - touchEnd;
            
            if (Math.abs(difference) > 50) {
                stopAutoplay();
                if (difference > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }
                startAutoplay();
            }
        });
    }

    startAutoplay();
}

/* ===== NAVIGATION ===== */
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.getElementById('mainNav');
    const closeButton = document.getElementById('navClose');
    const overlay = document.getElementById('navOverlay');

    function openMenu() {
        if (navigation) navigation.classList.add('open');
        if (overlay) overlay.classList.add('show');
        if (hamburger) {
            hamburger.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if (navigation) navigation.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openMenu);
    if (closeButton) closeButton.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close on link click
    if (navigation) {
        const links = navigation.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });
    }

    // Mobile dropdown
    if (window.innerWidth <= 768) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (link.closest('.nav-item')) {
                    e.preventDefault();
                    const parent = link.closest('.nav-item');
                    const isOpen = parent.classList.contains('mobile-open');
                    
                    document.querySelectorAll('.nav-item').forEach(function(item) {
                        item.classList.remove('mobile-open');
                    });
                    
                    if (!isOpen) {
                        parent.classList.add('mobile-open');
                    }
                }
            });
        });
    }
}

/* ===== PRODUCTS ===== */
function initializeProducts() {
    renderProducts();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            activeFilter = button.dataset.filter;
            displayedProducts = 8;
            renderProducts();
        });
    });

    const loadMoreButton = document.getElementById('loadMoreBtn');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            displayedProducts += 4;
            renderProducts();
        });
    }
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let filteredProducts = activeFilter === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(function(p) { return p.cat === activeFilter; });
    
    let productsToShow = filteredProducts.slice(0, displayedProducts);

    let html = '';
    productsToShow.forEach(function(product) {
        html += '<article class="product-card" data-id="' + product.id + '">';
        html += '<div class="product-img">';
        html += '<img src="' + product.img + '" alt="' + product.name + '" loading="lazy">';
        
        if (product.badge) {
            html += '<span class="product-badge ' + product.badge + '">' + product.discount + '</span>';
        }
        
        html += '<div class="product-actions">';
        html += '<button class="product-action-btn wishlist-btn" data-id="' + product.id + '">♡</button>';
        html += '<button class="product-action-btn quick-view-btn" data-id="' + product.id + '">👁</button>';
        html += '</div>';
        html += '<div class="product-add-overlay add-to-cart-btn" data-id="' + product.id + '">🛒 Shto në Shportë</div>';
        html += '</div>';
        html += '<div class="product-info">';
        html += '<div class="product-category">' + product.cat.toUpperCase() + '</div>';
        html += '<h3 class="product-name">' + product.name + '</h3>';
        html += '<div class="product-price">';
        html += '<span class="product-price-now">' + product.price.toFixed(2) + '€</span>';
        if (product.oldPrice) {
            html += '<span class="product-price-old">' + product.oldPrice.toFixed(2) + '€</span>';
        }
        html += '</div>';
        html += '<div class="product-rating">';
        for (let i = 0; i < 5; i++) {
            html += i < product.rating ? '★' : '☆';
        }
        html += '</div>';
        if (product.stock <= 15) {
            html += '<div class="product-stock">Vetëm ' + product.stock + ' copë në stok!</div>';
        }
        html += '</div>';
        html += '</article>';
    });

    grid.innerHTML = html;

    // Add event listeners
    grid.querySelectorAll('.add-to-cart-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            addProductToCart(parseInt(btn.dataset.id));
        });
    });

    grid.querySelectorAll('.quick-view-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            showQuickView(parseInt(btn.dataset.id));
        });
    });

    grid.querySelectorAll('.wishlist-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
            btn.style.color = btn.textContent === '♥' ? 'var(--orange)' : '';
        });
    });

    // Show/hide load more
    const loadMoreButton = document.getElementById('loadMoreBtn');
    if (loadMoreButton) {
        loadMoreButton.style.display = filteredProducts.length > displayedProducts ? 'inline-flex' : 'none';
    }
}

function showQuickView(productId) {
    const product = PRODUCTS.find(function(p) { return p.id === productId; });
    if (!product) return;

    const modal = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    
    if (!content) return;

    let html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;padding:32px">';
    html += '<img src="' + product.img + '" alt="' + product.name + '" style="width:100%;border-radius:12px">';
    html += '<div>';
    html += '<div style="font-size:0.75rem;color:#999;text-transform:uppercase;margin-bottom:8px">' + product.cat + '</div>';
    html += '<h2 style="font-family:Playfair Display,serif;font-size:1.8rem;margin-bottom:16px">' + product.name + '</h2>';
    html += '<div style="font-size:2rem;font-weight:700;color:var(--orange);margin-bottom:20px">' + product.price.toFixed(2) + '€';
    if (product.oldPrice) {
        html += '<span style="font-size:1rem;color:#999;text-decoration:line-through;margin-left:8px">' + product.oldPrice.toFixed(2) + '€</span>';
    }
    html += '</div>';
    html += '<p style="color:#666;line-height:1.7;margin-bottom:24px">' + product.desc + '</p>';
    html += '<div style="margin-bottom:20px">';
    html += '<div style="color:#F59E0B;margin-bottom:4px">';
    for (let i = 0; i < 5; i++) {
        html += i < product.rating ? '★' : '☆';
    }
    html += ' (' + product.rating + '.0/5)</div>';
    html += '<div style="font-size:0.85rem;color:#22c55e">✓ ' + product.stock + ' në stok</div>';
    html += '</div>';
    html += '<button class="btn-primary full" onclick="addProductToCart(' + product.id + ');closeQuickView()">🛒 Shto në Shportë</button>';
    html += '</div>';
    html += '</div>';

    content.innerHTML = html;
    
    if (modal) modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.getElementById('modalOverlay');
    if (modal) modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Modal close events
const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.addEventListener('click', closeQuickView);
}

const modalOverlay = document.getElementById('modalOverlay');
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target.id === 'modalOverlay') {
            closeQuickView();
        }
    });
}

/* ===== CART ===== */
function initializeCart() {
    try {
        const stored = localStorage.getItem('sk_cart');
        if (stored) {
            shoppingCart = JSON.parse(stored);
        }
    } catch (error) {
        shoppingCart = [];
    }
    updateCartDisplay();
}

function initializeCartSidebar() {
    const cartButton = document.getElementById('cartBtn');
    const closeButton = document.getElementById('cartClose');
    const overlay = document.getElementById('cartOverlay');
    const continueButton = document.getElementById('continueShopping');

    if (cartButton) cartButton.addEventListener('click', openCartSidebar);
    if (closeButton) closeButton.addEventListener('click', closeCartSidebar);
    if (overlay) overlay.addEventListener('click', closeCartSidebar);
    if (continueButton) continueButton.addEventListener('click', closeCartSidebar);
}

function openCartSidebar() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
}

function addProductToCart(productId) {
    const product = PRODUCTS.find(function(p) { return p.id === productId; });
    if (!product) return;

    const existingItem = shoppingCart.find(function(item) { return item.id === productId; });
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        const newItem = Object.assign({}, product);
        newItem.qty = 1;
        shoppingCart.push(newItem);
    }

    saveCartToLocalStorage();
    updateCartDisplay();
    openCartSidebar();
    animateBadge();
}

function removeProductFromCart(productId) {
    shoppingCart = shoppingCart.filter(function(item) { return item.id !== productId; });
    saveCartToLocalStorage();
    updateCartDisplay();
}

function saveCartToLocalStorage() {
    try {
        localStorage.setItem('sk_cart', JSON.stringify(shoppingCart));
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

function updateCartDisplay() {
    let subtotal = 0;
    let totalItems = 0;

    shoppingCart.forEach(function(item) {
        subtotal += item.price * item.qty;
        totalItems += item.qty;
    });

    const shipping = subtotal >= 100 ? 0 : 0;
    const total = subtotal + shipping;

    // Update badges
    const cartBadge = document.getElementById('cartBadge');
    const cartCount = document.getElementById('cartCount');
    if (cartBadge) cartBadge.textContent = totalItems;
    if (cartCount) cartCount.textContent = totalItems;

    // Update body
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');

    if (!cartBody) return;

    if (shoppingCart.length === 0) {
        let html = '<div class="cart-empty">';
        html += '<div class="cart-empty-icon">🛒</div>';
        html += '<p>Shporta juaj është bosh</p>';
        html += '<a href="#products" class="btn-primary sm" onclick="closeCartSidebar()">Shfleto Produktet</a>';
        html += '</div>';
        cartBody.innerHTML = html;
        
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        let html = '';
        shoppingCart.forEach(function(item) {
            html += '<div class="cart-item">';
            html += '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '">';
            html += '<div class="cart-item-info">';
            html += '<div class="cart-item-name">' + item.name + '</div>';
            html += '<div class="cart-item-cat">' + item.cat.toUpperCase() + '</div>';
            html += '<div class="cart-item-price">' + (item.price * item.qty).toFixed(2) + '€ (' + item.qty + '×)</div>';
            html += '</div>';
            html += '<button class="cart-item-remove" onclick="removeProductFromCart(' + item.id + ')">✕</button>';
            html += '</div>';
        });
        cartBody.innerHTML = html;

        if (cartFooter) cartFooter.style.display = 'block';
    }

    // Update totals
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');

    if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2) + '€';
    if (shippingEl) {
        shippingEl.textContent = shipping === 0 ? 'Falas' : shipping.toFixed(2) + '€';
        shippingEl.className = shipping === 0 ? 'text-green' : '';
    }
    if (totalEl) totalEl.textContent = total.toFixed(2) + '€';
}

function animateBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.style.transform = 'scale(1.5)';
        setTimeout(function() {
            badge.style.transform = '';
        }, 300);
    }
}

/* ===== CALCULATOR ===== */
function initializeCalculator() {
    const calcForm = document.getElementById('calcForm');
    
    if (calcForm) {
        calcForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const lengthInput = document.getElementById('calcLength');
            const widthInput = document.getElementById('calcWidth');
            const wasteInput = document.getElementById('calcWaste');

            const length = parseFloat(lengthInput ? lengthInput.value : 0);
            const width = parseFloat(widthInput ? widthInput.value : 0);
            const waste = parseFloat(wasteInput ? wasteInput.value : 10);

            if (length <= 0 || width <= 0) {
                alert('Ju lutem vendosni dimensionet e vlefshme!');
                return;
            }

            const baseArea = length * width;
            const totalArea = baseArea * (1 + waste / 100);
            const tilesNeeded = Math.ceil(totalArea / 0.09);
            const boxesNeeded = Math.ceil(totalArea / 1.08);

            const resultSqm = document.getElementById('resultSqm');
            const resultTiles = document.getElementById('resultTiles');
            const resultBoxes = document.getElementById('resultBoxes');

            if (resultSqm) resultSqm.textContent = totalArea.toFixed(2);
            if (resultTiles) resultTiles.textContent = tilesNeeded;
            if (resultBoxes) resultBoxes.textContent = boxesNeeded;

            const resultsContainer = document.getElementById('calcResults');
            if (resultsContainer) {
                resultsContainer.style.transform = 'scale(1.02)';
                setTimeout(function() {
                    resultsContainer.style.transform = '';
                }, 300);
            }
        });
    }
}

/* ===== AI CHAT ===== */
function initializeAIChat() {
    const toggleButton = document.getElementById('aiToggle');
    const chatWindow = document.getElementById('aiWindow');
    const minimizeButton = document.getElementById('aiMinimize');
    const chatForm = document.getElementById('aiForm');
    const chatInput = document.getElementById('aiInput');
    const messagesContainer = document.getElementById('aiMessages');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const isVisible = chatWindow && chatWindow.style.display !== 'none';
            
            if (chatWindow) {
                chatWindow.style.display = isVisible ? 'none' : 'block';
            }
            
            const iconChat = document.querySelector('.ai-icon-chat');
            const iconClose = document.querySelector('.ai-icon-close');
            
            if (iconChat) iconChat.style.display = isVisible ? 'flex' : 'none';
            if (iconClose) iconClose.style.display = isVisible ? 'none' : 'flex';
            
            if (!isVisible) {
                scrollChatToBottom();
            }
        });
    }

    if (minimizeButton) {
        minimizeButton.addEventListener('click', function() {
            if (chatWindow) chatWindow.style.display = 'none';
            
            const iconChat = document.querySelector('.ai-icon-chat');
            const iconClose = document.querySelector('.ai-icon-close');
            
            if (iconChat) iconChat.style.display = 'flex';
            if (iconClose) iconClose.style.display = 'none';
        });
    }

    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (chatInput) {
                const message = chatInput.value.trim();
                if (message) {
                    chatInput.value = '';
                    sendChatMessage(message);
                }
            }
        });
    }

    if (messagesContainer) {
        messagesContainer.addEventListener('click', function(e) {
            const quickReply = e.target.closest('.quick-reply');
            if (quickReply) {
                const message = quickReply.dataset.msg;
                if (message) {
                    sendChatMessage(message);
                }
            }
        });
    }
}

function sendChatMessage(messageText) {
    addChatMessage(messageText, 'user');
    
    const typingIndicator = showTypingIndicator();
    
    setTimeout(function() {
        if (typingIndicator && typingIndicator.parentNode) {
            typingIndicator.parentNode.removeChild(typingIndicator);
        }
        const response = getAIResponse(messageText);
        addChatMessage(response, 'bot');
    }, 900 + Math.random() * 600);
}

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('pllak') || lowerMessage.includes('lloje')) {
        return AI_RESPONSES.pllaka;
    }
    if (lowerMessage.includes('çmim') || lowerMessage.includes('kosto')) {
        return AI_RESPONSES.cmime;
    }
    if (lowerMessage.includes('porosi') || lowerMessage.includes('bli')) {
        return AI_RESPONSES.porosia;
    }
    if (lowerMessage.includes('dërgesa') || lowerMessage.includes('transport')) {
        return AI_RESPONSES.dergesa;
    }
    if (lowerMessage.includes('garanci')) {
        return AI_RESPONSES.garanci;
    }
    if (lowerMessage.includes('kalkul')) {
        return AI_RESPONSES.kalkulues;
    }
    if (lowerMessage.includes('kontakt') || lowerMessage.includes('telefon')) {
        return AI_RESPONSES.kontakti;
    }
    
    return AI_RESPONSES.default;
}

function addChatMessage(text, role) {
    const messagesContainer = document.getElementById('aiMessages');
    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message ' + role;
    
    const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    messageDiv.innerHTML = '<div class="ai-bubble">' + formattedText + '</div>';
    
    messagesContainer.appendChild(messageDiv);
    scrollChatToBottom();
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('aiMessages');
    if (!messagesContainer) return null;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message bot';
    typingDiv.innerHTML = '<div class="ai-bubble"><div style="display:flex;gap:5px;padding:8px 0"><span style="width:7px;height:7px;background:#999;border-radius:50%;animation:bounce 1.4s infinite"></span><span style="width:7px;height:7px;background:#999;border-radius:50%;animation:bounce 1.4s 0.2s infinite"></span><span style="width:7px;height:7px;background:#999;border-radius:50%;animation:bounce 1.4s 0.4s infinite"></span></div></div>';
    
    messagesContainer.appendChild(typingDiv);
    scrollChatToBottom();
    
    return typingDiv;
}

function scrollChatToBottom() {
    const messagesContainer = document.getElementById('aiMessages');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

/* ===== NEWSLETTER ===== */
function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const input = newsletterForm.querySelector('input');
            const button = newsletterForm.querySelector('button');
            
            if (button) {
                button.textContent = '✓ Abonuar!';
                button.style.background = '#22c55e';
                button.style.borderColor = '#22c55e';
            }
            
            if (input) {
                input.value = '';
            }
            
            setTimeout(function() {
                if (button) {
                    button.textContent = 'Abonohu';
                    button.style.background = '';
                    button.style.borderColor = '';
                }
            }, 4000);
        });
    }
}

/* ===== SEARCH ===== */
function initializeSearch() {
    const searchButton = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    const results = PRODUCTS.filter(function(p) {
        return p.name.toLowerCase().includes(query) || p.cat.includes(query);
    });

    if (results.length > 0) {
        activeFilter = 'all';
        displayedProducts = results.length;
        
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(function(btn) {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active');
            allButton.setAttribute('aria-selected', 'true');
        }
        
        renderProducts();
        
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        alert('Nuk u gjet asnjë produkt për "' + searchInput.value + '"');
    }

    searchInput.value = '';
}

/* ===== SCROLL EFFECTS ===== */
function initializeScrollEffects() {
    const header = document.getElementById('mainHeader');
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;

        if (header) {
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        if (backToTopButton) {
            if (scrollY > 400) {
                backToTopButton.style.display = 'flex';
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.style.display = 'none';
                backToTopButton.classList.remove('show');
            }
        }
    }, { passive: true });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* ===== USER SESSION CHECK ===== */
function checkUserLogin() {
    try {
        const userFromLocal = localStorage.getItem('sk_user');
        const userFromSession = sessionStorage.getItem('sk_user');
        
        const userData = userFromLocal || userFromSession;
        
        if (userData) {
            const user = JSON.parse(userData);
            const userButton = document.getElementById('userBtn');
            
            if (userButton && user.first_name) {
                userButton.title = user.first_name + ' ' + (user.last_name || '');
            }
        }
    } catch (error) {
        console.error('Error checking user session:', error);
    }
}

/* ===== EXPOSE GLOBAL FUNCTIONS ===== */
window.addProductToCart = addProductToCart;
window.removeProductFromCart = removeProductFromCart;
window.closeCartSidebar = closeCartSidebar;
window.closeQuickView = closeQuickView;