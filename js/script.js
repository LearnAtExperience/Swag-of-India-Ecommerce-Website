//Image toggling when chaging the language

document.getElementById("lang").addEventListener('change', myFunc);

function myFunc() {
  const languageSelect = document.getElementById("lang");
  const languageSelected = languageSelect.getElementsByClassName("lang-item")[languageSelect.selectedIndex].value;
  if (languageSelected == "India") {
    document.getElementById("lang-img").src = "Images/indiaflag.png";
    document.getElementById("phone-no").innerHTML = "+91 7868884536";
  } else if (languageSelected == "UK") {
    document.getElementById("lang-img").src = "Images/ukflag.jpg";
    document.getElementById("phone-no").innerHTML = "+44 7911 123456";
  }
  else if (languageSelected == "Canada") {
    document.getElementById("lang-img").src = "Images/caflag.jpg";
    document.getElementById("phone-no").innerHTML = "+12505550199";
  }
  else {
    document.getElementById("lang-img").src = "Images/usflag.png";
    document.getElementById("phone-no").innerHTML = "+1 877-805-3282";
  }
}

// Moving to top onclick of a button

const gotoBtn = document.getElementById("goto-top-icon");

window.onscroll = () => {
  gotoTopBtnShow(), stickyEffect()
};

function gotoTopBtnShow() {
  if (window.pageYOffset < 225) {
    gotoBtn.style.visibility = "hidden";
  } else {
    gotoBtn.style.visibility = "visible";
  }
}

gotoBtn.addEventListener('click', gotoTop);

function gotoTop() {
  window.scrollTo({
    top: 0
  })
}

//  Navbar sticky effect

const navSub = document.getElementById("nav-sub");
const effect = navSub.offsetTop;

function stickyEffect() {
  if (window.pageYOffset > effect) {
    navSub.classList.add("effect");
  } else {
    navSub.classList.remove("effect");
  }
}

// Making active modal button different in color

let modal1 = document.getElementById("btn-1");
let modal2 = document.getElementById("btn-2");

modal1.addEventListener('click', modalFunc1);

function modalFunc1() {
  modal1.classList.add("change");
  modal2.classList.remove("change");
}

modal2.addEventListener('click', modalFunc2);

function modalFunc2() {
  modal1.classList.remove("change");
  modal2.classList.add("change");
}

// Toggling accordion button icon on FAQ

$('.faq-qa-btn').click(function () {
  $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});


// Getting products data using JSON server

let productListUrl = "https://my-json-server.typicode.com/LearnAtExperience/fakeserver/db";
var productList;
let htmlToReturn = "",
  htmlToReturn1 = "",
  reviews = "",
  lowStar = 0,
  i = 0,
  isNew = 'FALSE';

function loadProducts(productListUrl) {

  fetch("https://my-json-server.typicode.com/LearnAtExperience/fakeserver/db")
    .then(response => response.json())
    .then(json => {
      productList = json;
      productList.Products.forEach((product) => {
        console.log(product.id);


        htmlToReturn = '<div class="card pl-product-item" id="productListItem' + product.id + '">' +
          '<img src="Images/ProductList/product' + product.id + '.png" class="card-img-top pl-pi-img" alt="Product Image">';

        isNew = '<span class="new">NEW</span>';
        if (product.isNew == 'TRUE')
          htmlToReturn += isNew;
        isNew = "";

        htmlToReturn += '<div class="card-body product-info pl-pro-info">' +
          '<p class="card-text p-name">' + product.name + '</p>' +
          '<p class="card-text p-price">' +
          '<span class="amt">Rs. ' + product.priceAfterDiscount + '/-</span>' +
          '<span class="dc">Rs. ' + product.price + '/-</span>' +
          '<span class="off">(33% Off)</span>' +
          '</p>' +
          '<p><span class="ratings">';

        lowStar = 5 - product.ratings;
        for (i = 1; i <= product.ratings; i++) {
          reviews += '<i class="fas fa-star"></i>';
        }

        for (i = 1; i <= lowStar; i++) {
          reviews += '<i class="fal fa-star"></i>';
        }

        htmlToReturn += reviews + product.ratings + '/5';
        reviews = "";

        htmlToReturn += '</span></p>' +
          '</div>' +
          '<div class="pl-blur"></div>' +
          '<div class="pl-hover-opt-container">' +
          '<a class="btn-wish">' +
          '<p class="pl-hover-opt"><i class="fas fa-heart"></i></p>' +
          '</a>' +
          '<a href="productViewPage.html">' +
          '<p class="pl-hover-opt"><i class="fas fa-eye"></i></p>' +
          '</a>' +
          '<a class="btn-purc-later">' +
          '<p class="pl-hover-opt"><i class="fas fa-shopping-cart"></i></p>' +
          '</a>' +
          '</div>' +
          '</div>'

        document.getElementById('pl-product-items').innerHTML += htmlToReturn;
        document.getElementById('pl-product-items-1').innerHTML += htmlToReturn;

      });


      // Showing options onmouseover effect for product list page cards

      var productBlur = document.querySelectorAll("div[id^='productListItem']");

      productBlur.forEach(productListItem1 => {
        productListItem1.addEventListener("mouseover", event => {
          productListItem1.querySelector(".pl-blur").style.visibility = "visible";
          productListItem1.querySelector(".pl-hover-opt-container").style.visibility = "visible";
        })

        productListItem1.addEventListener("mouseout", event => {
          productListItem1.querySelector(".pl-blur").style.visibility = "hidden";
          productListItem1.querySelector(".pl-hover-opt-container").style.visibility = "hidden";
        })
      });


    });

  // Getting products data from JSON for home page

  fetch("https://my-json-server.typicode.com/LearnAtExperience/fakeserver/db")
    .then(response => response.json())
    .then(json => {
      productList = json;
      productList.Products.forEach((product) => {
        console.log(product.id);


        htmlToReturn1 = '<div class="card pl-product-item" id="productListItem' + product.id + '">' +
          '<img src="Images/ProductList/product' + product.id + '.png" class="card-img-top pl-pi-img" alt="Product Image">';

        isNew = '<span class="new">NEW</span>';
        if (product.isNew == 'TRUE')
          htmlToReturn1 += isNew;
        isNew = "";

        htmlToReturn1 += '<div class="card-body product-info pl-pro-info">' +
          '<p class="card-text p-name">' + product.name + '</p>' +
          '<p class="card-text p-price">' +
          '<span class="amt">Rs. ' + product.priceAfterDiscount + '/-</span>' +
          '<span class="dc">Rs. ' + product.price + '/-</span>' +
          '<span class="off">(33% Off)</span>' +
          '</p>' +
          '<p><span class="ratings">';

        lowStar = 5 - product.ratings;
        for (i = 1; i <= product.ratings; i++) {
          reviews += '<i class="fas fa-star"></i>';
        }

        for (i = 1; i <= lowStar; i++) {
          reviews += '<i class="fal fa-star"></i>';
        }

        htmlToReturn1 += reviews + product.ratings + '/5';
        reviews = "";

        htmlToReturn1 += '</span></p>' +
          '</div>' +
          '<div class="pl-blur"></div>' +
          '<div class="pl-hover-opt-container">' +
          '<a class="btn-wish">' +
          '<p class="pl-hover-opt"><i class="fas fa-heart"></i></p>' +
          '</a>' +
          '<a href="productViewPage.html">' +
          '<p class="pl-hover-opt"><i class="fas fa-eye"></i></p>' +
          '</a>' +
          '<a class="btn-purc-later">' +
          '<p class="pl-hover-opt"><i class="fas fa-shopping-cart"></i></p>' +
          '</a>' +
          '</div>' +
          '</div>'

        document.getElementById('pl-product-items-2').innerHTML += htmlToReturn1;

      });


      // Showing options onmouseover effect for home page product cards

      var productBlur = document.querySelectorAll("div[id^='productListItem']");

      productBlur.forEach(productListItem1 => {
        productListItem1.addEventListener("mouseover", event => {
          productListItem1.querySelector(".pl-blur").style.visibility = "visible";
          productListItem1.querySelector(".pl-hover-opt-container").style.visibility = "visible";
        })

        productListItem1.addEventListener("mouseout", event => {
          productListItem1.querySelector(".pl-blur").style.visibility = "hidden";
          productListItem1.querySelector(".pl-hover-opt-container").style.visibility = "hidden";
        })
      });

    });

};

productList = loadProducts(productListUrl);

// --------------------------------------------------------------------------------------------------

// Adding the product to the cart onclick of Add to cart button using local storage

  let products = new Set(); 

  // Click event to add to cart button

  document.body.addEventListener('click', e => {
    if (e.target.closest(".btn-purc-later")) {
      products.add(e.target.closest(".pl-product-item").id);

      // Storing product item in local storage
      let productString = JSON.stringify(Array.from(products));
      localStorage.setItem('ProductID', productString);

    };
  });

  // Parsing JSON data

  let RetrievedProduct = localStorage.getItem("ProductID");
  let productItems = JSON.parse(RetrievedProduct);

  discPrice = [];
  actPrice = [];
  discPrice1 = [];
  actPrice1 = [];
  totalCI = 0;

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let addedProducts = JSON.parse(this.responseText);
      let htmlToReturn3 = " ";

      for (i = 0; i < productItems.length; i++) {
        for (j = 0; j < addedProducts.Products.length; j++) {
          if (productItems[i] == "productListItem" +addedProducts.Products[j].id) {
            discPrice.push(parseInt(addedProducts.Products[j].priceAfterDiscount));
            
            actPrice.push(parseInt(addedProducts.Products[j].price));

            // Pushing prices to session storage
            sessionStorage.setItem("priceDiscounted", JSON.stringify(Array.from(discPrice)));
            sessionStorage.setItem("priceActual", JSON.stringify(Array.from(actPrice)));

            htmlToReturn3 += '<div class="cart-items-holder" id=' + productItems[i] + '>' +
              '<div class="cart-item" id="cart-item1">' +
              '<div class="ci-det-container">' +
              '<div class="ci-img-info-container">' +
              '<div class="ci-img-container">' +
              '<img class="ci-img" src="Images/ProductList/product' + addedProducts.Products[j].id + '.png" alt="Cart Item Image">' +
              '</div>' +
              '<div class="ci-info-container">' +
              '<h6 class="ci-name">' + addedProducts.Products[j].name + '</h6>' +
              '<p class="ci-color">Color: Multicolor</p>' +
              '<p class="ci-seller">Sold By: MCD Pvt. Ltd</p>' +
              '<div class="ci-qty-size-container">' +
              '<div class="ci-size-container">' +
              '<label for="ci-size-selector">Size:</label>' +
              '<select class="ci-size-selector" id="ci-size-selector">' +
              '<option value="onesize" class="ci-size-select" selected>Onesize</option>' +
              '<option value="small" class="ci-size-select">S</option>' +
              '<option value="medium" class="ci-size-select">M</option>' +
              '<option value="larger" class="ci-size-select">L</option>' +
              '<option value="xlarge" class="ci-size-select">XL</option>' +
              '</select>' +
              '</div>' +
              '<div class="ci-qty-container">' +
              '<label for="ci-qty-selector">QTY:</label>' +
              '<select id="ciQtySelector'+i+'" class="ci-qty-selector">' +
              '<option value="1" class="ci-qty-select">1</option>' +
              '<option value="2" class="ci-qty-select">2</option>' +
              '<option value="3" class="ci-qty-select">3</option>' +
              '<option value="4" class="ci-qty-select">4</option>' +
              '<option value="5" class="ci-qty-select">5</option>' +
              '</select>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '<div class="ci-price-container">' +
              '<p class="ci-price">Rs. <span id="ciPriceDiscount'+i+'">' + addedProducts.Products[j].priceAfterDiscount + '</span>/-</p>' +
              '<p class="ci-act-price-off">' +
              '<span id="ci-act-price-con">Rs. <span id="ciPriceActual'+i+'">' + addedProducts.Products[j].price + '</span>/-</span>' +
              '<span id="ci-off">(33% Off)</span>' +
              '</p>' +
              '<p class="ci-del">Delivery in 4-6 days</p>' +
              '</div>' +
              '</div>' +
              '<div class="ci-btn-container">' +
              '<button class="btn-ci-remove" id="removeBtn'+i+'">Remove</button>' +
              '<button class="btn-ci-to-wishlist" id="wishlistBtn'+i+'">Move to Wishlist</button>' +
              '</div>' +
              '</div>' +
              '</div>'

            totalCI += 1;
            document.querySelector("#cart-items-area").innerHTML = htmlToReturn3;
          }
        }
      }
     

      // retrieving prices from session storage
      RetrievedPriceDiscounted = sessionStorage.getItem("priceDiscounted");
      RetrievedPriceActual = sessionStorage.getItem("priceActual");

      // Calculating total, subtotal prices and discount price
      document.getElementById("ch-tot-amt").innerHTML = finalizedCV(discPrice);
      document.getElementById("cart-pd-price").innerHTML = finalizedActCV(actPrice);
      document.getElementById("cart-pd-bag-dc").innerHTML = document.getElementById("cart-pd-price").innerHTML - document.getElementById("ch-tot-amt").innerHTML;
      document.getElementById("cart-pd-ot").innerHTML = finalizedCV(discPrice);

      // Pushing prices to local storage
      localStorage.setItem("finalizedPrice", finalizedCV(discPrice));
      localStorage.setItem("actualPrice", finalizedCV(actPrice));

      for (let i = 0; i < totalCI; i++) {

        document.getElementById("ciQtySelector" +i).onchange = () => {
          discPrice1 = JSON.parse(RetrievedPriceDiscounted);
          actPrice1 = JSON.parse(RetrievedPriceActual);
          const selectedQuantity = document.getElementById("ciQtySelector" + i).selectedIndex + 1;
          // const selectedQuantity = selectQuantity.value;
          document.getElementById("ciPriceDiscount" + i).innerHTML = discPrice1[i] * selectedQuantity;
          document.getElementById("ciPriceActual" + i).innerHTML = actPrice1[i] * selectedQuantity;
          discPrice1[i] = discPrice1[i] * selectedQuantity;
          actPrice1[i] = actPrice1[i] * selectedQuantity;
          document.getElementById("ch-tot-amt").innerHTML = finalizedCV(discPrice1);
          document.getElementById("cart-pd-price").innerHTML = finalizedActCV(actPrice1);
          document.getElementById("cart-pd-bag-dc").innerHTML = document.getElementById("cart-pd-price").innerHTML - document.getElementById("ch-tot-amt").innerHTML;
          document.getElementById("cart-pd-ot").innerHTML = finalizedCV(discPrice1);

          localStorage.setItem("finalizedPrice", finalizedCV(discPrice1));
          localStorage.setItem("actualPrice", finalizedCV(actPrice1));
        }

        // Deleting the products from cart
        document.getElementById("removeBtn" + i).addEventListener('click', animateCI);
        function animateCI() {
          var productId = document.getElementById("removeBtn"+i).closest(".cart-items-holder").id;
          var elementToAnimate = document.getElementById(productId);
          var animationStyle = setInterval(function () {
            if (!elementToAnimate.style.opacity) {
              elementToAnimate.style.opacity = 1;
            }
            else if (elementToAnimate.style.opacity > 0) {
              elementToAnimate.style.opacity -= 0.1;
            }
            else {
              clearInterval(animationStyle);
              elementToAnimate.style.display = "none";
              discPrice1[i] = discPrice[i] * 0;
              actPrice1[i] = actPrice[i] * 0;
              document.getElementById("ch-tot-amt").innerHTML = finalizedCV(discPrice1);
              document.getElementById("cart-pd-price").innerHTML = finalizedActCV(actPrice1);
              document.getElementById("cart-pd-bag-dc").innerHTML = document.getElementById("cart-pd-price").innerHTML - document.getElementById("ch-tot-amt").innerHTML;
              document.getElementById("cart-pd-ot").innerHTML = finalizedCV(discPrice1);

              localStorage.setItem("finalizedPrice", finalizedCV(discPrice1) - discPrice1[i]);
              localStorage.setItem("actualPrice", finalizedCV(actPrice1) - actPrice1[i]);

              var items = JSON.parse(localStorage.getItem("ProductID"));
              for (var k = 0; k < items.length; k++) {
                var item = items[k];
                if (item == productId) {
                  const index = items.indexOf(productId);
                  if (index > -1) {
                    items.splice(index, 1);
                  }
                  break;
                }
              }
            }

            //Storing the result in local storage
            localStorage.setItem("ProductID", JSON.stringify(Array.from(items)));

          }, 100);

        };

        // Moving products from cart to wishlist 
        document.getElementById("wishlistBtn" + i).addEventListener('click', animateCI1);

        function animateCI1() {
          var productId2 = document.getElementById("wishlistBtn" + i).closest(".cart-items-holder").id;
          var existingWI = JSON.parse(localStorage.getItem("WishedProductID"));

          if (existingWI == null) {
            existingWI = [];
          }

          existingWI.push(document.getElementById("wishlistBtn" + i).closest(".cart-items-holder").id);

          localStorage.setItem("WishedProductID", JSON.stringify(Array.from(existingWI)));

          // animation on moving to wishlist

          var elementToAnimate1 = document.getElementById(productId2);
          var animationStyle1 = setInterval(function() {
            if(!elementToAnimate1.style.opacity) {
              elementToAnimate1.style.opacity = 1;
            }
            if(elementToAnimate1.style.opacity > 0) {
              elementToAnimate1.style.opacity -= 0.1;
            }
            else {
              clearInterval(animationStyle1);
              elementToAnimate1.style.display = "none";
              discPrice1[i] = discPrice[i] * 0;
              actPrice1[i] = actPrice[i] * 0;
              document.getElementById("ch-tot-amt").innerHTML = finalizedCV(discPrice1);
              document.getElementById("cart-pd-price").innerHTML = finalizedActCV(actPrice1);
              document.getElementById("cart-pd-bag-dc").innerHTML = document.getElementById("cart-pd-price").innerHTML - document.getElementById("ch-tot-amt").innerHTML;
              document.getElementById("cart-pd-ot").innerHTML = finalizedCV(discPrice1);

              localStorage.setItem("finalizedPrice", finalizedCV(discPrice1) - discPrice1[i]);
              localStorage.setItem("actualPrice", finalizedCV(actPrice1) - actPrice1[i]);
            }
            // Removing product from localStorage
            var items2 = JSON.parse(localStorage.getItem("ProductID"));
            for (var l = 0; l < items2; l++) {
              var item1 = items2[l];
              if (item1 == productId2) {
                const index2 = items2.indexOf(productId2);
                if (index2 > -1) {
                  items2.splice(index2, 1);
                }
                break;
              }
            }
            localStorage.setItem("ProductID", JSON.stringify(Array.from(items2)));
          }, 100);
        }
      }

      //Calculating discounted price 
      function finalizedCV(prices) {
        finalized = 0;
        for (priceOrg of prices) {
          finalized += parseInt(priceOrg);
        }
        return finalized;
      }

      //Calculating original price 
      function finalizedActCV(prices) {
        finalized1 = 0;
        for (priceAct of prices) {
          finalized1 += parseInt(priceAct);
        }
        return finalized1;
      }

    }
  };

  xhr.open("GET", "https://my-json-server.typicode.com/LearnAtExperience/fakeserver/db", true);
  xhr.send();

// -------------------------------------------------------------------------------------------------

// Adding products to whishlist onclick of wishlist button

let products1 = new Set();

// Click event to wishlist icon

document.body.addEventListener("click", w => {
  if (w.target.closest(".btn-wish")) {
    products1.add(w.target.closest(".pl-product-item").id);

    // Storing that product in localStorage
    localStorage.setItem('WishedProductID', JSON.stringify(Array.from(products1)));
  };

});

let RetrievedProduct1 = localStorage.getItem("WishedProductID");
let productItems1 = JSON.parse(RetrievedProduct1);
totalWI = 0;

let xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let addedProducts = JSON.parse(this.responseText);
    for (i = 0; i < productItems1.length; i++) {
      for (j = 0; j < addedProducts.Products.length; j++) {
        if (productItems1[i] == "productListItem" + addedProducts.Products[j].id) {
          let htmlToReturn4 = " ";
          htmlToReturn4 = '<div class="wishlist-item" id='+productItems1[i]+'>'+
          '<div class="wl-img-container">'+
            '<img src="Images/ProductList/Product'+addedProducts.Products[j].id+'.png" alt="Product Image" class="wl-img">'+
          '</div>'+
          '<div class="wl-pro-info-container">'+
            '<h6 class="wl-pro-name">'+addedProducts.Products[j].name+'</h6>'+
            '<p class="wl-pro-ratings">'+
              '<i class="fas fa-star wl-rat-star"></i>'+
              '<i class="fas fa-star wl-rat-star"></i>'+
              '<i class="fas fa-star wl-rat-star"></i>'+
              '<i class="fas fa-star wl-rat-star"></i>'+
              '<i class="fas fa-star wl-unrat-star"></i>'+
              '<span class="wl-pro-rat-count" id="wl-pro-rat-count">(2650)</span>'+
            '</p>'+
            '<p class="wl-pro-price">'+
              '<span class="wl-pro-disc-price" id="wl-pro-disc-price">Rs.'+addedProducts.Products[j].priceAfterDiscount+'/-</span>'+
              '<span class="wl-pro-act-price" id="wl-pro-act-price">Rs. '+addedProducts.Products[j].price+'/-</span>'+
              '<span class="wl-pro-off-perc">(60% Off)</span>'+
            '</p>'+
            '<div class="wl-pro-pack-selector">'+
            '<select class="wl-pro-pack-select" id="wl-pro-pack-select">' +
                '<option class="wl-pro-pack-items">Select a pack of</option>'+
                '<option class="wl-pro-pack-items">1</option>'+
                '<option class="wl-pro-pack-items">2</option>'+
                '<option class="wl-pro-pack-items">3</option>'+
                '<option class="wl-pro-pack-items">4</option>'+
                '<option class="wl-pro-pack-items">5</option>'+
              '</select>'+
            '</div>'+
            '<div class="wl-btn-container">'+
              '<button class="btn-wl-atc" id="atcProduct'+i+'">Add to Cart</button>'+
              '<button class="btn-wl-remove" id="removeWished'+i+'">Remove from Wishlist</button>'+
            '</div>'+
          '</div>'+
          '</div>'
          
          totalWI += 1;
          document.getElementById("wishlist-items-container").innerHTML += htmlToReturn4;
        }
      }
    }

    for (let i = 0; i < totalWI; i++) {
      document.getElementById("removeWished" + i).addEventListener('click', animateWI);
      function animateWI() {
        var productId1 = document.getElementById("removeWished" + i).closest(".wishlist-items-container").id;
        var elementToAnimate = document.getElementById(productId1);
        var animationStyle = setInterval(function() {
          if (!elementToAnimate.style.opacity) {
            elementToAnimate.style.opacity = 1;
          }
          if (elementToAnimate.style.opacity > 0) {
            elementToAnimate.style.opacity -= 0.1;
          }
          else {
            clearInterval(animationStyle);
            elementToAnimate.style.display = 'none';
          }

          var items1 = JSON.parse(localStorage.getItem("WishedProductID"));
          for(var k = 0; k < items1.length; k++) {
            var item = items1[k];
            if (item == productId1 ) {
              const index1 = items1.indexOf(productId1);
              if (index1 > -1) {
                items1.splice(index1, 1);
              }
              break;
            }
          }

          // Pushing to localStorage
          localStorage.setItem("WishedProductID", JSON.stringify(Array.from(items1)));
        }, 100);
      }

      // Moving to Cart from Wishlist functionality

      document.getElementById("atcProduct" + i).addEventListener('click', animateWI1);

      function animateWI1() {
        var productId3 = document.getElementById("atcProduct" + i).closest(".wishlist-item").id;
        var existingCI = JSON.parse(localStorage.getItem("ProductID"));

        if (existingCI == null) {
          existingCI = [];
        }

        existingCI.push(document.getElementById("atcProduct" + i).closest(".wishlist-item").id);

        localStorage.setItem("ProductID", JSON.stringify(Array.from(existingCI)));

        var elementToAnimate2 = document.getElementById(productId3);
        var animationStyle2 = setInterval(function() {
          if (!elementToAnimate2.style.opacity) {
            elementToAnimate2.style.opacity = 1;
          }
          if (elementToAnimate2.style.opacity > 0) {
            elementToAnimate2.style.opacity -= 0.1;
          } 
          else {
            clearInterval(fadeEffect1);
            elementToAnimate2.style.display = 'none';
          }

          var items3 = JSON.parse(localStorage.getItem("WishedProductID"));
          for (var m = 0; m < items3.length; m++) {
            var item2 = items4[m];
            if (item2 == productId3) {
              const index3 = items4.indexOf(productId3);
              if (index3 > -1) {
                items3.splice(index3, 1);
              }
              break;
            }
          }
          localStorage.setItem("WishedProductID", JSON.stringify(Array.from(items3)));
        }, 100); 
      }
    }
  }
};

xhr1.open("GET", "https://my-json-server.typicode.com/LearnAtExperience/fakeserver/db", true);
xhr1.send();

// -------------------------------------------------------------------------------------------------

// localStorage functionality for edit profile page

document.getElementById("btn-ep-sc").onclick = function () {
  location.href = "profilepage.html";

  // Storing values in the localStorage
  var phone = document.getElementById("edit-pro-ph-no").value;
  var cname = document.getElementById("edit-pro-name").value;
  var email = document.getElementById("edit-pro-email").value
  var dob = document.getElementById("edit-pro-dob").value;
  var userLocation = document.getElementById("edit-pro-loc").value;
  var contactAlt = document.getElementById("edit-pro-alt-ph-no").value
  var nickname = document.getElementById("edit-pro-nickname").value;
  localStorage.setItem("Phone", phone);
  localStorage.setItem("CustomerName", cname);
  localStorage.setItem("Email", email);
  localStorage.setItem("DOB", dob);
  localStorage.setItem("Location", userLocation);
  localStorage.setItem("Alt Contact", contactAlt);
  localStorage.setItem("Nickname", nickname);
}

