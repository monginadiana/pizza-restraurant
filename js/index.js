// $(document).ready(function () {

//     $(".delivery").click(function (event) {
//         $(".form1").show();
//         event.preventDefault()
//     })
//     $(".pick").click(function (event) {
//         alert("thank you our trusted customer for shopping with us.Don't forget to leave your comment on our services")

//     })
//     $(".addCart").click(function (event) {
//         let variety = $("#pizza-variety option:selected").val();
//         let size = $(" #size option:selected").val();
//         let crust = $("#crust option:selected").val();
//         let toppings = $("#toppings option:selected").val();
//         let totalNumber= $("#total").val();
//         let total = 0;
//         console.log(variety);

//         switch (nameofpizza) {
//             case nameofpizza= "pepporini":
//                 switch (size) {
//                     case size = "large":
//                         price = 800;
//                         if (crust === "stuffed") {
//                             total = (price * total) + 110
//                             console.log(total);
//                         } else if (crust === "wrapping") {
//                             total = (price * total) + 140
//                         } else if (crust === "cheese") {
//                             total = (price * totalNumber) + 120
//                         } else if (crust === "Thin crust") {
//                             total = (price * total) + 120
//                         };
//                         break;
//                         case size = "medium":
//                         price = 600;
//                         if (crust === "stuffed") {
//                             total = (price * total) + 110
//                             console.log(total);
//                         } else if (crust === "wrapping") {
//                             total = (price * total) + 140
//                         } else if (crust === "cheese") {
//                             total = (price * totalNumber) + 120
//                         } else if (crust === "Thin crust") {
//                             total = (price * total) + 120
//                         };
//                         break;
//                         case size = "small":
//                         price = 400;
//                         if (crust === "stuffed") {
//                             total = (price * total) + 110
//                             console.log(total);
//                         } else if (crust === "wrapping") {
//                             total = (price * total) + 140
//                         } else if (crust === "cheese") {
//                             total = (price * totalNumber) + 120
//                         } else if (crust === "Thin crust") {
//                             total = (price * total) + 120
//                         };
//                         break;
//                     }
//                     break;
//                         case nameofpizza= "pepporini":
//                             switch (size) {
//                                 case size = "large":
//                                     price = 800;
//                                     if (crust === "stuffed") {
//                                         total = (price * total) + 110
//                                         console.log(total);
//                                     } else if (crust === "wrapping") {
//                                         total = (price * total) + 140
//                                     } else if (crust === "cheese") {
//                                         total = (price * totalNumber) + 120
//                                     } else if (crust === "Thin crust") {
//                                         total = (price * total) + 120
//                                     };
//                                     break;
//                                     case size = "medium":
//                                     price = 600;
//                                     if (crust === "stuffed") {
//                                         total = (price * total) + 110
//                                         console.log(total);
//                                     } else if (crust === "wrapping") {
//                                         total = (price * total) + 140
//                                     } else if (crust === "cheese") {
//                                         total = (price * totalNumber) + 120
//                                     } else if (crust === "Thin crust") {
//                                         total = (price * total) + 120
//                                     };
//                                     break;
//                                     case size = "small":
//                                     price = 400;
//                                     if (crust === "stuffed") {
//                                         total = (price * total) + 110
//                                         console.log(total);
//                                     } else if (crust === "wrapping") {
//                                         total = (price * total) + 140
//                                     } else if (crust === "cheese") {
//                                         total = (price * totalNumber) + 120
//                                     } else if (crust === "Thin crust") {
//                                         total = (price * total) + 120
//                                     };
//                                     break;    

function getPizza(pizzaVariety, size, crust, toppings, total) {
    this.pizzaVariety = pizzaVariety;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
};
$("button.proceed").click(function (event) {
    var pizzaVariety = $("#pizzaVariety option:selected").val();
    var crust = $(" #crust option:selected").val();
    var toppings = $("#toppings option:selected").val();
    var size = $("#size option:selected").val();
    var total = 0;
});
console.log(pizzaVariety);

switch(size){
    case "0":
      price =0;
    break;
    case "large":
       price = 900;
       console.log(price);
     break;
     case "medium":
       price = 600;
       console.log("The price is "+price);
     break;
     case "small":
       price = 400;
       console.log(price);
     default:
       console.log("not selected"); 
   }
   switch(crust){
      case "0":
        crust_price = 0;
      break;
      case "Stuffed":
        crust_price = 120;
      break;
      case "Wrapping":
        crust_price = 100;
      break;
      case "Cheese":
        crust_price = 70;
      break;
      case "Thin crust":
        crust_price = 300;
      break;
      default:
        console.log("not selected"); 
    }
    switch (toppings) {
        case toppings = "pineapple":
            total = total + 150;
            break;
        case toppings = "tomato":
            total = total + 120;
            break;
        case toppings = "avocado":
            total = total + 120;
            break;
        case toppings = "beef":
            total = total + 180;
            break;
        case toppings = "chicken":
            total = total + 170;
            break;
        case toppings = "bread":
            total = total + 150;
            break;
    }
