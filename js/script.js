$(document).ready(function(){
    var form = document.getElementById('pizza-form');
    var result = document.getElementById('result');
    
    form.onsubmit = function(e) {//SUBMIT FUNCTION
      e.preventDefault();//prevents from showing input in url  
    var sizePrice=parseInt($('input:radio[name=size]:checked').val());
    var size = $('input:radio[name=size]:checked').attr("id");
    var cheesePrice=parseInt($('input:radio[name=cheese]:checked').val());
    var cheese = $('input:radio[name=cheese]:checked').attr("id"); 
    var crustPrice=parseInt($('input:radio[name=crust]:checked').val());
    var crust = $('input:radio[name=crust]:checked').attr("id");   
    var sauce = $('input:radio[name=sauce]:checked').attr("id");  
    //appends all checked meat toppings ids to allmeat arr
    var allMeat = [];
      $('input:checkbox[name=meat]:checked').each(function() {
        allMeat.push($(this).attr("id"));
      }); 
    //counts items in allmeat toppings arr and subtracts 1 (for free complimentary topping) if there is 1+topping
    var meatPrice;
      if (allMeat.length>0){
        meatPrice=allMeat.length-1;
      }else{
        meatPrice=0;
        allMeat="None";
      }
    // VEGGIE TOPPING LOGIC SAME AS MEAT TOPPING LOGIC
    var allVeggies = [];
      $('input:checkbox[name=veggies]:checked').each(function() {
        allVeggies.push($(this).attr("id"));
      }); 
    var veggiePrice;
      if (allVeggies.length>0){
        veggiePrice=allVeggies.length-1;
      }else{
        veggiePrice=0;
        allVeggies="None";
      } 
    var total = sizePrice + cheesePrice + crustPrice + veggiePrice + meatPrice;  
    
    if(!size || !cheese || !crust || !sauce){
      alert('Please complete your order');
    }else{   
      $("#pizza-form").hide();
      result.innerHTML= form.fullName.value + "<br>" + form.phoneNumber.value + "<br>" + form.address.value + "<br><br>" +  size + " Pizza &emsp; KES" + sizePrice + "00 <br>" + cheese + " Cheese &emsp; KES" + cheesePrice + "00 <br>" + crust + " Crust &emsp; KES" + crustPrice  + "00 <br>" + sauce + " Sauce &emsp; KES0 <br> Meat Toppings &emsp; KES" + meatPrice + "00 <br> (" + allMeat + ") <br> Veggie Toppings &emsp; KES" + veggiePrice + "00 <br> (" + allVeggies + ") <br> Total &emsp; KES" + total + "00";
      form.reset();//clears answers from input fields when you submit
    }
   };
});

