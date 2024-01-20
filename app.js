// let cart = document.getElementById('cart');
// let cartValue = document.getElementById('cart-value');
// let Add = document.getElementsByClassName('flex');
// let itemsAdded = [];
// let quantityOfItems = 0;

const data = [
        {
          item : "This is our pact",
          quantity : 0,
          price : 7.49
        },
        {
          item : "The famous five",
          quantity : 0,
          price : 4.59
        },
        {
          item : "Matlida",
          quantity : 0,
          price : 6.80
        },
        {
          item : "Harry Potter",
          quantity : 0,
          price : 10
        },
        {
          item : "For Young Readers",
          quantity : 0,
          price : 7.29
        },
        {
          item : "Wimpy Kid-DIY",
          quantity : 0,
          price : 4.99
        },
        {
          item : "Dart Board",
          quantity : 0,
          price : 17.49
        },
        {
          item : "Connect 4",
          quantity : 0,
          price : 19.99
        },
        {
          item : "Jenga",
          quantity : 0,
          price : 20.99
        },
        {
          item : "Monopoly",
          quantity : 0,
          price : 19.49
        },
        {
          item : "Bookmarks",
          quantity : 0,
          price : 12.49
        },
        {
          item : "Birthday card",
          quantity : 0,
          price : 19.99
        },
        {
          item : "Stuffed toys",
          quantity : 0,
          price : 15.99
        },
        {
          item : "Dream catcher drawing",
          quantity : 0,
          price : 18.49
        }
]

let cart = document.getElementById('cart');
let cartValue = document.getElementById('cart-value');
let Add = document.querySelectorAll('.space-evenly');
let itemsAdded = [];
let quantityOfItems = 0;
let total = 0;

for(let i=0; i<Add.length;i++){
    Add[i].onclick=()=>{
     quantityOfItems++
cartValue.innerHTML=quantityOfItems;
    if(data[i].quantity==0) {
       itemsAdded.push(data[i])
    }
       data[i].quantity++
  }
}

cart.onclick = () => {
    itemsAdded.forEach((a, b) => {
        console.log(`${b + 1}. Product choosed to buy is : ${a.item} Quantity ${a.quantity}`);
        total += a.quantity * a.price;
    });
    console.log(`The total price of all products is - $${~~total}`);
};