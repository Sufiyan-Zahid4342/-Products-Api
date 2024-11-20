// var input = document.querySelector("input");
// var button = document.querySelector("button");

// function greetuser() {
//     console.log(input.value);

//     input.value="";
    
// }


// button.addEventListener("mouseover", greetuser);
// console.log("hell")

// // fetch(`https://api.openweathermap.org/data/2.5/weather?id={karachi}&appid=48cac941597820d5dc65ac7570721e8e
// // `)
// //   .then((res) => res.json())
// //   .then((data) => {
// //     console.log(data); // Log the fetched data
// //   })
// //   .catch((err) => console.error('Error:', err));


// const API_KEY = '48cac941597820d5dc65ac7570721e8e'; 
//  const cityId = input.value;
//  const url=( `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`)



// fetch(url)


// .then((res) => res.json())
//   .then((data) => {
//     console.log(data); // Log the fetched data
//   })
//   .catch((err) => console.error('Error:', err));

const div=document.querySelector("div");
fetch(`https://dummyjson.com/products`)
.then(res=>res.json())
.then(data=>{
  console.log(data);
data.products.map(item=>{
div.innerHTML+=`
 <div class="card">
  <img src="${item.images}" width="100%" />
  <h2>${item.brand}</h2>
   <h4>Product : ${item.category}</h4>
        <p>${item.description}</p>
        <h5>Stocks : ${item.stock}</h5>
        <h4>Price : $${item.price}</h4>
        <button class="seeMore" onclick="moreBtn(${item.id})">See More...</button>
  
  </div>`
})
})
  function moreBtn(id) {
    window.location = "./singleProduct.html"
    localStorage.setItem("id" , id)
}
