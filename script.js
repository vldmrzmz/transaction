function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    
    var totalPrice = pricePerDroid * orderedQuantity;
    console.log("Total price:" + totalPrice);
    var message;
    if(customerCredits >= totalPrice) {
        customerCredits -= pricePerDroid * orderedQuantity;
        message="You ordered " + orderedQuantity + " droids, you have " + customerCredits + " credits left";
        console.log(message);
    }
    else {
        message = "Insufficient funds!";
        console.log(message);
        return 0;
    }
    
}

var price = 100;
var balance = Math.floor(Math.random() * 1001);
alert("Price for 1 drone = " + price);
alert("Your balance = " + balance);
var quantity = prompt("How much do you want to order?");
makeTransaction(price, quantity, balance    );

