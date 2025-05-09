var cart=[];
console.log(cart);

// Create a function to add items to the cart
function addItem(name,price,quantity){
    var item={
        name:name,price:price,quantity:quantity};
        cart.push(item);
       
    }
    addItem("pen",15,5);
    addItem("pencil",10,12);
    addItem("Notebook",25,10);
    addItem("box",50,5);
    addItem("Ruler",10,10);
    console.log(cart);

    // Create a function to view all items in the cart
    function viewcart(){
        console.log("Item in your cart:");

        console.log("--------------");
        for(var i=0;i<cart.length;i++){
            console.log((i+1)+"."+cart[i].name+"-Rs"+cart[i].price+"X"+cart[i].quantity);
        }
        console.log("------------")
    }

// Create a function to calculate total price
function calculateTotal(){
    var total=0;
    for(var i=0;i<cart.length;i++){
        total+=cart[i].price*cart[i].quantity;
    }
    return total;
}
//create a function to remove an item from the cart by name
function removeItem(itemName){
    var found=false;
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].name===itemName)
        {
            cart.splice(i,1);
            found=true;
            break;
        }
    }if(found){
        console.log(itemName+"removed from the cart");

    }else{
        console.log(itemName+"not found in the cart");
    }
}
viewcart();
console.log("Total Amount: Rs."+calculateTotal());
removeItem("pencil");
viewcart();
console.log("Total amount after removal:Rs."+calculateTotal());