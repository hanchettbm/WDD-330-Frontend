const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let userInput = input.value;
    input.value = '';
    
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    const listText = document.createElement('span');
    listText.id = "unChecked";
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

    var li = document.querySelectorAll('li');
    for(var i = 0 ; i < li.length; i++){
        li[i].addEventListener('click', function(event) {
        var input = this.querySelector('input[type=checkbox]');
        var label = this.querySelector('span');
        if (input.checked){
            function strikeThrough(text) {
                return text
                  .split('')
                  .map(char => char + '\u0336')
                  .join('')
              }
              label.textContent = strikeThrough(label.textContent);
              label.id = "checked";
              
        }
        if (!input.checked){
            label.innerText = label.innerText.replace(/[\u0336]/g, '');
            label.id = "unChecked";
        }
        });
    }

});

function showChecked() {
    var list = document.getElementById("myUL1").getElementsByTagName("span");
    for (li of list) {
      var id = li.getAttribute("id");
      id = id.toString();
      if (id == "unChecked"){
          li.parentElement.style.display = "none";
      }
    }
  }

  function showUnChecked() {
    var list = document.getElementById("myUL1").getElementsByTagName("span");
    for (li of list) {
      var id = li.getAttribute("id");
      id = id.toString();
      if (id == "checked"){
          li.parentElement.style.display = "none";
      }
    }
  }

  function showAll() {
    var list = document.getElementById("myUL1").getElementsByTagName("span");
    for (li of list) {
    li.parentElement.style.display = "flex";
    }
  }


