/*
Save the reference to text-field into a variable. | <input type="text">
Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
Save the reference to paragraph for feedback | <p class="feedback"></p>

Start function addItem.

    Create list item and store output in a variable.
    
    Check if user entered the value in input text-field.
    If so:
        Use textContent property on created list-item
        and assign it with the value of the text written in the text-field

        Append list item to unordered list.

        Clear a feedback-message.

        Clear the text-field.

        Put the cursor back to text-field 
    
    End if. 
    Otherwise:
     
        Print the message nothing entered in the paragraph "feedback"

    End otherwise.

End function addItem.

Register your function addItem for click event on button.
*/
let ui = document.querySelector("#my-input");
let btn = document.querySelector("#button-input");
let feedback = document.querySelector(".feedback");
let ul = document.querySelector("#myUL");

btn.addEventListener("click", addItem);


function addItem() {
    let li = document.createElement("li");
    if (ui.value) {
        li.textContent = ui.value;
        ul.appendChild(li);
       
        feedback.textContent = "Your item was added ";
        ui.value= " ";
        ui.focus();
    }else {
	feedback.textContent = "Please add item  ";
	ui.focus();
}
}
