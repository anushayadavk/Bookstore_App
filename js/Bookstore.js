window.addEventListener('DOMContentLoaded', function(){ 
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const bookDetails = document.getElementById("p22")
    const userdetails = document.querySelector(".user")
    const list = document.querySelector(".hh7")
    const wishlistab = document.querySelector('.wishlist')
    const cartPage = document.querySelector(".h6")
    
    userdetails.addEventListener('click', function () {
      console.log("user")
      list.style.display = "flex";

  })
    
    

    requirejs(['../service/userservice.js'], (methods)=>{
        methods.getBooks().then(function (Response2){
          console.log(Response2)
          //localStorage.setItem('token',getResponse.data.result)

          let array = Response2.data.result;
         console.log(Response2)
         console.log(array)

         

         bookDetails.innerHTML = array.map(function (book){
             return `<div class="details" id=${book._id}>
             <div class="img11" id=${book._id}><div class="imgbook" id=${book._id}></div></div>
             <div class="n0">
             <div class="n1" id=${book._id} >${book.bookName}</div>
             <div class="ab1" id=${book._id}>${book.author}</div>
             <div class="ab22" id=${book._id}>
             <div class="point" id=${book._id}>4.5*</div>
             <div class="r1" id=${book._id}>(20)</div>
             </div>
             <div class="price1" id=${book._id}>Rs. ${book.price}</div>
             </div>
             </div>`;
         }).join('')
         })
         
        

    });

    

    $(document).on('click', '.details', function (event) {
        console.log(event.target.id)
        
        
        window.location =`http://localhost:5500/html/addbook.html?id=${event.target.id}`
      })

      wishlistab.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/wishlist.html";
  
      })

      cartPage.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/cart.html"

      })



})