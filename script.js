// Cart functionality
let cart = [];

// Function to add items to the cart
function addToCart(service) {
    // Add the selected service to the cart array
    cart.push(service);
    // Update the cart UI
    updateCart();
}

// Function to update the cart list displayed on the page
function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear the current cart list

    if (cart.length > 0) {
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            cartList.appendChild(listItem);
        });
    } else {
        cartList.innerHTML = '<li>Your cart is empty.</li>';
    }
}

// Function to proceed to WhatsApp
function proceedToWhatsApp() {
    if (cart.length > 0) {
        // Create the WhatsApp message from the cart items
        const cartMessage = encodeURIComponent(`Hello! I would like to order the following services: ${cart.join(', ')}`);
        const whatsappURL = `https://wa.me/254790889066?text=${cartMessage}`;
        
        // Open WhatsApp chat with the cart items
        window.open(whatsappURL, '_blank');
    } else {
        alert('Your cart is empty! Please add services to the cart before proceeding.');
    }
}
