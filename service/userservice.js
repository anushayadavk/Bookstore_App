define([''], function () {

      const config = {
          headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token")
          },
      };


      const headerconfig = { 
        headers: {  
        'accept': 'application/json',
        'x-access-token': localStorage.getItem('token'),
        }
    }
    var methods = {};
    methods.signup = async function (obj) {
        let response = await axios.post('https://new-bookstore-backend.herokuapp.com/bookstore_user/registration', obj)
        return response;
    }
    methods.login = async function (obj1) {
        console.log("a1b1", obj1)
        let response1 = await axios.post('https://new-bookstore-backend.herokuapp.com/bookstore_user/login', obj1)
        return response1;
    }
    methods.getBooks= async function () {
        let Response2 = await axios.get('https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book', config)
        return Response2;
    }
    
    methods.addToBook = async function (data) {
        let response3 = await axios.post(`https://new-bookstore-backend.herokuapp.com/bookstore_user/add_cart_item/${data.product_id}`, data, headerconfig);
        return response3;
    }

    methods.addToCart = async function(count){
        let response4 = await axios.put(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${count._id}`,count, headerconfig);
        return response4;
    }

    methods.cartItems = async function () {
        let response5 = await axios.get('https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items',  headerconfig);
        return response5;
    }

    methods.cartRemov = async function(removeBok){
        let response6 = await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_cart_item/${removeBok.product_id}`, headerconfig)
        return response6;
    }

    methods.useredit = async function(editt){
        let response7 = await axios.put('https://new-bookstore-backend.herokuapp.com/bookstore_user/edit_user/', editt, headerconfig);
        return response7;
    }
    
    methods.wish_list = async function(wishlst){
        let response8 = await axios.post(`https://new-bookstore-backend.herokuapp.com/bookstore_user/add_wish_list/${wishlst.product_id}`, wishlst, headerconfig);
        return response8;
    }

    methods.get_wishlist_items = async function (){
        let response9 = await axios.get('https://new-bookstore-backend.herokuapp.com/bookstore_user/get_wishlist_items', headerconfig)
        return response9;
    }

    methods.remove_wishlist_item = async function (wishlistDelete){
        let response10 = await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_wishlist_item/${wishlistDelete.product_id}`, headerconfig)
        return response10;
    }

    return methods;

})



// https://backend-bookstore.herokuapp.com/bookstore_user/login
// https://backend-bookstore.herokuapp.com/bookstore_user/registration


// https://backend-bookstore.herokuapp.com/bookstore_user/login
// https://backend-bookstore.herokuapp.com/bookstore_user/registration
//  let header = {
//             headers: {
//                 'token': localStorage.getItem('token'),
//             }
//         }
//         axios.get('https://backend-bookstore.herokuapp.com/bookstore_user/get/book',header).then(resp=> {
//             console.log(resp) 
// Shravan K V S9:12 AM
//  let header = {
//             headers: {
//                 'token': localStorage.getItem('token'),
//             }
//         }
//         axios.post(`https://backend-bookstore.herokuapp.com/bookstore_user/add_cart_item/${productID}`,null,header).then(resp => {
//             console.log(resp)
//         })
//     })
//  let header = {
//             headers: {
//                 'token': localStorage.getItem('token'),
//             }
//         }
//         axios.get(`https://backend-bookstore.herokuapp.com/bookstore_user/get_cart_items`, header).then(resp => {
//            resolve(resp.data.result)
//         })
//     })
//  let header = {
//             headers: {
//                 'token': localStorage.getItem('token'),
//             }
//         }
//         axios.put(`https://backend-bookstore.herokuapp.com/bookstore_user/cart_item_quantity/${productID}`,obj,header).then(resp => {
//             console.log(resp); resolve(resp)
//         })
//     })
// return new Promise((resolve,reject)=> {
//         let header = {
//             headers: {
//                 'token': localStorage.getItem('token'),
//             }
//         }
//         axios.post('https://backend-bookstore.herokuapp.com/bookstore_user/add/order', obj,header).then(resp => {
//             console.log(resp); resolve(resp)
//         })
       
//     })
// Shravan K V S9:14 AM
//  return new Promise((resolve,reject)=> {
//         let header = {
//             headers: {
//                 'token': localStorage.getItem('token'),
//             }
//         }
//         axios.delete(`https://backend-bookstore.herokuapp.com/bookstore_user/remove_cart_item/${cartID}`,header).then(resp => {
//             console.log(resp); resolve(resp)
//         })
//     })
    