$(document).ready(function(){
    $("form#order").submit(function(){
        event.preventDefault();
        var MyName=$("input#name").val()
        var PizzaNumber=$("input#numorder").val()
        var MyPizza=$("#pizza").find(":selected").text()
        var MyTopping=$("#crust").find(":selected").text()
        console.log(MyName)
        console.log(PizzaNumber)
        console.log(MyPizza)
        console.log(MyTopping)
        const order1 = new MyFunction (MyName,PizzaNumber,MyPizza,MyTopping)
        console.log(order1)
    })


function MyFunction(MyName,PizzaNumber,MyPizza,MyTopping){
this.MyName=MyName
this.PizzaNumber=PizzaNumber
this.MyPizza=MyPizza
this.MyTopping=MyTopping

}
MyFunction.prototype.TotalPrice = function(){
console.log("Total Price")
}





});