const products = [
    { name: 'Capsicum & Red Paprika with Videshi Hot Sauce', image: 'images pizza/CapsicumPaprikaHome.jpg', price: 'price:₹89', keyword: 'c' },
    { name: 'Farmhouse', image: 'images pizza/farmhouse.jpg', price: '₹259', keyword: 'f' },
    { name: 'Paneer Spice Supreme', image: 'images pizza/PaneerSpiceSupreme.jpg', price: '₹299', keyword: 'p' },
    { name: 'Veg Extra Vaganza', image: 'images pizza/Veg Extravaganza.jpg', price: '₹309', keyword: 'v' },
    { name: 'Pepper Barbecue Chicken', image: 'images pizza/pepper barbecue chicken.jpg', price: '₹249', keyword: 'p' },
    { name: 'Spiced Double Chicken', image: 'images pizza/spiced double chiken.jpg', price: '₹329', keyword: 's' },
    { name: 'Indi Chicken Tikka', image: 'images pizza/indi chicken tikka.jpg', price: '₹309', keyword: 'i' },
    { name: 'Non Veg Supreme', image: 'images pizza/non veg supreme.jpg', price: '₹399', keyword: 'n' },
    { name: 'Veggie Paradise', image: 'images pizza/veggie_paradise_side.jpg', price: '₹269', keyword: 'v' },
    { name: 'Cheese Volcano Veggie Paradise', image: 'images pizza/VeggieParadise.jpg', price: '₹299', keyword: 'c' },
    { name: 'Cheese Volcano BBQ Chicken', image: 'images pizza/CheeseVolcanoBBQChicken.jpg', price: '₹349', keyword: 'c' },
    { name: 'Cheese Volcano Peppy Pepper', image: 'images pizza/volcanoHomePeppyPaneer.jpg', price: '₹399', keyword: 'c' },
    { name: 'Veg Rockstar Burger', image: 'images pizza/Veg Rockstar Burger.jpg', price: '₹99', keyword: 'v' },
    { name: 'Veg Snacker Burger', image: 'images pizza/Veg Snacker Burger.jpg', price: '₹129', keyword: 'v' },
    { name: 'Mexican Marvel Burger', image: 'images pizza/Mexican Marvel Burger.jpg', price: '₹209', keyword: 'm' },
    { name: 'Crispy Chicken Burger', image: 'images pizza/Crispy Chicken Burger.jpg', price: '₹129', keyword: 'c' },
    { name: 'Chilli Cheese Sandwich', image: 'images pizza/Chilli_Cheese_Sandwich.jpg', price: '₹110', keyword: 'c' },
    { name: 'Chicken Tikka Sandwich', image: 'images pizza/Chicken_Tikka_Sandwich.jpg', price: '₹135', keyword: 'c' },
    { name: 'Roasted Chicken and Mustard Sandwich', image: 'images pizza/Roasted_Chicken_and_Mustard_Sandwich.jpg', price: '₹150', keyword: 'r' },
    { name: 'Spinach Corn Cheese Sandwich', image: 'images pizza/Spinach_Corn_Cheese_Sandwich.jpg', price: '₹120', keyword: 's' },
    { name: 'Choco Lava Cake', image: 'images pizza/chocolavacake.jpg', price: '₹109', keyword: 'c' },
    { name: 'Red Velvet Lava Cake', image: 'images pizza/red velvet lavacake.jpg', price: '₹139', keyword: 'r' },
    { name: 'ButterScotch Mousse Cake', image: 'images pizza/Butterscotch_mousse.jpg', price: '₹109', keyword: 'b' },
    { name: 'Lemon Tart', image: 'images pizza/lemon-tart.jpg', price: '₹160', keyword: 'l' },
    { name: 'Vanilla Ice Cream', image: 'images pizza/vanilla.jpg', price: '₹100', keyword: 'v' },
    { name: 'Straw Berry Ice Cream', image: 'images pizza/strawberry-ice-cream-berries.jpg', price: '₹140', keyword: 's' },
    { name: 'Blue Berry Ice Cream', image: 'images pizza/mumberry-ice-cream-glass.jpg', price: '₹160', keyword: 'b' },
    { name: 'Mixed Balls Ice Cream', image: 'images pizza/mixed ice cream.jpg', price: '₹455', keyword: 'm' },
    { name: 'Orange Juice', image: 'images pizza/orange.jpg', price: '₹100', keyword: 'o' },
    { name: 'Pomegranate Juice', image: 'images pizza/pomegrants.jpg', price: '₹120', keyword: 'p' },
    { name: 'Kiwi Juice', image: 'images pizza/kiwi.jpg', price: '₹120', keyword: 'k' },
    { name: 'Lemon Juice', image: 'images pizza/lemon.jpg', price: '₹60', keyword: 'l' },
    { name: 'Coca Cola', image: 'images pizza/cococola.jpg', price: '₹40', keyword: 'c' },
    { name: '7UP', image: 'images pizza/7up.jpg', price: '₹40', keyword: '7' },
    { name: 'Fanta', image: 'images pizza/fanta.jpg', price: '₹40', keyword: 'f' },
    { name: 'Pespi', image: 'images pizza/pespi.jpg', price: '₹40', keyword: 'p' },

  ];

  function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productList = document.getElementById('productList');
    const recommendations = document.getElementById('recommendations');
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));
    const recommendationItems = products.filter(product => product.keyword.startsWith(input.charAt(0).toLowerCase()));

    productList.innerHTML = '';
    recommendations.innerHTML = '';

    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-name">${product.name}</div>
          <div class="product-price">${product.price}</div>
        `;
        productList.appendChild(productElement);
      });
    } else {
      productList.innerHTML = '<p>No products found.</p>';
    }
  }


  let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(productName, productPrice, productImage) {
      const existingProduct = cart.find(item => item.name === productName);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ name: productName, price: productPrice, quantity: 1, image: productImage });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${productName} has been added to the cart successfully!`);
    }

    function goToCart() {
      window.location.href = '/d';
    }