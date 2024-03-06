
function addressValidate() {
    addressName = document.getElementById("address").value;
    var check = /^[a-z 0-9 A-Z]{20,40}$/;
    if (check.test(addressName)) {

        document.getElementById("add").innerHTML = '';
    } else {
        document.getElementById("add").innerHTML = 'Enter your valid address';
        document.getElementById("add").style.color = 'red';
    }
}

function firstNameValidate() {
    var firstName = document.getElementById("fname").value;
    var check = /^[a-zA-Z]{2,15}$/;
    if (check.test(firstName)) {

        document.getElementById("message1").innerHTML = '';
    } else {
        document.getElementById("message1").innerHTML = 'Enter your valid name';
        document.getElementById("message1").style.color = 'red';
    }
}

function lastNameValidate() {
    var firstName = document.getElementById("lname").value;
    var check = /^[a-zA-Z]{2,15}$/;
    if (check.test(firstName)) {

        document.getElementById("message2").innerHTML = '';
    } else {
        document.getElementById("message2").innerHTML = 'Enter your valid name';
        document.getElementById("message2").style.color = 'red';
    }
}

function mobileValidate() {
    var mobileName = document.getElementById("mob_no").value;
    var check = /^[6789][0-9]{9}$/;
    if (check.test(mobileName)) {
        document.getElementById("mess").innerHTML = '';
    } else {
        document.getElementById("mess").innerHTML = 'Enter your valid number';
        document.getElementById("mess").style.color = 'red';
    }
}

function validateEmail() {
    var emailCheck = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)?$/;
    if (pattern.test(emailCheck)) {
        document.getElementById("showmsg").innerHTML = " ";
    } else {
        document.getElementById("showmsg").innerHTML = "Email is not valid";
        document.getElementById("showmsg").style.color = "red";
    }
}

function cap() {
    var value = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-'];
    var final = "";
    for (var i = 0; i < 6; i++) {
        var a = value[Math.floor(Math.random() * value.length)];
        final = final + a;
    }
    document.getElementById("captcha").value = final;
}

function validCap() {
    var str1 = document.getElementById("captcha").value;
    var str2 = document.getElementById("textinput").value;
    if (str1 != "") {
        if (str1 === str2) {
            return true;
        }
        else {
            alert("Please Enter a Valid Captcha");
            return false;
        }
    }
    else {
        return false;
    }

}

function formSubmittedSuccessfully() {
    if (validCap()) {
        window.open("thanks.html", "_blank"); // Open thanks.html in a new tab
    }
}

var selectedFoodItems = []; // Array to store selected food items

function searchAndAddFood() {
    var input = document.getElementById("food_item").value;
    if (input !== "") {
        if (!selectedFoodItems.includes(input)) {
            selectedFoodItems.push(input); // Add the food item to the selected items array

            var container = document.getElementById("selected_food_container");
            var foodDiv = document.createElement("div");
            var quantity = document.createElement("input");
            var incrementButton = document.createElement("button");
            var decrementButton = document.createElement("button");
            var deleteButton = document.createElement("button");

            quantity.type = "number";
            quantity.value = "1";
            quantity.min = "1";

            incrementButton.textContent = "+";
            incrementButton.onclick = function () {
                quantity.value = parseInt(quantity.value) + 1;
            };

            decrementButton.textContent = "-";
            decrementButton.onclick = function () {
                if (parseInt(quantity.value) > 1) {
                    quantity.value = parseInt(quantity.value) - 1;
                }
            };

            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";
            deleteButton.onclick = function () {
                container.removeChild(foodDiv);
                var index = selectedFoodItems.indexOf(input);
                if (index !== -1) {
                    selectedFoodItems.splice(index, 1);
                }
            };

            foodDiv.className = "selected-food-item";
            foodDiv.innerHTML = input;
            foodDiv.appendChild(incrementButton);
            foodDiv.appendChild(quantity);
            foodDiv.appendChild(decrementButton);
            foodDiv.appendChild(deleteButton);
            container.appendChild(foodDiv);

            // Clear previous error message if exists
            var errorMessage = document.getElementById("error_message");
            if (errorMessage) {
                errorMessage.remove();
            }
        } else {
            // Show error message
            var errorMessage = document.getElementById("error_message");
            if (!errorMessage) {
                errorMessage = document.createElement("p");
                errorMessage.id = "error_message";
                errorMessage.textContent = "This food item is already added.";
                errorMessage.style.color = "red";
                var submitButtonContainer = document.getElementById("submit_button_container");
                submitButtonContainer.insertBefore(errorMessage, submitButtonContainer.firstChild);
            }
        }
    }
}