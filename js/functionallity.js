//import { TaskItem } from "./clases";

var nodeList = document.getElementsByTagName("li");
var i;

var taskList = [];

for(i=0; i < nodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement2() {
  var inputValue = document.getElementById("task").value;
  var startDate = document.getElementById("date1").value;
  var dueDate = document.getElementById("date2").value;

  let item = new TaskItem(inputValue,startDate,dueDate);
  taskList.push(item);
  console.log(taskList);
  mostrarlista();
  
}

function mostrarlista() {
  let tareas = document.getElementById('myUL');
  while (tareas.firstChild) {
    tareas.removeChild(tareas.firstChild);
  }

  taskList.forEach((item) => {
    var li = document.createElement("li");
    var t = document.createTextNode(item.description+', '+item.start+' to '+item.due);
    li.appendChild(t);

    document.getElementById("myUL").appendChild(li);

    document.getElementById("task").value = "";
    document.getElementById("date1").value = "";
    document.getElementById("date2").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }    
  })
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var startDate = document.getElementById("date1").value;
  var dueDate = document.getElementById("date2").value;

  let item = new TaskItem(inputValue,startDate,dueDate);
  taskList.push(item);
  //console.log(taskList);
  
  var t = document.createTextNode(inputValue+', '+startDate+' to '+dueDate);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("task").value = "";
  document.getElementById("date1").value = "";
  document.getElementById("date2").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}