let userInfo = document.querySelector("#user-info")
let userD = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("firstname")) {
    links.remove();

    userInfo.style.display = "flex";
    userInfo.style.justifyContent = "center";
    userInfo.style.alignItems = "left";    

    userD.innerHTML = `Welcome ${localStorage.getItem("firstname")}`;
}

let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    } , 1500 )
})
///////////////////////////////////////////////////////////////////////////////////////
// Check if user is logged in
function isUserLoggedIn() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // Check if both email and password exist
    return email && password;
}

// Ensure event listeners only run after the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Handle the add-to-cart button click
    let goLog = document.querySelectorAll(".add-to-cart");
    goLog.forEach(button => {
        button.addEventListener("click", function() {
            if (!isUserLoggedIn()) {
                window.location = "login.html";
                return;
            }
            AddToCart(parseInt(button.getAttribute("data-id")));
        });
    });

   // Function of heart icon click and favorite state
function HeartClick() {
  let goSign = document.querySelectorAll(".fa-heart");

  goSign.forEach((icon, id) => {
      // On page load, check localStorage to restore the heart state
      const savedFavorite = localStorage.getItem(`favorite-${id}`);
      if (savedFavorite === "true") {
          icon.style.color = "red"; // Set the color to red if saved as favorite
      } else {
          icon.style.color = ""; // Set to default if not favorited
      }

      // Click event for each heart icon
      icon.addEventListener("click", function() {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
  
        if (!email || !password) {
          // Redirect to login page if user is not logged in
          window.location = "login.html";}
          // change color to red or remove the color 
          else if (icon.style.color === "red") {
              icon.style.color = ""; // Reset to default color
              localStorage.setItem(`favorite-${id}`, "false"); // Mark as not favorite in localStorage
          } else {
              icon.style.color = "red"; // Change to red when clicked
              localStorage.setItem(`favorite-${id}`, "true"); // Mark as favorite in localStorage
          }
      });
  });
}
// Call the function to initialize the favorites state
HeartClick();

// Clear cart when user logs in
if (isUserLoggedIn()) {
    localStorage.removeItem("ProductsInCart");
    addedItems = [];
    CartItems();
}
});
////////////////////////////////////////////////////////////////////////////////////////
let allproducts = document.querySelector(".products")
let products = [
    {
      id:1,
      imageUrl:"images/koty.jpeg",
      title:"Iphone 14 pro max",
      title2:"New Iphone 14 pro max with 256GB storage",
      price:"Price : 1100$",
      color:"Gold"
    },
    {
      id:2,
      imageUrl:"images/argan.jpg",
      title:"Argan Oil",
      title2:"High Altitude Organics Argan Oil for Skin , Virgin.",
      price:"Price : 70$",
      color:"Golden Yellow"
    },
    {
      id:3,
      imageUrl:"images/head.png",
      title:"Gaming Headset",
      title2:"Headphones: Wireless, Wired, Immersive Audio | Razer United Stated",
      price:"Price : 100$",
      color:"Grey"
    },
    {
      id:4,
      imageUrl:"images/face brush.jpg",
      title:"Face Brush",
      title2:"The best facial cleansing brush can help clear pores, brighten skin.",
      price:"Price : 20$",
      color:"Black"
    },
    {
      id:5,
      imageUrl:"images/living.jpg",
      title:"Living Room",
      title2:"Living Room Patterns. A neutral color palette and warm materials.",
      price:"Price : 1500$",
      color:"White"
    },
    {
      id:6,
      imageUrl:"images/laptop.avif",
      title:"Laptop",
      title2:"gaming laptops and beyond. Here are the best models you can buy.",
      price:"Price : 800$",
      color:"Grey"
    },
    {
      id:7,
      imageUrl:"images/perfum.jpg",
      title:"Perfume",
      title2:"from the most popular fragrance brands. Find the perfect scent for any occasion!",
      price:"Price : 50$",
      color:"Gold"
    },
    {
      id:8,
      imageUrl:"images/sofa.jpg",
      title:"Sofa",
      title2:"With a sofa and armchair, everyone in the family can get comfortable.",
      price:"Price : 700$",
      color:"White"
    },
    {
      id:9,
      imageUrl:"images/24ultra.webp",
      title:"Samsung S24 Ultra",
      title2:"Samsung - Galaxy S24 Ultra 256GB (Unlocked) - Titanium Yellow",
      price:"Price : 1050$",
      color:"Titanium Yellow"
    },
    {
      id:10,
      imageUrl:"images/camera.webp",
      title:"Nikon Camera",
      title2:"Nikon,including Z series Mirrorless Cameras, DSLR and Compact Cameras.",
      price:"Price : 1900$",
      color:"Black"
    },
    {
      id:11,
      imageUrl:"images/candle.jpg",
      title:"Candle",
      title2:"Yankee Candle MidSummer's Night Scented, Classic Wick Jar Candle.",
      price:"Price : 15$",
      color:"Red"
    },
    {
      id:12,
      imageUrl:"images/another.jpg",
      title:"Earbuds2",
      title2:"Samsung galaxy buds2 pro bluetooth earbuds, wireless",
      price:"Price : 300$",
      color:"Black"
    },
    {
      id:13,
      imageUrl:"images/mouse.jpg",
      title:"Asus Mouse",
      title2:"ASUS ROG Spatha X Wireless Gaming Mouse.",
      price:"Price : 110$",
      color:"Black"
    },
    {
      id:14,
      imageUrl:"images/chair.jpg",
      title:"Gaming Chair",
      title2:"Dowinx Gaming Chair Breathable Fabric Computer Chair,Pocket Spring Cushion.",
      price:"Price : 200$",
      color:"Green"
    },
    {
      id:15,
      imageUrl:"images/suit.jpg",
      title:"Men Suit",
      title2:"consists of five components which are shirt,jacket,shoes,pants and socks.",
      price:"Price : 500$",
      color:"Dark Blue"
    },
    {
      id:16,
      imageUrl:"images/cup..avif",
      title:"Water Bottle",
      title2:"Cute Water Bottle Thermal Mug Portable Thermos Bottle For Tea Travel.",
      price:"Price : 20$",
      color:"Orange/Green"
    },
    {
      id:17,
      imageUrl:"images/watch.avif",
      title:"Men Watch",
      title2:"POEDAGAR Luxury Watch Business Waterproof Male Clock Luminous 2024.",
      price:"Price : 300$",
      color:"Silver"
    },
    {
      id:18,
      imageUrl:"images/new-balance.jpg",
      title:"New-balance",
      title2:"new-balance-574-trainer-white-green-80s casual.",
      price:"Price : 200$",
      color:"Green/White"
    },
    {
      id:19,
      imageUrl:"images/jackets.webp",
      title:"Leather Jacket",
      title2:"2022 Winter Men's Leather Jacket Bomber Jacket Warm Casual Leather.",
      price:"Price : 35$",
      color:"Brown"
    },
    {
      id:20,
      imageUrl:"images/ssd.avif",
      title:"SSD Movespeed",
      title2:"MOVESPEED 7450MB/s SSD NVMe 2TB Internal Solid State Hard Disk.",
      price:"Price : 700$",
      color:"Dark Grey"
    },
    {
      id:21,
      imageUrl:"images/lazy.jpg",
      title:"Lazy Boy",
      title2:"LaZy Boy Recliners Conner Power Rocking Recliner with USB Port Find.",
      price:"Price : 510$",
      color:"Beige"
    },
    {
      id:22,
      imageUrl:"images/light.webp",
      title:"Candeliers Lights",
      title2:"Chandeliers for Dining Room 12 Lights Height Adjustable Ceiling Light.",
      price:"Price : 150$",
      color:"Black"
    },
    {
      id:23,
      imageUrl:"images/mirror.jpeg",
      title:"Heart Mirror",
      title2:"XL heart mirror stunning ornate elegant mirror with good decorative.",
      price:"Price : 210$",
      color:"Silver"
    },
    {
      id:24,
      imageUrl:"images/sofra.webp",
      title:"Dining Table",
      title2:"All American 50's Style Diner Tables are heavy duty quality for domestic.",
      price:"Price : 1000$",
      color:"Beige"
    },
    {
      id:25,
      imageUrl:"images/dress.jpg",
      title:"Evening Dress",
      title2:" great selection of Women's Dresses at Khater_Express.com..",
      price:"Price : 1300$",
      color:"Black"
    },
    {
      id:26,
      imageUrl:"images/sofa.jpg",
      title:"Sofa",
      title2:"With a sofa and armchair, everyone in the family can get comfortable.",
      price:"Price : 700$",
      color:"White"
    },
    {
      id:27,
      imageUrl:"images/bed.jpeg",
      title:"Bed Room",
      title2:"Mason Upholstered Platform Bed Frame with Headboard, chiars and wardrobe. ",
      price:"Price : 2500$",
      color:"Grey"
    },
    {
      id:28,
      imageUrl:"images/luggage.jpg",
      title:"Leather Luggage",
      title2:"American Tourister. American Tourister Luggage and Suitcases. ",
      price:"Price : 250$",
      color:"Brown"
    },
    {
      id:29,
      imageUrl:"images/coffejpg.jpg",
      title:"Coffe Machine",
      title2:"Best Coffee Makers, According to Expert Testing for drip coffee and iced coffee",
      price:"Price : 230$",
      color:"Silver"
    },
    {
      id:30,
      imageUrl:"images/motorcycle.jpg",
      title:"Honda Motorcycle",
      title2:"This is one of the best motorcycles to grace earth itself. The Honda Z series Ducati 749.",
      price:"Price : 22500$",
      color:"Black"
    },
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function drawItems(filteredProducts =[]){
    let y = filteredProducts.map((item) => {
        return`
            <div class="col-12 col-md-4 col-lg-4">
                <div class="home card mt-4">
                    <div class="product-item">
                        <img class="product-item-img card-img-top" src="${item.imageUrl}" alt="">
                        <div class="product-item-desc card-body">
                            <h2 style="font-weight: bold; color:brown" class="card-title">${item.title}</h2>
                            <p class="card-text">"${item.title2}"</p>
                            <p style="font-weight: bold; font-size:20px; color:green">${item.price}</p>
                            <span style="font-weight: bold; font-size:20px;">${item.color}</span>
                        </div>
                        <div class="product-item-action">
                            <button class="add-to-cart btn btn-primary" onclick="AddToCart(${item.id})">Add To Cart</button>
                            <i class="fa-solid fa-heart fav"></i>
                        </div>
                    </div>
                </div>
            </div>`
    }).join("");
    allproducts.innerHTML = y;
}drawItems()

/////////////////////////////////////////////////////////////////////////////////////////
document.querySelector("#search-input").addEventListener("input", () => {
    const searchValue = document.querySelector("#search-input").value.toLowerCase();
    const searchType = document.querySelector("#search-type").value;
  
    // Filter products based on search type and value
    const filteredProducts = products.filter(item => {
      if (searchType === "name") {
        return item.title.toLowerCase().includes(searchValue); // Search by name
      } else if (searchType === "color") {
        return item.color.toLowerCase().includes(searchValue); // Search by color
      }
      return false; // Default case
    });
    
    // If no search value, clear the display
    if (!searchValue.trim()) {
        drawItems(products); 
    } else {
      drawItems(filteredProducts); // Draw filtered items
    }
  });
  
  drawItems(products); // Initially draw all products
/////////////////////////////////////////////////////////////////////////////////////////
let slectedItems = document.querySelector(".carts-products div");
let badge = document.querySelector(".badge");
let cartsproducts = document.querySelector(".carts-products"); 
let addedItems = localStorage.getItem("ProductsInCart")

  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

function badgeCount() {
  const totalCount = addedItems.reduce((sum, item) => sum + item.counter, 0);
  badge.style.display = totalCount > 0 ? "block" : "none";
  badge.innerHTML = totalCount;
}

function CartItems() {
    slectedItems.innerHTML = ""; // Clear current cart display
  addedItems.forEach((item, index) => {
    // If 'counter' property is not defined, initialize it
    if (item.counter === undefined) {
      item.counter = 1;
    }

    // Create a cart item with title, counter, and buttons
    slectedItems.innerHTML += `
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; border: 1px solid #ccc; padding: 10px; margin: 5px; border-radius: 5px; background-color: #f9f9f9;">
        <p style="font-weight: bold; margin: 0;">${item.title}</p>
        <div style="display: flex; align-items: center;">
          <button class="minus" data-index="${index}" style="background-color:red; color: white; border: none; padding: 5px; margin-right: 5px; border-radius: 3px; cursor: pointer;">-</button>
          <span class="counter" style="margin: 0 10px; font-size: 18px;">${item.counter}</span>
          <button class="plus" data-index="${index}" style="background-color:green; color: white; border: none; padding: 5px; margin-left: 5px; border-radius: 3px; cursor: pointer;">+</button>
        </div>
      </div>
    `;
  });
  badgeCount();

  // Save the updated items back to localStorage
  localStorage.setItem("ProductsInCart", JSON.stringify(addedItems));
}
/////////////////////////////////////////////////////////////////////////////////////////
// Function of button clicks
function Click(event) {
  event.stopPropagation(); // Prevent the cart from closing on button clicks
  const target = event.target;
  if (target.classList.contains("plus")) {
    const index = target.dataset.index;
    addedItems[index].counter++;
    CartItems();
  } else if (target.classList.contains("minus")) {
    const index = target.dataset.index;
    if (addedItems[index].counter > 1) {
      addedItems[index].counter--;
    } else {
      // Remove the item if the counter reaches 0
      addedItems.splice(index, 1);
    }
    CartItems();
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
// Add new items to the cart
function AddToCart(id) {
  let choosenItem = products.find((item) => item.id === id);
  if (choosenItem) {
    // Check if the item already exists in the cart
    let existingItem = addedItems.find((item) => item.id === id);
    if (existingItem) {
      existingItem.counter++; // Increase counter if item already exists
    } else {
      choosenItem.counter = 1; // Add counter property
      addedItems.push(choosenItem); // Add new item
    }
    CartItems();
  }
}

// Attach event listener for cart updates
slectedItems.addEventListener("click", Click);
// Prevent cart div from closing when interacting with it
cartsproducts.addEventListener("click", (event) => {
  event.stopPropagation();
});
// Close cart when clicking outside of it
document.addEventListener("click", () => {
  cartsproducts.style.display = "none";
});
// Initial items on page load
if (addedItems.length > 0) {
  CartItems();
} else {
  badge.style.display = "none";
}

let shoppingCartIcon = document.querySelector(".shopping-cart");
shoppingCartIcon.addEventListener("click", openCart);

function openCart(event) {
  event.stopPropagation(); // Prevent immediate closing when clicking the cart icon
  if (slectedItems.innerHTML !== "") {
    cartsproducts.style.display = cartsproducts.style.display === "block" ? "none" : "block";
  }
}


