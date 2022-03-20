$(document).ready(function() {
  $("#ordering").submit(function(event) {
      event.preventDefault();
      placeOrder();
 $("#addorder").submit(function(event) {
      event.preventDefault();
      addOrder();
  });

  function placeOrder() { //function for placing an order
    //get inputs from form
    var name = $("input#name").val();
    var size = $("#pizza-size").val();
    var crust = $("#crust-type").val();
    var toppings = [];
    $.each($('input[name="topping"]:checked'),
        function() {
            toppings.push($(this).val());
        });
  var number = parseInt($("#pizza-number").val());
    var pizzaSizeCost; //set different prices for the different pizza flavors depending on their size
    if (size === "Small") {
          pizzaSizeCost = 300;
           } else if(size === "Medium") {
         pizzaSizeCost = 400;
           } else if(size === "Large") {
          pizzaSizeCost = 500;
          }
    var crustCost; //set prices for different crust types
       if (crust === "Crispy") {
     crustCost = 200;
    } else if (crust === "Stuffed") {
       crustCost = 220;
    } else if(crust === "Romana") {
        crustCost = 230;
    } else if (crust === "Grilled") {
        crustCost = 250;
    } else if (crust === "Flatbread") {
       crustCost = 200;
    } else if (crust === "Pan-pizza") {
        crustCost = 250;
    } else if (crust === "Gluten-Free") {
       crustCost = 300;
    }
    var checkboxes = $('input[name="topping"]:checked').length; //get number of checkboxes checked
    if (checkboxes <= 3) { //limit number of checkboxes allowed to not more than 3
        if (size === "Small") {
            var toppingsCost = checkboxes * 70;
        } else if (size === "Medium") {
            var toppingsCost = checkboxes * 100;
        } else if (size === "Large") {
            var toppingsCost = checkboxes * 130;
        }
        $("input[type='checkbox']:not(:checked)").prop({ //disable unchecked boxes
            disabled: true
        });
        $('#placeorder').prop('disabled', true); //deactivate button after order is made to prevent client from changing order once the order is placed
        var price = parseInt((pizzaSizeCost + crustCost + toppingsCost));
        var totalPrice = parseInt(price * number);
        alert(totalPrice);
    } 
    
  }

   function addOrder() {
     $("#placeorder").prop("disabled", false);
     $("input[type='checkbox']").prop({
       disabled: false
     });
     $("input[type='checkbox']").prop({
       checked: false
     });
   }
});







// $(document).ready(function() {

// //placing an order
//   $("#ordering").submit(function(event) {
//     event.preventDefault();
//     placeOrder();
//   });

//   function placeOrder() {
//     //getting inputs from the form
//     var name = $("input#name").val();
//     var size = $("#pizza-size").val();
//     var crust = $("#crust-type").val();
//     var toppings = []; // define toppings as an empty array
//     $.each($("input[name='topping']:checked"),
//     function () {
//       toppings.push($(this).val()); //for each input whose name is topping, when checked, we add it to the empty array
//     }); 
//     var number = parseInt($("#pizza-number").val());

//     //prizes according to the Pizza Size
    
//     if (size === "Small") {
//       var pizzaSizeCost = 300;
//     } else if(size === "Medium") {
//        var pizzaSizeCost = 400;
//     } else if(size === "Large") {
//        var pizzaSizeCost = 500;
//     }

//     //prizes of crust according to size
    
//     if (crust === "Crispy") {
//       var crustCost = 200;
//     } else if (crust === "Stuffed") {
//       var crustCost = 220;
//     } else if(crust === "Romana") {
//        var crustCost = 230;
//     } else if (crust === "Grilled") {
//        var crustCost = 250;
//     } else if (crust === "Flatbread") {
//       var crustCost = 200;
//     } else if (crust === "Pan-pizza") {
//        var crustCost = 250;
//     } else if (crust === "Gluten-Free") {
//        var crustCost = 300;
//     }
//   //prizes of toppings according to size
//   var checkboxes = $('input[name="topping"]:checked').length;
//   if (checkboxes <= 3) {
//     if(size === "Small") {
//       var toppingsCost = checkboxes * 150;
//     } else if (size === "Medium") {
//       var toppingsCost = checkboxes * 200;
//     } else if(size === "Large") {
//       var toppingsCost = checkboxes * 250;
//     }

//     $("input[type='checkbox']:not(:checked)").prop({
//       disabled: true  //disable unchecked boxes
//     });
//     $("#place-order").prop("disabled", true); //deactvate button after an order is made
// var amount = pizzaSizeCost + crustCost + toppingsCost;
// var totalAmount = parseInt(amount * number);
// console.log(totalAmount);
//   }

// }
//});
