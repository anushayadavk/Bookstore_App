window.addEventListener('DOMContentLoaded', function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const counterMinus = document.querySelector('.c2')
  const counterPlus = document.querySelector('.c4')
  let counterDisplay = document.querySelector('.c3')
  const wishlistab = document.querySelector('#azq')
  const wishlist1 = document.querySelector('.b2')

  let counter = 1;

  counterPlus.addEventListener('click', function () {
    console.log("hi")
    counter += 1
    // if (counter > 0){ counter += 1;
        
    // }
    counterDisplay.innerHTML = counter;
    let count = {
      _id: params.id,
      quantityToBuy: counter
    }

    console.log(count);

    requirejs(['../service/userservice.js'], function (methods) {
      methods.addToCart(count).then(function (response4) {
        console.log(response4)
        
      })
    })

  })

  counterMinus.addEventListener('click', function () {
   counter -= 1
    
    counterDisplay.innerHTML = counter;
    let count = {
      _id: params.id,
      quantityToBuy: counter
    }

    console.log(count);

    requirejs(['../service/userservice'], function (methods) {
      methods.addToCart(count).then(function (response4) {
        console.log(response4)
      })
    })

  })


  console.log(params.id);
  const addBook = document.querySelector("#q33")
  const addtobag = document.querySelector("#b11")
  const wishlist = document.querySelector("#b22")
  const button = document.querySelector(".c1")
  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")
  const cartPage = document.querySelector(".h6")

  userdetails.addEventListener('click', function () {
    console.log("user")
    list.style.display = "flex";

  })

  wishlist1.addEventListener('click', function () {
    let wishlst = {
       product_id: params.id,
    }

    console.log(wishlst);

    requirejs(['../service/userservice.js'], function (methods){
        methods.wish_list(wishlst).then(function(response8){
            console.log(response8)

        })
    })

  })


  requirejs(['../service/userservice.js'], (methods) => {
    methods.getBooks().then(function (Response2) {
      console.log(Response2)
      let arr = Response2.data.result;
      let Response3 = arr.filter(function (book) {
        return book._id == params.id;
      })
      //localStorage.setItem('token',Response3.data.result)

      //   let arr = Response3.data.result;
      // let arr = Response3
      //  console.log(Response2)
      //  console.log(arr)


      addBook.innerHTML = Response3.map(function (book) {
        return `
        <div class="x3">
        <div class="d1" id=${book._id}>${book.bookName}</div>
        <div class="d2" id=${book._id}>${book.author}</div>
        <div class="ab22" >
           <div class="point" >4.5*</div>
           <div class="r1" >(20)</div>
        </div>
        <div class="ab23" >
            <div class="price1" id=${book._id} >Rs. ${book.price}</div>
             <div class="price2" >Rs. 2000</div>
        </div>
      </div>
      <div class="x4">
        <div class="d4" >Book details</div>
        <div class="d5" id=${book._id}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint neque reprehenderit inventore, ab libero rep <br>
        cupiditate voluptatem ex eum quos incidunt assumenda dolorum maxime quas, quam ea laudantium ad? <br> Quisquam!
        </div>
      </div> `

      }).join('')
    });
  })


  addtobag.addEventListener('click', function (event) {
    console.log('abc')
    addtobag.style.display = 'none'
    button.style.display = "flex"

    let data = {
      product_id: params.id,
      // quantityToBuy: counter
    }
    console.log(data)

    requirejs(['../service/userservice.js'], function (methods) {
      methods.addToBook(data).then(function (response3) {

            console.log(response3)
          })

        })

  })



      cartPage.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/cart.html"

      })

      wishlistab.addEventListener('click', function (event) {
        console.log(event.target.id)
        window.location = `http://localhost:5500/html/wishlist.html?id=${event.target.id}`;
  
      })


    })