$(document).ready(function(){
    $("form#order").submit(function(){
        event.preventDefault();
        var MyName=$("input#name").val()
        var PizzaNumber=$("input#numorder").val()
        var MyPizza=$("#pizza").find(":selected").text()
        var MyTopping=$("#crust").find(":selected").text()
        var PizzaSize=$("#pizzasize").find(":selected").text()
        var location=$("input#location").val()
    
        console.log(MyName)
        console.log(PizzaNumber)
        console.log(MyPizza)
        console.log(MyTopping)
        console.log(PizzaSize)
        console.log(location) 
        
        const order1 = new MyFunction (MyName,PizzaNumber,MyPizza,MyTopping)
        console.log(order1)
    })


function MyFunction(MyName,PizzaNumber,MyPizza,MyTopping,PizzaSize){
this.MyName=MyName
this.PizzaNumber=PizzaNumber
this.MyPizza=MyPizza
this.MyTopping=MyTopping
this.PizzaSize=PizzaSize


}
MyFunction.prototype.TotalPrice = function(){
var SizePrice;
var OrdersNumber;
if(this.PizzaSize === "Small"){
SizePrice=500
}
else if(this.PizzaSize === "Medium"){
    SizePrice=700
}
else{
    SizePrice=1000
}
$("form#").submit(function(){
var OrderDelivery;

});
// if(this.OrderDelivery)

// console.log("Total Price")
// }

// Pick up notes
// left at where to declare the delivery parameters 
// how to calculate with the number of order chosen
// how to write a function for the delivery submit button

}

});