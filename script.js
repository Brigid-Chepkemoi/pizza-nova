$(document).ready(function(){
    $("form#order").submit(function(){
        event.preventDefault();
        var MyName=$("input#name").val()
        var PizzaNumber=$("input#numorder").val()
        var MyPizza=$("#pizza").find(":selected").text()
        var MyTopping=$("#crust").find(":selected").text()
        var PizzaSize=$("#pizzasize").find(":selected").text()
        console.log(MyName)
        console.log(PizzaNumber)
        console.log(MyPizza)
        console.log(MyTopping)
        console.log(PizzaSize)
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
if(this.PizzaSize === "Small"){
SizePrice=500
}
else if(this.PizzaSize === "Medium"){
    SizePrice=700
}
else{
    SizePrice=1000
}


console.log("Total Price")
}





});