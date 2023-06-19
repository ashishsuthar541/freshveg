
        const button = document.getElementById('close');
        const cart = document.getElementById('cart');
        const cartItemsList = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');

        button.addEventListener('click', () => {
            cart.classList.toggle('active'); /* Toggle active class */
        });

        var cartItems = [];
        var cartTotal = 0;

        function addToCart(productName, price) {
            var cartItem = {
                name: productName,
                price: price
            };

            cartItems.push(cartItem);
            cartTotal += price;

            displayCartItems();
            displayCartTotal();
            saveCartData();
        }

        function removeFromCart(index) {
            var removedItem = cartItems.splice(index, 1)[0];
            cartTotal -= removedItem.price;
            displayCartItems();
            displayCartTotal();
            saveCartData();
        }

        function displayCartItems() {
            cartItemsList.innerHTML = '';

            cartItems.forEach(function(item, index) {
                var li = document.createElement('li');
                li.innerText = item.name + ' - $' + item.price;
                var deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.addEventListener('click', function() {
                    removeFromCart(index);
                });
                li.appendChild(deleteButton);
                cartItemsList.appendChild(li);
            });
        }

        function displayCartTotal() {
            cartTotalElement.innerText = '$' + cartTotal;
        }

        function saveCartData() {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            localStorage.setItem('cartTotal', cartTotal.toString());
        }

        // Retrieve cart data from local storage, if available
        var storedCartItems = localStorage.getItem('cartItems');
        var storedCartTotal = localStorage.getItem('cartTotal');

        cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        cartTotal = storedCartTotal ? parseFloat(storedCartTotal) : 0;

        displayCartItems();
        displayCartTotal();

        // Clear cart data and local storage
        function clearCart() {
            cartItems = [];
            cartTotal = 0;
            localStorage.removeItem('cartItems');
            localStorage.removeItem('cartTotal');
            displayCartItems();
            displayCartTotal();
        }
        // Add a delete button for each cart item in the displayCartItems() function:
        function displayCartItems() {
    cartItemsList.innerHTML = '';

    cartItems.forEach(function(item, index) {
        var li = document.createElement('li');
        li.innerText = item.name + ' - $' + item.price;

        // Create a delete button for each cart item
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            removeCartItem(index);
        });

        li.appendChild(deleteButton);

        cartItemsList.appendChild(li);
    });
}

// Implement the removeCartItem() function to remove the selected item from the cart:
function removeCartItem(index) {
    var removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;

    displayCartItems();
    displayCartTotal();
    saveCartData();
}


