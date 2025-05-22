// DOM Elements
const navbar = document.querySelector('.navbar');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCartBtn = document.querySelector('.close-cart');
const productGrid = document.querySelector('.product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('#productModal');
const searchModal = document.querySelector('#searchModal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.querySelector('.total-amount');
const checkoutBtn = document.querySelector('.checkout-btn');
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const searchResults = document.querySelector('.search-results');
const newsletterForm = document.querySelector('#newsletter-form');
const loadingSpinner = document.querySelector('.loading-spinner');
const notificationContainer = document.querySelector('.notification-container');
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active', mobileMenu.classList.contains('active'));
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close overlay when clicking outside menu
overlay.addEventListener('click', () => {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href !== '#') {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
      window.location.href = href;
    }
  });
});

// Cart Toggle
function toggleCart(force = null) {
  const isActive = cartSidebar.classList.contains('active');
  let shouldOpen = force === true || (force === null && !isActive);
  let shouldClose = force === false || (force === null && isActive);

  if (shouldOpen) {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCart();
  } else if (shouldClose) {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

cartBtn.addEventListener('click', () => toggleCart(true));
closeCartBtn.addEventListener('click', () => toggleCart(false));
overlay.addEventListener('click', (e) => {
  // Only close cart if it's open and click is not inside cartSidebar
  if (cartSidebar.classList.contains('active') && !cartSidebar.contains(e.target)) {
    toggleCart(false);
  }
  // Close modals
  document.querySelectorAll('.modal.active').forEach(modal => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  // Close mobile menu
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close cart when clicking a link in the cart
cartItemsContainer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href !== '#') {
      cartSidebar.classList.remove('active');
      document.body.style.overflow = 'auto';
      window.location.href = href;
    }
  });
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
  if (cartSidebar.classList.contains('active') && !cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
    cartSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentSlide = 0;
let slideInterval;
let isLoading = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  Promise.all([
    renderProducts(),
    updateCart(),
    initSlider()
  ]).then(() => {
    hideLoading();
  });
});

// Loading State
function showLoading() {
  isLoading = true;
  loadingSpinner.classList.add('active');
}

function hideLoading() {
  isLoading = false;
  loadingSpinner.classList.remove('active');
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Modal Handling
function openModal(modalElement) {
  modalElement.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalElement) {
  modalElement.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close overlay when clicking outside modal
overlay.addEventListener('click', () => {
  document.querySelectorAll('.modal.active').forEach(modal => {
    closeModal(modal);
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalElement = btn.closest('.modal');
    closeModal(modalElement);
  });
});

overlay.addEventListener('click', () => {
  if (cartSidebar.classList.contains('active')) {
    toggleCart();
  }
  document.querySelectorAll('.modal.active').forEach(modal => {
    closeModal(modal);
  });
});

// Cart Toggle
cartBtn.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);

// Remove toggleCart function (no longer needed, logic handled above)


// Search Functionality
searchBtn.addEventListener('click', () => {
  openModal(searchModal);
  overlay.classList.add('active');
  searchModal.querySelector('input').focus();
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = e.target.querySelector('input').value.toLowerCase();
  
  const results = products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );
  
  renderSearchResults(results);
});

function renderSearchResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  searchResults.innerHTML = results.map(product => `
    <div class="search-result" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <div class="search-result-info">
        <h4>${product.name}</h4>
        <p>${product.category}</p>
        <div class="search-result-price">
          ${product.salePrice 
            ? `<span class="sale-price">$${product.salePrice}</span>
               <span class="original-price">$${product.price}</span>`
            : `<span>$${product.price}</span>`
          }
        </div>
      </div>
    </div>
  `).join('');

  // Add click handlers to search results
  searchResults.querySelectorAll('.search-result').forEach(result => {
    result.addEventListener('click', () => {
      const productId = parseInt(result.dataset.id);
      closeModal(searchModal);
      showProductDetails(productId);
    });
  });
}

// Product Filtering
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;
    renderProducts(category);
  });
});

// Category Navigation
categoryCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const category = card.dataset.category;
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (filterBtn) {
      filterBtn.click();
      document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Render Products
async function renderProducts(category = 'all') {
  showLoading();
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let html = '';
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    html += `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.salePrice ? `<span class="badge-sale">Sale</span>` : ''}
          ${product.new ? `<span class="badge-new">New</span>` : ''}
        </div>
        <div class="product-details">
          <div class="product-category">${product.category}</div>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-price">
            ${product.salePrice 
              ? `<span class="sale-price">$${product.salePrice}</span>
                 <span class="original-price">$${product.price}</span>`
              : `<span>$${product.price}</span>`
            }
          </div>
          <div class="product-rating">
            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}
            <span>(${product.reviews})</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-primary add-to-cart" data-id="${product.id}">
              Add to Cart
            </button>
            <button class="btn btn-outlined view-details" data-id="${product.id}">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
  });

  productGrid.innerHTML = html;
  hideLoading();

  // Add event listeners to new buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
    });
  });

  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showProductDetails(productId);
    });
  });
}

// Cart Functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      quantity: 1
    });
  }

  updateCart();
  saveCart();
  showNotification('Product added to cart');
}

function updateCart() {
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn minus" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="remove-item" data-id="${item.id}">×</button>
    </div>
  `).join('');

  // Update cart count and total
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;

  // Add event listeners to quantity buttons
  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', updateQuantity);
  });

  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', removeItem);
  });
}

function updateQuantity(e) {
  const id = parseInt(e.target.dataset.id);
  const item = cart.find(item => item.id === id);
  
  if (e.target.classList.contains('plus')) {
    item.quantity++;
  } else {
    item.quantity--;
    if (item.quantity === 0) {
      cart = cart.filter(item => item.id !== id);
    }
  }

  updateCart();
  saveCart();
}

function removeItem(e) {
  const id = parseInt(e.target.dataset.id);
  cart = cart.filter(item => item.id !== id);
  updateCart();
  saveCart();
  showNotification('Product removed from cart');
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Product Modal
function showProductDetails(productId) {
  const product = products.find(p => p.id === productId);
  
  modal.querySelector('.modal-body').innerHTML = `
    <div class="product-modal">
      <div class="product-modal-gallery">
        ${product.images.map(img => `
          <img src="${img}" alt="${product.name}">
        `).join('')}
      </div>
      <div class="product-modal-info">
        <h2>${product.name}</h2>
        <div class="product-modal-price">
          ${product.salePrice 
            ? `<span class="sale-price">$${product.salePrice}</span>
               <span class="original-price">$${product.price}</span>`
            : `<span>$${product.price}</span>`
          }
        </div>
        <div class="product-modal-rating">
          ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}
          <span>(${product.reviews} reviews)</span>
        </div>
        <p class="product-modal-description">${product.description}</p>
        <button class="btn btn-primary add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  openModal(modal);

  // Add event listener to new add to cart button
  modal.querySelector('.add-to-cart').addEventListener('click', (e) => {
    const productId = parseInt(e.target.dataset.id);
    addToCart(productId);
  });
}

// Hero Slider
function initSlider() {
  const slides = [
    {
      title: 'Next-Gen Technology',
      description: 'Discover our latest collection of cutting-edge electronics that will transform your digital experience.',
      image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg'
    },
    {
      title: 'Premium Audio Experience',
      description: 'Immerse yourself in premium sound quality with our latest collection of headphones and speakers.',
      image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg'
    },
    {
      title: 'Smart Home Revolution',
      description: 'Transform your home with our intelligent devices. Up to 30% off on selected products.',
      image: 'https://images.pexels.com/photos/4062563/pexels-photo-4062563.jpeg'
    }
  ];

  const sliderContainer = document.querySelector('.hero-slider');
  const dotsContainer = document.querySelector('.dots');
  
  // Create slides
  slides.forEach((slide, index) => {
    if (index === 0) return; // Skip first slide as it's in HTML
    
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';
    slideElement.innerHTML = `
      <div class="slide-content">
        <h1>${slide.title}</h1>
        <p>${slide.description}</p>
        <a href="#products" class="btn btn-primary">Shop Now</a>
      </div>
      <div class="slide-image" style="background-image: url('${slide.image}')"></div>
    `;
    sliderContainer.appendChild(slideElement);
  });

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Get all slides and dots
  const slideElements = document.querySelectorAll('.slide');
  const dotElements = document.querySelectorAll('.dot');

  function goToSlide(index) {
    slideElements.forEach(slide => slide.classList.remove('active'));
    dotElements.forEach(dot => dot.classList.remove('active'));
    
    slideElements[index].classList.add('active');
    dotElements[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }

  // Add event listeners to navigation buttons
  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);

  // Auto slide
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Pause on hover
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', stopSlideShow);
  hero.addEventListener('mouseleave', startSlideShow);

  startSlideShow();
}

// Newsletter Form
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  
  // Simulate API call
  showLoading();
  setTimeout(() => {
    hideLoading();
    showNotification('Thank you for subscribing!');
    e.target.reset();
  }, 1000);
});

// Notifications
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification slide-up';
  notification.textContent = message;
  
  notificationContainer.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Checkout Button
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showNotification('Your cart is empty');
    return;
  }
  
  // Simulate checkout process
  showLoading();
  setTimeout(() => {
    hideLoading();
    cart = [];
    updateCart();
    saveCart();
    toggleCart();
    showNotification('Order placed successfully!');
  }, 1500);
});