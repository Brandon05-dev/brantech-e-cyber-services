let cart = [];

function addToCart(service) {
    cart.push(service);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

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

function proceedToWhatsApp() {
    if (cart.length > 0) {
        const cartMessage = encodeURIComponent(`Hello! I would like to order the following services: ${cart.join(', ')}`);
        const whatsappURL = `https://wa.me/254790889066?text=${cartMessage}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert('Your cart is empty! Please add services before proceeding.');
    }
}

function searchServices() {
    const input = document.getElementById('search-bar').value.toUpperCase();
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        const serviceName = item.textContent || item.innerText;
        if (serviceName.toUpperCase().includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}