console.log("i love you Jesus");
let form = document.getElementById("my-form");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#nav');

menu.addEventListener("click", function() {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-bar');
  console.log("i love you Jesus");
})

window.onscroll =() => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-bar');
}


 async function handleSubmit(event) { 
 event.preventDefault();
  var status = document.getElementById("status"); 
  var data = new FormData(event.target); 
  fetch(event.target.action, {
   method: form.method, 
   body: data, 
   headers: { 
   'Accept': 'application/json'
 } }).then(response => { if (response.ok) { 
 form.reset()
 status.classList.add("success")
  status.innerHTML = "Thanks you for Petronizing. Your order is on its way"; 
  } else {
   response.json().then(data => { 
   if (Object.hasOwn(data, 'errors')) {
    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else { 
    status.innerHTML = "Oops! There was a problem with your order please try again" 
    } }) } }).catch(error => { 
    form.reset()
     status.classList.add("error")
      status.innerHTML = "Oops! There was a problem with your order please try again" 
     }); } 
     form.addEventListener("submit", handleSubmit)