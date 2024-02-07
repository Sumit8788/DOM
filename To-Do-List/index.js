// Function to create a new list item with a checkbox
function createTag(text) {
    var liTag = document.createElement("li");
    liTag.classList.add("list_item");
    var checkBoxTag = document.createElement("input");
    checkBoxTag.type = "checkbox";
    checkBoxTag.classList.add("check_box");
    liTag.textContent = text;
    liTag.append(checkBoxTag);
    return liTag;
}

// Function to show error message
function showError(message) {
    var errorMessage = document.getElementById("errormessage");
    errorMessage.textContent = message;
}

// Function to hide error message
function hideError() {
    var errorMessage = document.getElementById("errormessage");
    errorMessage.textContent = "";
}

// Event listener for the "Add To List" button
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    var inputValue = document.getElementById("in").value;
    if (inputValue.trim() !== "") {
        var liTag = createTag(inputValue);
        document.getElementById("todolist").appendChild(liTag);
        document.getElementById("in").value = "";
        var checkBox = liTag.querySelector("input[type=checkbox]");
        checkBox.addEventListener("change", function () {
            if (checkBox.checked) {
                // Move the parent <li> element to the "Completed Task" list
                liTag.removeChild(checkBox);
                liTag.parentNode.removeChild(liTag);
                document.getElementById("completedlist").appendChild(liTag);
            }
        });
        hideError();
    } else {
        showError("Please Enter A valid Task");
    }
});

// Event listener for the "Reset" button
var resetBtn = document.getElementById("resetbtn");
resetBtn.addEventListener("click", function () {
    var todoList = document.getElementById("todolist");
    var completedList = document.getElementById("completedlist");
    todoList.innerHTML = ""; // Clear the todo list
    completedList.innerHTML = ""; // Clear the completed list
});
