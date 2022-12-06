//WRITE YOUR CODE BELOW
var customerOrder = {
    name : "drink",
    numSugars : 2,
    ready : true
}

console.log(customerOrder.name);
console.log(customerOrder.numSugars);
if (customerOrder.ready) {
    console.log("Ready for pickup");
} else {
    console.log("Still in order queue");
}