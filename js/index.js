

   $(document).ready(function () {

    $(".pick-delivery").click(function (event) {
        $(".form2").show();
        event.preventDefault()
    })
    $(".pick").click(function (event) {
        alert("thank you our trusted customer for shopping with us.Don't forget to leave your comment on our services")

    })

    $(".addCart").click(function (event) {
        let varietyName = $("#variety option:selected").val();
        let crust = $(" #crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let size = $("#size option:selected").val();
        let quantity = $("#quantity").val();
        let total = 0;

        

        

        console.log(varietyName);

        switch (varietyName) {
            case varietyName = "Pepperoni":
                switch (size) {
                    case size = "large":
                        price = 900;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                            console.log(total);
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110

                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90

                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;

                    case size = "small":
                        price = 400;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                }
                break;


            case varietyName = "Spontini":
                switch (size) {
                    case size = "large":
                        price = 900;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") + 100

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110

                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                            console.log(total);


                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;

                    case size = "small":
                        price = 400;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                }
                break;

            case varietyName = "Mexican":
                switch (size) {
                    case size = "large":
                        price = 900;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110

                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90

                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                        totalprice = total;


                    case size = "small":
                        price = 400;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                }
                break;

            case VarietyName = "Marghareti":
                switch (size) {
                    case size = "large":
                        price = 900;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110

                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90

                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;

                    case size = "small":
                        price = 400;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                }
                break;

            case varietyName = "Bianca":
                switch (size) {
                    case size = "large":
                        price = 900;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110

                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90

                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;

                    case size = "small":
                        price = 400;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                }
                break;

            case varietyName = "Mushroom":
                switch (size) {
                    case size = "large":
                        price = 900;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };

                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110

                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90

                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;

                    case size = "small":
                        price = 400;
                        if (crust === "Stuffed") {
                            total = (price * quantity) + 110
                        } else if (crust === "Wrapping") {
                            total = (price * quantity) + 90
                        } else if (crust === "Cheese") {
                            total = (price * quantity) + 100
                        };
                        break;
                }
                break;

        };
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
        
        console.log(total);
      
        let newOrder = new getPizza(varietyName, size, crust, toppings, quantity, total);
        console.log(varietyName);

        

        $("#receipt").append('<tr><td id="pizzaname">' + newOrder.varietyName + '</td><td id="pizzasize">' +
            newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatoppings">' + newOrder.toppings + '</td><td id="pizzaquantity">' + newOrder.quantity + '</td><td id="total">' + newOrder.total + '</td></tr>');

        event.preventDefault();


    });
    
    varietySelectChange = function () {
        console.log("mayonnaise")

        this.varietyName = $("#variety option:selected").val();
        console.log(this.varietyName);

    }

    sizeSelectChange = function () {
        this.size = $("#size option:selected").val();
        console.log(this.size);

        
    }

    crustSelectChange = function () {
        this.crust = $("#crust option:selected").val();
        console.log(this.crust);

        
    }

    toppingsSelectChange = function () {
        this.toppings = $("#toppings option:selected").val();
        console.log(this.crust);

        
    }

    quantitySelectChange = function () {
        this.quantity = $("#quantity").val();
        console.log(this.quantity);

        
    }
    

    function getPizza(varietyName, size, crust, toppings, quantity, totalprice) {
        this.varietyName =varietyName;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
        this.total = totalprice;

       


        $(".checkout").click(function (event) {
            let customerName = $("#customerName").val();
            let customerLocation = $("#customerLocation").val();
            let customerTel = $("#customerTel").val();
            let totalCost = totalprice + 100;
            $("#form2").toggle();
                


                $("#customerMessage").append(customerName + ' ' + "We are happy to recieve your order, your package will be delivered in an hour's time at " + customerLocation + ", Once we get you the package, you will be contacted throughu" + customerTel + " your spending will be " + totalCost + " and the delivery fee. Enjoy your pizza, Hope you come back soon.");
               
            event.preventDefault();
    
        })

    }

});