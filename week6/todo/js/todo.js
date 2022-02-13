const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let userInput = input.value;
    input.value = '';
    
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox"
    const listText = document.createElement('span');
    const listButton = document.createElement('button');
    listItem.appendChild(checkbox);
    listItem.appendChild(listText);
    listText.textContent = userInput;
    listItem.appendChild(listButton);
    listButton.textContent = ' ❌';
    if (listText.textContent){
        list.appendChild(listItem);
    }
    
    listButton.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();

});

if ( document.getElementById("checkbox").checked == true) {
    console.log("checked");
 function strike(text) {
     var result = "<del>" + text + "</del>";
     return result;
   }

   listText.innerHTML = strike(listText.textContent);
}