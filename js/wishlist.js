window.addEventListener('DOMContentLoaded', function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const cartPage = document.querySelector(".h6")
  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")
  const wishlistContent = document.querySelector('.wishlistContent')

  cartPage.addEventListener('click', function () {
    window.location = "http://localhost:5500/html/cart.html"

  })

  userdetails.addEventListener('click', function () {
    console.log("user")
    list.style.display = "flex";

  })

  requirejs(['../service/userservice.js'], (methods) => {
    methods.get_wishlist_items().then(function (wishItems) {
        console.log(wishItems.data.result)
        let wishlist001 = wishItems.data.result;
        console.log(wishlist001)

        wishlistContent.innerHTML = wishlist001.map(function (res) {
            return `<div class="wishcont" id="${res.product_id._id}">
            <div class="imagecont" id="${res.product_id._id}"><img src="../image1/Image 11.png" width="100%" height="100%"></div>
            <div class="bookDetails" id="${res.product_id._id}">
                <div class="name01" id="${res.product_id._id}">${res.product_id.bookName}</div>
                <div class="author01" id="${res.product_id._id}">${res.product_id.author}</div>
                <div class="bookPrice" id="${res.product_id._id}">
                    <div class="bookPrice01" id="${res.product_id._id}">Rs. ${res.product_id.price}</div>
                    <div class="bookPrice02" id="${res.product_id._id}"> ${res.product_id.price}</div>
                </div> 
                <div class ="shoppingCart" id="${res.product_id._id}"><i class="material-icons" id="${res.product_id._id}">shopping_cart</i></div> 
                <div class= "delete01" id="${res.product_id._id}"><i class="material-icons" id="${res.product_id._id}">delete</i></div>
                 
            </div>
        </div>`
        }).join(' ');

      })
    })

   
  $(document).on('click', '.wishcont', function (event) {
     let ab = event.target.id

      $(document).on('click', '.delete01', function () {
          let wishlistDelete = {
              product_id: ab,
          }

          console.log(wishlistDelete)
          requirejs(['../service/userservice.js'], (methods) => {
              methods.remove_wishlist_item(wishlistDelete).then(function (response10) {
                  location.reload();
                  console.log(response10)
              })

          })
      })

      $(document).on('click', '.shoppingCart', function () {
        console.log('abc')
        //addtobag.style.display = 'none'
        //button.style.display = "flex"
    
        let data = {
          product_id: ab,
        }
        console.log(data)
    
        requirejs(['../service/userservice.js'], function (methods) {
          methods.addToBook(data).then(function (response3) {
    
                console.log(response3)
              })
    
            })
      })
  })


    
})  