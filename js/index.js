$(document).ready(function () {

    $(".delivery").click(function (event) {
        $(".form1").show();
        event.preventDefault()
    })
    $(".pick").click(function (event) {
        alert("thank you our trusted customer for shopping with us.Don't forget to leave your comment on our services")

    })
    $(".addCart").click(function (event) {
        let variety = $("#pizza-variety option:selected").val();
        let size = $(" #size option:selected").val();
        let crust = $("#crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let totalNumber= $("#total").val();
        let total = 0;
        console.log(variety);

        switch (nameofpizza) {
            case nameofpizza= "pepporini":
                switch (size) {
                    case size = "large":
                        price = 800;
                        if (crust === "stuffed") {
                            total = (price * total) + 110
                            console.log(total);
                        } else if (crust === "wrapping") {
                            total = (price * total) + 140
                        } else if (crust === "cheese") {
                            total = (price * totalNumber) + 120
                        } else if (crust === "Thin crust") {
                            total = (price * total) + 120
                        };
                        break;
                        case size = "medium":
                        price = 600;
                        if (crust === "stuffed") {
                            total = (price * total) + 110
                            console.log(total);
                        } else if (crust === "wrapping") {
                            total = (price * total) + 140
                        } else if (crust === "cheese") {
                            total = (price * totalNumber) + 120
                        } else if (crust === "Thin crust") {
                            total = (price * total) + 120
                        };
                        break;
                        case size = "small":
                        price = 400;
                        if (crust === "stuffed") {
                            total = (price * total) + 110
                            console.log(total);
                        } else if (crust === "wrapping") {
                            total = (price * total) + 140
                        } else if (crust === "cheese") {
                            total = (price * totalNumber) + 120
                        } else if (crust === "Thin crust") {
                            total = (price * total) + 120
                        };
                        break;
                    }
                    break;
                        case nameofpizza= "pepporini":
                            switch (size) {
                                case size = "large":
                                    price = 800;
                                    if (crust === "stuffed") {
                                        total = (price * total) + 110
                                        console.log(total);
                                    } else if (crust === "wrapping") {
                                        total = (price * total) + 140
                                    } else if (crust === "cheese") {
                                        total = (price * totalNumber) + 120
                                    } else if (crust === "Thin crust") {
                                        total = (price * total) + 120
                                    };
                                    break;
                                    case size = "medium":
                                    price = 600;
                                    if (crust === "stuffed") {
                                        total = (price * total) + 110
                                        console.log(total);
                                    } else if (crust === "wrapping") {
                                        total = (price * total) + 140
                                    } else if (crust === "cheese") {
                                        total = (price * totalNumber) + 120
                                    } else if (crust === "Thin crust") {
                                        total = (price * total) + 120
                                    };
                                    break;
                                    case size = "small":
                                    price = 400;
                                    if (crust === "stuffed") {
                                        total = (price * total) + 110
                                        console.log(total);
                                    } else if (crust === "wrapping") {
                                        total = (price * total) + 140
                                    } else if (crust === "cheese") {
                                        total = (price * totalNumber) + 120
                                    } else if (crust === "Thin crust") {
                                        total = (price * total) + 120
                                    };
                                    break;    