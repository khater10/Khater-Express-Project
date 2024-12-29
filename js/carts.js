let ProductsInCart = localStorage.getItem("ProductsInCart") 
    ? JSON.parse(localStorage.getItem("ProductsInCart")) 
    : [];

let allproducts = document.querySelector(".allproducts");

if (ProductsInCart) {
    drawCartProducts(ProductsInCart);
    displayTotalPrice();
}

// Function of drawing the cart products 
function drawCartProducts(products) {
    let y = products.map((item, index) => {
        return `
            <div class="col-12 col-md-4 col-lg-4">
                <div class="card mt-4">
                    <div class="product-item">
                        <img class="product-item-img card-img-top" src="${item.imageUrl}" style="height:200px;" alt="">
                        <div class="product-item-desc card-body">
                            <h2 style="font-weight: bold; color:brown" class="card-title">${item.title}</h2>
                            <p style="font-weight: bold; font-size:20px; color:green">${item.price}</p>
                            <p style="font-weight: bold; color: black; font-size:20px">${item.color}</p>
                            <p class="item-count" style="font-weight: bold; color: black; font-size:20px">
                                Count: ${item.counter || 1}
                            </p>
                        </div>
                        <div class="product-item-action">
                            <button class="add-to-cart remove btn btn-danger" data-index="${index}">
                                Remove From Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join(""); // Join to avoid commas in the output
    allproducts.innerHTML = y;

    // function click created remove buttons
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index")); // Get the index
            removeFromCart(index); // Call the remove function
        });
    });
}
///////////////////////////////////////////////////////////////////////////////////////
// Function to remove an item from the cart
function removeFromCart(index) {
    if (ProductsInCart[index].counter > 1) {
        // Reduce item counter if greater than 1
        ProductsInCart[index].counter--;
    } else {
        // Remove the item if the counter reaches 0
        ProductsInCart.splice(index, 1);
    }

    // Save updated cart to localStorage
    localStorage.setItem("ProductsInCart", JSON.stringify(ProductsInCart));

    drawCartProducts(ProductsInCart); // Update drawing
    displayTotalPrice();              // Update total price 
}

/////////////////////////////////////////////////////////////////////////////
// Function to calculate the total price
function TotalPrice(products) {
    return products.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
        const count = item.counter || 1; // Default is 1 if counter is undefined
        return sum + (price * count); // Calculate total for the item
    }, 0);
}

// Function to update the displayed total price
function displayTotalPrice() {
    const totalPrice = TotalPrice(ProductsInCart); // Calculate total price
    const totalPrices = document.querySelector(".total"); // Find total element
    if (totalPrices) {
        totalPrices.textContent = `$${totalPrice.toFixed(2)}`; // Update dynamically
    } else {
        console.error("Total price element not found in the DOM");
    }
}
/////////////////////////////////////////////////////////////////////////////////////////
// Function to draw the favorite items
function displayFavoriteItems() {
    const favoriteItems = [];

const products =  [
    {
        id:0,
        imageUrl:"images/koty.jpeg",
        title:"Iphone 14 pro max",
        title2:"New Iphone 14 pro max with 256GB storage",
        price:"Price : 1100$",
        color:"Gold"
        },
        {
        id:1,
        imageUrl:"images/argan.jpg",
        title:"Argan Oil",
        title2:"High Altitude Organics Argan Oil for Skin , Virgin.",
        price:"Price : 70$",
        color:"Golden Yellow"
        },
        {
        id:2,
        imageUrl:"images/head.png",
        title:"Gaming Headset",
        title2:"Headphones: Wireless, Wired, Immersive Audio | Razer United Stated",
        price:"Price : 100$",
        color:"Grey"
        },
        {
        id:3,
        imageUrl:"images/face brush.jpg",
        title:"Face Brush",
        title2:"The best facial cleansing brush can help clear pores, brighten skin.",
        price:"Price : 20$",
        color:"Black"
        },
        {
        id:4,
        imageUrl:"images/living.jpg",
        title:"Living Room",
        title2:"Living Room Patterns. A neutral color palette and warm materials.",
        price:"Price : 1500$",
        color:"White"
        },
        {
        id:5,
        imageUrl:"images/laptop.avif",
        title:"Laptop",
        title2:"gaming laptops and beyond. Here are the best models you can buy.",
        price:"Price : 800$",
        color:"Grey"
        },
        {
        id:6,
        imageUrl:"images/perfum.jpg",
        title:"Perfume",
        title2:"from the most popular fragrance brands. Find the perfect scent for any occasion!",
        price:"Price : 50$",
        color:"Gold"
        },
        {
        id:7,
        imageUrl:"images/sofa.jpg",
        title:"Sofa",
        title2:"With a sofa and armchair, everyone in the family can get comfortable.",
        price:"Price : 700$",
        color:"White"
        },
        {
        id:8,
        imageUrl:"images/24ultra.webp",
        title:"Samsung S24 Ultra",
        title2:"Samsung - Galaxy S24 Ultra 256GB (Unlocked) - Titanium Yellow",
        price:"Price : 1050$",
        color:"Titanium Yellow"
        },
        {
        id:9,
        imageUrl:"images/camera.webp",
        title:"Nikon Camera",
        title2:"Nikon,including Z series Mirrorless Cameras, DSLR and Compact Cameras.",
        price:"Price : 1900$",
        color:"Black"
        },
        {
        id:10,
        imageUrl:"images/candle.jpg",
        title:"Candle",
        title2:"Yankee Candle MidSummer's Night Scented, Classic Wick Jar Candle.",
        price:"Price : 15$",
        color:"Red"
        },
        {
        id:11,
        imageUrl:"images/another.jpg",
        title:"Earbuds2",
        title2:"Samsung galaxy buds2 pro bluetooth earbuds, wireless",
        price:"Price : 300$",
        color:"Black"
        },
        {
        id:12,
        imageUrl:"images/mouse.jpg",
        title:"Asus Mouse",
        title2:"ASUS ROG Spatha X Wireless Gaming Mouse.",
        price:"Price : 110$",
        color:"Black"
        },
        {
        id:13,
        imageUrl:"images/chair.jpg",
        title:"Gaming Chair",
        title2:"Dowinx Gaming Chair Breathable Fabric Computer Chair,Pocket Spring Cushion.",
        price:"Price : 200$",
        color:"Green"
        },
        {
        id:14,
        imageUrl:"images/suit.jpg",
        title:"Men Suit",
        title2:"consists of five components which are shirt,jacket,shoes,pants and socks.",
        price:"Price : 500$",
        color:"Dark Blue"
        },
        {
        id:15,
        imageUrl:"images/cup..avif",
        title:"Water Bottle",
        title2:"Cute Water Bottle Thermal Mug Portable Thermos Bottle For Tea Travel.",
        price:"Price : 20$",
        color:"Orange/Green"
        },
        {
        id:16,
        imageUrl:"images/watch.avif",
        title:"Men Watch",
        title2:"POEDAGAR Luxury Watch Business Waterproof Male Clock Luminous 2024.",
        price:"Price : 300$",
        color:"Silver"
        },
        {
        id:17,
        imageUrl:"images/new-balance.jpg",
        title:"New-balance",
        title2:"new-balance-574-trainer-white-green-80s casual.",
        price:"Price : 200$",
        color:"Green/White"
        },
        {
        id:18,
        imageUrl:"images/jackets.webp",
        title:"Leather Jacket",
        title2:"2022 Winter Men's Leather Jacket Bomber Jacket Warm Casual Leather.",
        price:"Price : 35$",
        color:"Brown"
        },
        {
        id:19,
        imageUrl:"images/ssd.avif",
        title:"SSD Movespeed",
        title2:"MOVESPEED 7450MB/s SSD NVMe 2TB Internal Solid State Hard Disk.",
        price:"Price : 700$",
        color:"Dark Grey"
        },
        {
        id:20,
        imageUrl:"images/lazy.jpg",
        title:"Lazy Boy",
        title2:"LaZy Boy chair Recliners Conner Power Rocking Recliner with USB Port Find.",
        price:"Price : 510$",
        color:"Beige"
        },
        {
        id:21,
        imageUrl:"images/light.webp",
        title:"Candeliers Lights",
        title2:"Chandeliers for Dining Room 12 Lights Height Adjustable Ceiling Light.",
        price:"Price : 150$",
        color:"Black"
        },
        {
        id:22,
        imageUrl:"images/mirror.jpeg",
        title:"Heart Mirror",
        title2:"XL heart mirror stunning ornate elegant mirror with good decorative.",
        price:"Price : 210$",
        color:"Silver"
        },
        {
        id:23,
        imageUrl:"images/sofra.webp",
        title:"Dining Table",
        title2:"All American 50's Style Diner Tables are heavy duty quality for domestic.",
        price:"Price : 1000$",
        color:"Beige"
        },
        {
        id:24,
        imageUrl:"images/dress.jpg",
        title:"Evening Dress",
        title2:" great selection of Women's Dresses at Khater_Express.com..",
        price:"Price : 1300$",
        color:"Black"
        },
        {
        id:25,
        imageUrl:"images/sofa.jpg",
        title:"Sofa",
        title2:"With a sofa and armchair, everyone in the family can get comfortable.",
        price:"Price : 700$",
        color:"White"
        },
        {
        id:26,
        imageUrl:"images/bed.jpeg",
        title:"Bed Room",
        title2:"Mason Upholstered Platform Bed Frame with Headboard, chiars and wardrobe. ",
        price:"Price : 2500$",
        color:"Grey"
        },
        {
        id:27,
        imageUrl:"images/luggage.jpg",
        title:"Leather Luggage",
        title2:"American Tourister. American Tourister Luggage and Suitcases. ",
        price:"Price : 250$",
        color:"Brown"
        },
        {
        id:28,
        imageUrl:"images/coffejpg.jpg",
        title:"Coffe Machine",
        title2:"Best Coffee Makers, According to Expert Testing for drip coffee and iced coffee",
        price:"Price : 230$",
        color:"Silver"
        },
        {
        id:29,
        imageUrl:"images/motorcycle.jpg",
        title:"Honda Motorcycle",
        title2:"This is one of the best motorcycles to grace earth itself. The Honda Z series Ducati 749.",
        price:"Price : 22500$",
        color:"Black"
    },
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Check each product's favorite status
    products.forEach((product, index) => {
        const isFavorite = localStorage.getItem(`favorite-${index}`) === "true";
        if (isFavorite) {
            favoriteItems.push(product); // Add to favorites array if marked as favorite
        }
    });

    // Display favorite items
    const favoriteDiv = document.querySelector(".favouriteitems");
    favoriteDiv.innerHTML = ""; // Clear the favorite div before adding new content
    if (favoriteItems.length === 0) {
        favoriteDiv.innerHTML = "<p style='font-size: 25px;'>No favorite items.</p>";
    } else {
        favoriteItems.forEach(item => {
            favoriteDiv.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card mt-4">
                    <div class="product-item">
                        <img class="product-item-img card-img-top" src="${item.imageUrl}" style="height:200px;" alt="${item.title}">
                        <div class="product-item-desc card-body">
                            <h3 style="font-size:18px; color:brown">${item.title}</h3>
                            <p style="font-weight: bold; font-size:20px; color:green">${item.price}</p>
                        </div>
                        <div class="product-item-action">
                            <button class="remove-favorite add-to-cart btn btn-danger" data-id="${item.id}">
                                Remove from Favorites
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
    }

    // Add function to remove items from favorites
    const removeButtons = document.querySelectorAll(".remove-favorite");
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = button.getAttribute("data-id");
            removeFromFavorites(productId); 
        });
    });
}

// Function to remove an item from favorites
function removeFromFavorites(productId) {
    // Mark the product as not favorite in localStorage
    localStorage.setItem(`favorite-${productId}`, "false"); // Mark as not favorite in localStorage

    // Redisplay the favorite items after removal
    displayFavoriteItems(); 
}
// Initial call to display favorite items
displayFavoriteItems();


