/**
 * SEIGNEURBAGS — Luxury Boutique Client Application
 * Features:
 * - Dynamic Currency Switcher (USD, EUR, GBP, AED)
 * - Interactive Shopping Bag Drawer with Subtotal & Quantities
 * - Quick View Modal with Full Haute Couture Specifications
 * - Category Filter Tabs (Handbags, Footwear, Watches, Accessories)
 * - Live Instant Search Modal
 * - Dubai VIP Concierge WhatsApp Generator & Sourcing Request Modal
 * - Wishlist Toggles & Toast Notification System
 */

// ==========================================
// 1. PRODUCT CATALOG DATA
// ==========================================
const PRODUCTS = [
  {
    id: 'sb-01',
    designer: 'Hermès Paris',
    title: 'Birkin 25 Togo Noir Gold Hardware',
    category: 'handbags',
    basePriceUSD: 28500,
    badge: 'Dubai Vault Exclusive',
    badgeType: 'badge-vault',
    primaryImg: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic Hermès Birkin 25 hand-crafted in supple Togo calfskin with signature 24-karat gold-plated hardware. Kept in climate-controlled Dubai vault.',
    specs: {
      condition: 'Pristine / Unworn Store Fresh (Year 2026)',
      leather: 'Togo Calfskin Grainé',
      hardware: 'Gilded 24K Gold-Plated',
      dimensions: '25 cm x 20 cm x 13 cm',
      origin: 'Atelier Hermès, Pantin, France',
      inclusion: 'Full Box, Clochette, Keys, Raincoat, CITES Certificate'
    }
  },
  {
    id: 'sb-02',
    designer: 'Patek Philippe',
    title: 'Nautilus 5711/1R-001 Rose Gold 18K',
    category: 'watches',
    basePriceUSD: 142000,
    badge: 'Limited Stock',
    badgeType: 'badge-limited',
    primaryImg: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of luxury sports horology. Solid 18K rose gold casing with warm brown-black gradated dial and sapphire crystal exhibition caseback.',
    specs: {
      condition: 'Mint / Verified Dubai Vault Collector Grade',
      movement: 'Calibre 26-330 S C Automatic',
      caseSize: '40 mm x 8.3 mm Solid 18K Rose Gold',
      powerReserve: '45 Hours',
      origin: 'Geneva, Switzerland',
      inclusion: 'Patek Wooden Presentation Box, Certificate of Origin'
    }
  },
  {
    id: 'sb-03',
    designer: 'Chanel',
    title: 'Classic Double Flap Medium Quilted Caviar',
    category: 'handbags',
    basePriceUSD: 11200,
    badge: 'Bestseller',
    badgeType: 'badge-bestseller',
    primaryImg: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Chanel Double Flap in resilient black quilted grained Caviar calfskin with signature woven leather chain and interlocking CC turnlock clasp.',
    specs: {
      condition: 'Pristine Store Fresh',
      material: 'Grained Caviar Calfskin',
      hardware: 'Champagne Gilt Metal',
      dimensions: '25.5 cm x 15.5 cm x 6.5 cm',
      origin: 'Paris, France',
      inclusion: 'Original Magnetic Box, NFC Microchip Verified, Dustbag'
    }
  },
  {
    id: 'sb-04',
    designer: 'Audemars Piguet',
    title: 'Royal Oak Chronograph 41mm Frosted White Gold',
    category: 'watches',
    basePriceUSD: 89500,
    badge: 'Dubai Vault Exclusive',
    badgeType: 'badge-vault',
    primaryImg: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1547996160-71dfabb1877a?auto=format&fit=crop&w=800&q=80',
    description: 'Sculpted with the Florentine frosted gold hammering technique. Features the Grande Tapisserie dial and octagonal bezel secured with 8 white gold hexagonal screws.',
    specs: {
      condition: 'Unworn 2026 Edition',
      caliber: 'Selfwinding Calibre 4401 Flyback',
      case: '41mm 18K Frosted White Gold',
      dial: 'Deep Bleu Nuit Grande Tapisserie',
      origin: 'Le Brassus, Switzerland',
      inclusion: 'Green Lacquered Vault Box, AP Global Warranty Card'
    }
  },
  {
    id: 'sb-05',
    designer: 'Christian Dior',
    title: 'Lady Dior My ABCDior Cannage Lambskin',
    category: 'handbags',
    basePriceUSD: 6500,
    badge: 'Bestseller',
    badgeType: 'badge-bestseller',
    primaryImg: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    description: 'Architectural elegance defined by architectural Cannage topstitching, pale gold-finish metal D.I.O.R. charms, and a customizable shoulder strap.',
    specs: {
      condition: 'Brand New In Box',
      leather: 'Ultra-Soft Cannage Lambskin',
      hardware: 'Pale Gilded Champagne Finish',
      dimensions: '20 cm x 17 cm x 8 cm',
      origin: 'Florence, Italy',
      inclusion: 'Authenticity Booklet, Dustbag, Silk Ribbon, Presentation Box'
    }
  },
  {
    id: 'sb-06',
    designer: 'Loro Piana',
    title: 'Summer Charms Walk Loafers Water-Repellent Suede',
    category: 'footwear',
    basePriceUSD: 1350,
    badge: 'Bestseller',
    badgeType: 'badge-bestseller',
    primaryImg: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic unlined casual loafers crafted in velvety suede treated with a water-repellent finish. Adorned with mini engraved My Charms on the band.',
    specs: {
      condition: 'Pristine Store Fresh',
      material: '100% Suede Calfskin with Napa Insole',
      sole: 'Off-White Natural Latex Non-Slip Sole',
      origin: 'Made in Italy',
      inclusion: 'Individual Velvet Sleeves, Cedar Scented Dustbags'
    }
  },
  {
    id: 'sb-07',
    designer: 'Rolex Genève',
    title: 'Cosmograph Daytona 126500LN "Panda" Oystersteel',
    category: 'watches',
    basePriceUSD: 34500,
    badge: 'Limited Stock',
    badgeType: 'badge-limited',
    primaryImg: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    description: 'The definitive benchmark chronograph. White lacquer dial with black snailed counters, high-tech monobloc Cerachrom ceramic tachymeter bezel.',
    specs: {
      condition: 'Vault New / Unsized Full Links',
      movement: 'Calibre 4131 Superlative Chronometer',
      case: '40 mm Oystersteel (904L)',
      waterResistance: '100 meters / 330 feet',
      origin: 'Geneva, Switzerland',
      inclusion: 'Green Leather Box, Guarantee Card, Green Chronometer Tag'
    }
  },
  {
    id: 'sb-08',
    designer: 'Hermès Paris',
    title: 'Constance 24 Epsom Gold on Gold Hardware',
    category: 'handbags',
    basePriceUSD: 19800,
    badge: 'Dubai Vault Exclusive',
    badgeType: 'badge-vault',
    primaryImg: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Sought-after Hermès Constance 24 in structured Epsom leather in classic Gold camel tone, centered with the unmistakable mirror-polished gilded H clasp.',
    specs: {
      condition: 'Unworn 2026 Stamp',
      leather: 'Rigid Epsom Leather',
      hardware: 'Mirror Gilded Yellow Gold',
      dimensions: '24 cm x 17.5 cm x 7 cm',
      origin: 'Paris, France',
      inclusion: 'Felt Protector, Cites Documentation, Vault Casket'
    }
  },
  {
    id: 'sb-09',
    designer: 'Cartier',
    title: 'Love Bracelet Diamond-Paved 18K Yellow Gold',
    category: 'accessories',
    basePriceUSD: 44200,
    badge: 'Dubai Vault Exclusive',
    badgeType: 'badge-vault',
    primaryImg: 'https://images.unsplash.com/photo-1611591475155-42647548d011?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    description: 'An iconic tribute to timeless romance. 18K yellow gold set with 204 brilliant-cut diamonds totaling 1.99 carats, complete with functional gold screwdriver.',
    specs: {
      condition: 'Factory Sealed / Store Fresh',
      metal: '18K Yellow Gold (750/1000)',
      stones: '204 Brilliant-Cut Diamonds (VVS1, F Color)',
      size: 'Size 17 (Custom sizing on request)',
      origin: 'Cartier Atelier, Place Vendôme, Paris',
      inclusion: 'Red Leather Casket, Diamond Certificate, Screwdriver'
    }
  },
  {
    id: 'sb-10',
    designer: 'Christian Louboutin',
    title: 'So Kate 120 Patent Leather Red Sole Pumps',
    category: 'footwear',
    basePriceUSD: 995,
    badge: 'Bestseller',
    badgeType: 'badge-bestseller',
    primaryImg: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic seduction in high-gloss black patent leather with an architectural 120mm stiletto heel and the legendary Louboutin scarlet-lacquered sole.',
    specs: {
      condition: 'Brand New In Box',
      leather: 'Gloss Patent Calfskin',
      heelHeight: '120 mm / 4.7 inches',
      origin: 'Naples, Italy',
      inclusion: 'Scarlet Dustbag, Spare Heel Taps, Presentation Box'
    }
  },
  {
    id: 'sb-11',
    designer: 'Van Cleef & Arpels',
    title: 'Vintage Alhambra 10-Motif Guilloché Necklace 18K',
    category: 'accessories',
    basePriceUSD: 12800,
    badge: 'Limited Stock',
    badgeType: 'badge-limited',
    primaryImg: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1611591475155-42647548d011?auto=format&fit=crop&w=800&q=80',
    description: 'Pure sunburst radiance. 10 guilloché yellow gold lucky clover motifs catching light like polished silk. Hallmark of French haute joaillerie.',
    specs: {
      condition: 'Pristine Collector Grade',
      gold: '18K Yellow Gold Guilloché Engraved',
      length: '42 cm (Classic Opera Collar)',
      origin: 'Paris, France',
      inclusion: 'Suede Travel Pouch, Green Presentation Case, VCA Certificate'
    }
  },
  {
    id: 'sb-12',
    designer: 'Hermès Paris',
    title: 'Chypre Sandal Calfskin & Shearling Noir',
    category: 'footwear',
    basePriceUSD: 1450,
    badge: 'Bestseller',
    badgeType: 'badge-bestseller',
    primaryImg: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    alternateImg: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
    description: 'Anatomical rubber sole techno-sandal featuring the signature cut-out H strap and adjustable velcro top strap for effortless high-fashion luxury.',
    specs: {
      condition: 'Store Fresh Store New',
      material: 'Grained Calfskin Leather with Ergonomic Insole',
      origin: 'Made in Italy',
      inclusion: 'Orange Hermès Box, Bolduc Ribbon, Dust Covers'
    }
  }
];

// ==========================================
// 2. CURRENCY CONVERSION CONFIGURATION
// ==========================================
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, decimals: 0, code: 'USD' },
  EUR: { symbol: '€', rate: 0.92, decimals: 0, code: 'EUR' },
  GBP: { symbol: '£', rate: 0.79, decimals: 0, code: 'GBP' },
  AED: { symbol: 'AED ', rate: 3.6725, decimals: 0, code: 'AED' }
};

let currentCurrency = 'USD';

function formatCurrency(amountUSD) {
  const cfg = CURRENCIES[currentCurrency];
  const converted = Math.round(amountUSD * cfg.rate);
  return `${cfg.symbol}${converted.toLocaleString()}`;
}

// ==========================================
// 3. SHOPPING BAG STATE (CART)
// ==========================================
let cart = [
  { id: 'sb-01', quantity: 1 }
];

let wishlist = new Set(['sb-02']);

// WhatsApp Concierge Number & Direct link template
const WHATSAPP_PHONE = '971501234567'; // Dubai international format simulated

// ==========================================
// 4. DOM ELEMENTS & INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderProducts('all');
  initFilterTabs();
  initCurrencySelector();
  initCartDrawer();
  initModals();
  initSearch();
  initNewsletter();
  updateCartBadge();
  updateWishlistBadge();
});

// Sticky Header Transition
function initHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu drawer toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-nav-close');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
    mobileClose?.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
    // Close on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    });
  }
}

// Currency Selector Listener
function initCurrencySelector() {
  const select = document.getElementById('currency-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    updateAllPrices();
    showToast(`Currency updated to ${currentCurrency} (${CURRENCIES[currentCurrency].symbol})`);
  });
}

function updateAllPrices() {
  // Update Product Grid Prices
  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.dataset.id;
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod) {
      const priceEl = card.querySelector('.product-price');
      if (priceEl) priceEl.textContent = formatCurrency(prod.basePriceUSD);
    }
  });

  // Update Cart Display
  renderCartItems();

  // Update QuickView Modal if open
  const qvPrice = document.getElementById('modal-product-price');
  const qvId = document.getElementById('quickview-modal')?.dataset.activeId;
  if (qvPrice && qvId) {
    const prod = PRODUCTS.find(p => p.id === qvId);
    if (prod) qvPrice.textContent = formatCurrency(prod.basePriceUSD);
  }
}

// Render Products to Grid
function renderProducts(category = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}" data-category="${item.category}">
      <div class="product-media-container">
        <img class="product-img primary-img" src="${item.primaryImg}" alt="${item.title}" loading="lazy">
        <img class="product-img alternate-img" src="${item.alternateImg}" alt="${item.title} angle" loading="lazy">
        
        <div class="product-badge-list">
          <span class="badge ${item.badgeType}">${item.badge}</span>
        </div>

        <button class="wishlist-btn ${wishlist.has(item.id) ? 'active' : ''}" 
                onclick="toggleWishlist('${item.id}', this)" 
                aria-label="Save to Wishlist">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${wishlist.has(item.id) ? '#d82b4b' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <div class="product-quick-actions">
          <button class="btn-quick-view" onclick="openQuickView('${item.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick View
          </button>
        </div>
      </div>

      <div class="product-info">
        <span class="product-designer">${item.designer}</span>
        <h3 class="product-title">${item.title}</h3>
        <div class="product-meta-row">
          <span class="product-price">${formatCurrency(item.basePriceUSD)}</span>
          <button class="product-add-btn" onclick="addToBag('${item.id}')">
            <span>+ Add</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Tabs
function initFilterTabs() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      renderProducts(cat);
    });
  });
}

// ==========================================
// 5. SHOPPING CART DRAWER LOGIC
// ==========================================
function initCartDrawer() {
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartTrigger = document.getElementById('cart-trigger-btn');
  const cartClose = document.getElementById('cart-close-btn');

  if (cartTrigger && drawerOverlay) {
    cartTrigger.addEventListener('click', () => {
      renderCartItems();
      drawerOverlay.classList.add('open');
    });
  }

  if (cartClose && drawerOverlay) {
    cartClose.addEventListener('click', () => {
      drawerOverlay.classList.remove('open');
    });
  }

  // Close when clicking outside of drawer
  drawerOverlay?.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) {
      drawerOverlay.classList.remove('open');
    }
  });

  // Checkout button simulation
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your shopping bag is currently empty.');
        return;
      }
      openCheckoutConfirmation();
    });
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-value');
  if (!container || !subtotalEl) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p style="font-family: var(--font-serif); font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Your Bag is Empty</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Explore our collection of authentic designer handbags and timepieces.</p>
      </div>
    `;
    subtotalEl.textContent = formatCurrency(0);
    return;
  }

  let totalUSD = 0;

  container.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    const itemTotal = product.basePriceUSD * item.quantity;
    totalUSD += itemTotal;

    return `
      <div class="cart-item" data-id="${product.id}">
        <img class="cart-item-img" src="${product.primaryImg}" alt="${product.title}">
        <div class="cart-item-details">
          <span class="cart-item-designer">${product.designer}</span>
          <h4 class="cart-item-title">${product.title}</h4>
          <span class="cart-item-price">${formatCurrency(product.basePriceUSD)}</span>
          <div class="cart-item-controls">
            <div class="quantity-stepper">
              <button class="stepper-btn" onclick="updateItemQuantity('${product.id}', -1)" aria-label="Decrease quantity">-</button>
              <span class="stepper-value">${item.quantity}</span>
              <button class="stepper-btn" onclick="updateItemQuantity('${product.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove-btn" onclick="removeFromBag('${product.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  subtotalEl.textContent = formatCurrency(totalUSD);
}

function addToBag(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  updateCartBadge();
  renderCartItems();

  // Open drawer automatically for high-fashion feedback
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  drawerOverlay?.classList.add('open');

  showToast(`Added "${product.title}" to your shopping bag.`);
}

function updateItemQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartBadge();
  renderCartItems();
}

function removeFromBag(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  cart = cart.filter(i => i.id !== productId);
  updateCartBadge();
  renderCartItems();
  if (product) showToast(`Removed "${product.title}" from bag.`);
}

function updateCartBadge() {
  const badge = document.getElementById('bag-count-badge');
  if (!badge) return;
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function updateWishlistBadge() {
  const countEl = document.getElementById('wishlist-count-badge');
  if (countEl) {
    countEl.textContent = wishlist.size;
    countEl.style.display = wishlist.size > 0 ? 'flex' : 'none';
  }
}

function toggleWishlist(productId, btnElement) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    btnElement?.classList.remove('active');
    const svg = btnElement?.querySelector('svg');
    if (svg) svg.setAttribute('fill', 'none');
    showToast('Removed item from your private wishlist.');
  } else {
    wishlist.add(productId);
    btnElement?.classList.add('active');
    const svg = btnElement?.querySelector('svg');
    if (svg) svg.setAttribute('fill', '#d82b4b');
    showToast('Saved to your private wishlist.');
  }
  updateWishlistBadge();
}

// Checkout Confirmation Simulation
function openCheckoutConfirmation() {
  const subtotalUSD = cart.reduce((acc, item) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return acc + (prod ? prod.basePriceUSD * item.quantity : 0);
  }, 0);

  const formattedTotal = formatCurrency(subtotalUSD);
  
  // Format WhatsApp direct checkout message
  const summaryLines = cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return `• ${prod.designer} - ${prod.title} (x${item.quantity})`;
  }).join('%0A');

  const waText = encodeURIComponent(
    `Hello SeigneurBags Private Concierge, I would like to finalize my VIP order for:\n` +
    cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      return `• ${prod.designer} - ${prod.title} (Qty: ${item.quantity})`;
    }).join('\n') +
    `\nTotal: ${formattedTotal}\nPlease advise on Dubai Vault wire instructions or secure link.`
  );

  const confirmModal = document.getElementById('checkout-modal');
  if (confirmModal) {
    document.getElementById('checkout-summary-total').textContent = formattedTotal;
    document.getElementById('checkout-wa-btn').href = `https://wa.me/${WHATSAPP_PHONE}?text=${waText}`;
    confirmModal.classList.add('open');
  } else {
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${waText}`, '_blank');
  }
}

// ==========================================
// 6. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  if (!modal) return;

  modal.dataset.activeId = product.id;

  document.getElementById('modal-product-img').src = product.primaryImg;
  document.getElementById('modal-product-designer').textContent = product.designer;
  document.getElementById('modal-product-title').textContent = product.title;
  document.getElementById('modal-product-price').textContent = formatCurrency(product.basePriceUSD);
  document.getElementById('modal-product-desc').textContent = product.description;

  // Render specifications
  const specsContainer = document.getElementById('modal-product-specs');
  if (specsContainer) {
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="quickview-spec-row">
        <span class="spec-key">${formatSpecKey(key)}:</span>
        <span class="spec-val">${val}</span>
      </div>
    `).join('');
  }

  // Setup WhatsApp direct button for this piece
  const waBtn = document.getElementById('modal-wa-inquire-btn');
  if (waBtn) {
    const text = encodeURIComponent(
      `Hello SeigneurBags Concierge, I am inquiring regarding the availability of the ${product.designer} ${product.title} (Ref: ${product.id}) listed at ${formatCurrency(product.basePriceUSD)}.`
    );
    waBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  }

  // Setup Add to bag button
  const addBtn = document.getElementById('modal-add-to-bag-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToBag(product.id);
      modal.classList.remove('open');
    };
  }

  modal.classList.add('open');
}

function formatSpecKey(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

// Close Modals setup
function initModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        modal.classList.remove('open');
      }
    });
  });

  // Concierge trigger button in header & hero
  const conciergeBtns = document.querySelectorAll('.trigger-concierge-modal');
  const conciergeModal = document.getElementById('concierge-modal');
  conciergeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      conciergeModal?.classList.add('open');
    });
  });

  // Concierge Form submission
  const conciergeForm = document.getElementById('concierge-sourcing-form');
  if (conciergeForm) {
    conciergeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const brand = document.getElementById('concierge-brand')?.value || 'Rare Piece';
      const model = document.getElementById('concierge-model')?.value || 'Haute Couture';
      const budget = document.getElementById('concierge-budget')?.value || 'Undisclosed';
      const clientName = document.getElementById('concierge-name')?.value || 'VIP Client';

      const message = encodeURIComponent(
        `Hello SeigneurBags Private Dubai Concierge,%0A%0AMy name is ${clientName}. I would like to request private sourcing for:%0A• Brand: ${brand}%0A• Model / Specification: ${model}%0A• Target Budget: ${budget}%0A%0APlease confirm if this can be inspected and dispatched from your Dubai Vault.`
      );

      conciergeModal?.classList.remove('open');
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
      showToast('Opening private WhatsApp concierge thread with Dubai Atelier...');
    });
  }
}

// ==========================================
// 7. LIVE SEARCH MODAL
// ==========================================
function initSearch() {
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input-field');
  const resultsContainer = document.getElementById('search-results-list');
  const searchClose = document.getElementById('search-close-btn');

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      searchModal?.classList.add('open');
      setTimeout(() => searchInput?.focus(), 150);
    });
  });

  searchClose?.addEventListener('click', () => {
    searchModal?.classList.remove('open');
  });

  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('open');
    }
  });

  if (searchInput && resultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; grid-column: span 2;">Type to search Hermès, Patek Philippe, Chanel, Rolex, Cartier...</p>`;
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.designer.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="color: var(--text-secondary); grid-column: span 2; padding: 2rem 0; text-align: center;">No catalog items match "${q}". Chat with our <a href="#" class="text-gold trigger-concierge-modal" style="text-decoration: underline;">VIP Concierge</a> to source this piece exclusively.</p>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="selectSearchResult('${p.id}')">
          <img class="search-result-thumb" src="${p.primaryImg}" alt="${p.title}">
          <div>
            <div style="font-size: 0.65rem; color: var(--gold-primary); letter-spacing: 0.15em; text-transform: uppercase;">${p.designer}</div>
            <div style="font-family: var(--font-serif); font-size: 0.95rem; color: #fff;">${p.title}</div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light);">${formatCurrency(p.basePriceUSD)}</div>
          </div>
        </div>
      `).join('');
    });
  }
}

function selectSearchResult(productId) {
  const searchModal = document.getElementById('search-modal');
  searchModal?.classList.remove('open');
  openQuickView(productId);
}

// Newsletter Subscription
function initNewsletter() {
  const form = document.getElementById('footer-newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showToast('Welcome to the Seigneur Private Club. Vault drop access confirmed.');
        emailInput.value = '';
      }
    });
  }
}

// Toast Notifications System
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Make functions globally available for inline onclick attributes
window.addToBag = addToBag;
window.removeFromBag = removeFromBag;
window.updateItemQuantity = updateItemQuantity;
window.openQuickView = openQuickView;
window.toggleWishlist = toggleWishlist;
window.selectSearchResult = selectSearchResult;
window.openCheckoutConfirmation = openCheckoutConfirmation;
