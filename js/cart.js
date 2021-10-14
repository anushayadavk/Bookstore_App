window.addEventListener('DOMContentLoaded', function(){ 

  const urlSearchParams = new URLSearchParams(window.location.search);
//   const params = Object.fromEntries(urlSearchParams.entries());

  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")

  const placeorder = document.querySelector('.z11')
  const adress = document.querySelector('.z14')
  const customerDetails = document.querySelector('.CustomerDetails')
  const placeOrderBtn = document.querySelector('.z11')

  const cart = document.querySelector('.z2')
  const continuee = document.querySelector('.continue11')

  const inAddress = document.querySelector('.inAddress')
  const inCity = document.querySelector('.inCity')
  const inState = document.querySelector('.inState')

  const OrderSum = document.querySelector('.ordersum')
  const OrderSumm = document.querySelector('.ordersum0')

  const counterMinus = document.querySelector('.c2')
  const counterPlus = document.querySelector('.c4')
  let counterDisplay = document.querySelector('.c3')

  const crt = document.querySelector('.orderlists')
  const checkoutbtn1 = document.querySelector('.checkoutbtn1')

  const wishlistab = document.querySelector('.wishlist')


   let counter = 1;

   continuee.addEventListener('click', function () {
        OrderSum.style.display = 'none';
        OrderSumm.style.display = 'flex';
   
    })
   

    userdetails.addEventListener('click', function () {
      list.style.display = "flex";
    })

    placeorder.addEventListener('click', function () {
        adress.style.display = "none";
        customerDetails.style.display = "flex";
        placeOrderBtn.style.display = "none";
    })   

     let cart01 = [];
     let cartid;
     let removeBook = "";
     
    $(document).on('click', '.counter-plus', function (event) {
      let cartid = event.target.id
     counter += 1;
    //   if (counter > 0){ counter += 1;
        
    //   }


      $('.counter-display').html(counter);

      let count = {
          _id: cartid,
          quantityToBuy: counter,
      }

      console.log(count);

      requirejs(['../service/userservice.js'], function (methods) {
          methods.addToCart(count).then(function (response4) {
              console.log(response4)
              //location.reload();

          })
      })


  });

  $(document).on('click', '.counter-minus', function (event) {
      cartid = event.target.id
         counter -= 1;

        //  if (counter == 0){ 
        //     return counter;
        // }
        // else if(counter > 0){
        //     counter -= 1;
        // }
  
      $('.counter-display').html(counter);
      let count = {
          _id: cartid,
          quantityToBuy: counter,
      }

      console.log(count);

      requirejs(['../service/userservice.js'], function (methods) {
          methods.addToCart(count).then(function (response4) {
              console.log(response4)
            //   location.reload();

          })
      })


  });



    
    requirejs(['../service/userservice.js'], (methods) => {
      methods.cartItems().then(function (items) {
          console.log(items.data.result)
          cart01 = items.data.result;
          cart.innerHTML = cart01.map(function (cart00) {
              return `<div class="book1" id="${cart00._id}">
                  <div class="book2" id="${cart00._id}"><img src="/image1/Image 11.png" width="100%" height="100%" id="${cart00._id}"></div>
                  <div class="detail1" id="${cart00._id}"><div class="book3" id="bookName">${cart00.product_id.bookName}</div>
                      <div class="author1" id="author">${cart00.product_id.author}</div>
                      <div class="price1" id="${cart00._id}">
                          <div class="price11" id="${cart00._id}">Rs. ${cart00.product_id.price}</div>
                          <div class="original" id="${cart00._id}"> ${cart00.product_id.price}</div>
                      </div> 
                      <div class="counter11" id="${cart00._id}">
                      <button class="counter-minus" id="${cart00._id}">-</button>
                      <div class="counter-display" id="${cart00._id}">${cart00.quantityToBuy}</div>
                      
                      <button class="counter-plus" id="${cart00._id}">+</button>
                      
                      <div class="remove1" id="${cart00._id}">Remove</div>
                    </div>
                 </div>
              </div>`
          }).join(' ');

      })
  })


  $(document).on('click', '.book1', function (event) {
        removeBook = event.target.id
        console.log(removeBook)

        $(document).on('click', '.remove1', function () {
            console.log("hello")
            let removeBok = {
                product_id: removeBook,
            }

            console.log(removeBok)
            requirejs(['../service/userservice.js'], (methods) => {
                methods.cartRemov(removeBok).then(function (response6) {
                    location.reload();
                    console.log(response6)

                })
            })
        })



    })

    let city11;
    let state12;
    let address13;
    let ab = "Home";


    inState.addEventListener('change', function () {
        state12 = inState.value;
    })

    inAddress.addEventListener('change', function () {
        address13 = inAddress.value;
    })

    inCity.addEventListener('change', function () {
        city11 = inCity.value
    })

    continuee.addEventListener('click', function () {

        let editt = {
            addressType: ab,
            fullAddress: address13,
            city: city11,
            state: state12,
        }

        console.log(editt);

        requirejs(['../service/userservice.js'], (methods) => {
            methods.useredit(editt).then(function (response7) {
                console.log(response7)
                console.log(response7.status)

                if(response7.status === 200){
                    continuee.style.display = 'none';

                }

            })
        });

    })
    let cartBookOrders = []; 

    continuee.addEventListener('click', function () {
        requirejs(['../service/userservice.js'], (methods) => {
            methods.cartItems().then(function (abc) {
                console.log(abc.data.result)
                console.log(abc.data.result[0]._id)
                cartBookOrders = abc.data.result;

                console.log(cartBookOrders)

                crt.innerHTML = cartBookOrders.map(function (orderlst) {
                    return `<div class="listBook"> <div class="bookListOrders">
                    <div class="image001"><img src="/image1/Image 11.png" width="100%" height="100%" id="${orderlst._id}"></div>
                    <div class="details001">
                        <div class="orderName0">${orderlst.product_id.bookName}</div>
                        <div class="orderAuthor">${orderlst.product_id.author} </div>
                        <div class= "priceList"><div class="priceList1">Rs. ${orderlst.product_id.price}</div>
                        <div class="priceList2">${orderlst.product_id.price}</div>
                        </div>
                    </div>
                </div>
                </div>`
                })

            })

            
        })
    })
    
    checkoutbtn1.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/orderplaced.html"

    })

    wishlistab.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/wishlist.html";
  
      })
    

})