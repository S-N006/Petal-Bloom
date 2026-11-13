
function addToCart(flowerName, price) {
    var total = Number(localStorage.getItem("total")) || 0;
    var flowers = localStorage.getItem("flowers") || "";

    total = total + price;

    flowers = flowers + flowerName + " - " + price +
        " SAR <button onclick=\"removeFlower('" +
        flowerName + "', " + price +
        ")\">Remove</button><br>";

    localStorage.setItem("total", total);
    localStorage.setItem("flowers", flowers);

    document.getElementById("cart_message").innerHTML =
        flowerName + " added to cart!";
}

function showCart() {
    var flowers = localStorage.getItem("flowers") || "";
    var cartTotal = localStorage.getItem("total") || 0;

    if (flowers == "") {
        document.getElementById("cart_items").innerHTML =
            "Your cart is empty.";
    } else {
        document.getElementById("cart_items").innerHTML = flowers;
    }

    document.getElementById("total").innerHTML =
        "Total: " + cartTotal + " SAR";
}

function removeFlower(flowerName, price) {
    var flowers = localStorage.getItem("flowers") || "";
    var total = Number(localStorage.getItem("total")) || 0;

    var flower = flowerName + " - " + price +
        " SAR <button onclick=\"removeFlower('" +
        flowerName + "', " + price +
        ")\">Remove</button><br>";

    flowers = flowers.replace(flower, "");
    total = total - price;

    localStorage.setItem("flowers", flowers);
    localStorage.setItem("total", total);

    showCart();
}

function checkForm() {
    var name = document.getElementById("id").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Phone").value;

    if (name == "" || email == "" || phone == "") {
        document.getElementById("form_message").innerHTML =
            "Please fill in all fields.";
    } else {
        document.getElementById("form_message").innerHTML =
            "Thank you! Your message has been received.";
    }

    return false;
}

function checkout() {
    var total = Number(localStorage.getItem("total")) || 0;

    if (total == 0) {
        document.getElementById("checkout_message").innerHTML =
            "Your cart is empty!";
    } else {
        document.getElementById("checkout_message").innerHTML =
            "Thank you for shopping at Petal & Bloom! Your order has been placed.";

        localStorage.removeItem("flowers");
        localStorage.removeItem("total");

        showCart();
    }
}




