$(document).ready(function() {

//placing an order
  $("#ordering").submit(function(event) {
    event.preventDefault();
    placeOrder();
  });

  function placeOrder() {
    //getting inputs from the form
    let name = $("input#name").val();
    let size = $("#pizza-size").val();
    let crust = $("#crust-type").val();
    let toppings = $("#topping").val();
    let number = $("input#pizza-number").val();

    //prizes of crust according to size
    let crustCostAccordingToSize;
    if (crust === "Crispy" || crust === "Stuffed") {
      if (size === "Small") {
        crustCostAccordingToSize = 500;
      } else if (size === "Medium") {
        crustCostAccordingToSize = 800;
      } else if(size === "Large") {
        crustCostAccordingToSize = 1200;
      }
    } else if(crust === "Romana" || crust === "Grilled") {
      if (size === "Small") {
        crustCostAccordingToSize = 450;
      } else if(size === "Medium") {
        crustCostAccordingToSize = 750;
      } else if (size === "Large") {
        crustCostAccordingToSize = 1050;
      }
    } else if (crust === "Flatbread" || crust === "Pan-pizza" || crust === "Gluten-Free") {
      if (size === "Small") {
        crustCostAccordingToSize = 600;
      } else if(size === "Medium") {
        crustCostAccordingToSize = 850;
      } else if(size === "Large") {
        crustCostAccordingToSize = 1250;
      }
    }
  //prizes of toppings according to size
let toppingCost;
if (toppings === "Broccoli" || toppings === "Eggplant") {
  toppingCost = 200;
} else if(toppings === "Sausage" || toppings === "Mushroom") {
  toppingCost = 300;
} else if (toppings === "Capers" || toppings === "Radicchio") {
  toppingCost = 250;
}
let amount = (crustCostAccordingToSize + toppingCost);
let totalAmount = parseInt(amount * number);
alert(name + " Your total price is " + totalAmount);
}

});