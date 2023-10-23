function addtodo() {
var input = document.getElementById("inputField")
var liElement = document.createElement("li");
var liText = document.createTextNode(input.value);
liElement.appendChild(liText);

// DELETE BUTTON
var delbtn = document.createElement("button");
var delbtnText = document.createTextNode("Delete");
delbtn.appendChild(delbtnText);
delbtn.setAttribute("onclick","deleteitem(this)");
liElement.appendChild(delbtn);
    
// EDIT BUTTON
var editbtn = document.createElement("button");
var editbtnText = document.createTextNode("Edit");
editbtn.appendChild(editbtnText);
editbtn.setAttribute("onclick","edititem(this)");
liElement.appendChild(editbtn);

var li = document.getElementById("list");
li.appendChild(liElement);
console.log(liElement);

input.value = "";
}


function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
}

function deleteitem(x){
   console.log(x.parentNode.remove());
}

// function edititem(e){
//    // var a = e.parentNode.firstChild.parentNodeValue;
//    var input = prompt("Enter your updated value :");
//    e.parentNode.firstChild.parentNodeValue = input;
// }
function edititem(e) {
   var input = prompt("Enter your updated value:");
   if (input !== null) {
       e.parentNode.firstChild.textContent = input;
   }
}
