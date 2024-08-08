document.addEventListener('DOMContentLoaded', () => {
    // Sidebar category switching
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.category-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');

            sections.forEach(section => {
                if (section.id === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Cart functionality
    const cart = {}; // Use an object to manage quantities
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartModal = document.getElementById('cart-modal');
    const showCartButton = document.getElementById('show-cart');
    const closeModalButton = document.querySelector('.close-modal');
    const checkoutButton = document.getElementById('checkout-button');

    // Add to cart functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));

            // Update cart object
            if (!cart[name]) {
                cart[name] = { name, price, quantity: 0 };
            }
            cart[name].quantity += 1;

            // Update cart display
            updateCart();
        }
    });

    function updateCart() {
        // Clear existing cart items
        cartItemsContainer.innerHTML = '';

        // Add items to cart
        let total = 0;
        Object.values(cart).forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsContainer.appendChild(li);
            total += item.price * item.quantity;
        });

        // Update total
        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Show cart modal
    showCartButton.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    });

    // Close cart modal
    closeModalButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Close cart modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Checkout functionality
    checkoutButton.addEventListener('click', () => {
        const cartDetails = Object.values(cart)
            .map(item => `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
            .join('%0A');
        const total = Object.values(cart)
            .reduce((acc, item) => acc + (item.price * item.quantity), 0)
            .toFixed(2);
        const message = `*Cart Details*%0A${cartDetails}%0A*Total:* $${total}%0A%0APlease confirm your order.`;
        const phoneNumber = '7080039970';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });

    // Load products from JSON
    function loadProducts() {
        fetch('https://cors-anywhere.herokuapp.com/catalog.json')

            .then(response => response.json())
            .then(data => {
                data.forEach(categoryData => {
                    const categoryId = categoryData.category;
                    const categoryElement = document.getElementById(`${categoryId}-products`);

                    if (categoryElement) {
                        categoryData.products.forEach(product => {
                            const productItem = document.createElement('div');
                            productItem.className = 'product-item';

                            productItem.innerHTML = `
                                <div class="product-image" style="background-image: url('${product.image}');"></div>
                                <div class="product-info">
                                    <h3>${product.name}</h3>
                                    <p>${product.description}</p>
                                    <p class="price">$${product.price.toFixed(2)}</p>
                                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">+</button>
                                    <span class="quantity">0</span>
                                </div>
                            `;

                            categoryElement.appendChild(productItem);
                        });
                    }
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }

    // Initial load of products
    loadProducts();
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const mainContent = document.querySelector('.content');
    const cart = {}; // Use an object to manage quantities
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartModal = document.getElementById('cart-modal');
    const showCartButton = document.getElementById('show-cart');
    const closeModalButton = document.querySelector('.close-modal');
    const checkoutButton = document.getElementById('checkout-button');
    const cartSummary = document.getElementById('cart-summary');

    // Populate sidebar with categories and sections
    catalogData.forEach(category => {
        // Create category link
        const categoryLink = document.createElement('li');
        categoryLink.innerHTML = `
            <a href="#" data-category="${category.category}">
                <div class="category-image" style="background-image: url('${category.products[0].image}');"></div>
                <span>${category.category.charAt(0).toUpperCase() + category.category.slice(1)}</span>
            </a>
        `;
        categoryList.appendChild(categoryLink);

        // Create category section
        const categorySection = document.createElement('section');
        categorySection.id = category.category;
        categorySection.classList.add('category-content');
        categorySection.innerHTML = `
            <h2>${category.category.charAt(0).toUpperCase() + category.category.slice(1)}</h2>
            <div class="product-grid" id="product-list-${category.category}">
                <!-- Products will be inserted here -->
            </div>
        `;
        mainContent.appendChild(categorySection);

        // Populate products for the category
        const productList = document.getElementById(`product-list-${category.category}`);
        category.products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <div class="product-image" style="background-image: url('${product.image}');"></div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="decrement" data-name="${product.name}" data-price="${product.price}">-</button>
                    <span class="quantity">0</span>
                    <button class="increment" data-name="${product.name}" data-price="${product.price}">+</button>
                </div>
            `;
            productList.appendChild(productItem);
        });
    });

    // Handle category switching
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.category-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');

            sections.forEach(section => {
                if (section.id === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Add cart functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('increment') || e.target.classList.contains('decrement')) {
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            const isIncrement = e.target.classList.contains('increment');
            const productItem = e.target.closest('.product-item');
            const quantityDisplay = productItem.querySelector('.quantity');

            // Update cart object
            if (!cart[name]) {
                cart[name] = { name, price, quantity: 0 };
            }

            if (isIncrement) {
                cart[name].quantity += 1;
            } else if (cart[name].quantity > 0) {
                cart[name].quantity -= 1;
            }

            // Update quantity display
            quantityDisplay.textContent = cart[name].quantity;

            // Update cart display
            updateCart();
        }
    });

    function updateCart() {
        // Clear existing cart items
        cartItemsContainer.innerHTML = '';

        // Add items to cart
        let total = 0;
        Object.values(cart).forEach(item => {
            if (item.quantity > 0) {
                const li = document.createElement('li');
                li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
                cartItemsContainer.appendChild(li);
                total += item.price * item.quantity;
            }
        });

        // Update total
        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
        cartSummary.textContent = `Cart: $${total.toFixed(2)}`;
    }

    // Show cart modal
    showCartButton.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    });

    // Close cart modal
    closeModalButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Close cart modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Checkout functionality
    checkoutButton.addEventListener('click', () => {
        const cartDetails = Object.values(cart)
            .filter(item => item.quantity > 0) // Only include items with quantity > 0
            .map(item => `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
            .join('%0A');
        const total = Object.values(cart)
            .filter(item => item.quantity > 0) // Only include items with quantity > 0
            .reduce((acc, item) => acc + (item.price * item.quantity), 0)
            .toFixed(2);
        const message = `*Cart Details*%0A${cartDetails}%0A*Total:* $${total}%0A%0APlease confirm your order.`;
        const phoneNumber = '7080039970';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
