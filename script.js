$(document).ready(function(){
    var OrderLocation;
    var total;
    $("#orderbutton").click(function(event){
        event.preventDefault(); 
        var MyName=$("input#name").val()
        var PizzaNumber=$("input#numorder").val()
        var MyPizza=$("#pizza").find(":selected").text()
        var MyTopping=$("#crust").find(":selected").text()
        var PizzaSize=$("#pizzasize").find(":selected").text()
        OrderLocation=$("input#location").val()
      
        const order1 = new MyFunction (MyName,PizzaNumber,MyPizza,MyTopping,PizzaSize,OrderLocation)
        console.log(order1)
  order1.TotalPrice()

    });
function MyFunction(MyName,PizzaNumber,MyPizza,MyTopping,PizzaSize,OrderLocation){
this.MyName=MyName
this.PizzaNumber=PizzaNumber
this.MyPizza=MyPizza
this.MyTopping=MyTopping
this.PizzaSize=PizzaSize
this.OrderLocation=OrderLocation

}
MyFunction.prototype.TotalPrice = function(){
  

var SizePrice;
var OrdersNumber=this.PizzaNumber;
console.log(OrdersNumber)
total=0
if(this.PizzaSize === "Small"){
    SizePrice=500
    }
    else if(this.PizzaSize === "Medium"){
            SizePrice=700
        }
        else{
                SizePrice=1000
            }
            console.log(SizePrice)
            total=SizePrice * OrdersNumber
            
            
        $("#delivery").click(function(event){
            event.preventDefault()
            OrderLocation=$("input#location").val()
            console.log(OrderLocation)
            var deliveryFee=200;
            var grandTotal;
            grandTotal=total+ deliveryFee;
    
       console.log(grandTotal);
       $(".message").append('<h3>' +" "+ " You have ordered pizza, for " + total+ " We have recieved your order and it will be delivered to you at "+OrderLocation+ ". Prepare sh. "+grandTotal +'<h3>');

    }); 
    }; 
});   

