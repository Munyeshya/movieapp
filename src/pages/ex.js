const item = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
]

const cheapProducts = item.filter(item => item.price < 50);
console.log("Cheap Products:", cheapProducts);

const expensiveProducts = item.filter(item => item.price > 300);
console.log("Expensive Products:", expensiveProducts);

const totalPrice = item.reduce((acc, item) => acc + item.price, 0);
console.log("Total Price of All Products Combined:", totalPrice);

const totalPriceAbove10 = item.filter(item => item.price >= 10)
    .reduce((acc, item) => acc + item.price, 0);
console.log("Total Price of Products Above $10:", totalPriceAbove10);


