// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("li");
let i;
for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("SPAN");
  let cross = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cross);
  myNodeList[i].appendChild(span);
}
// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j;
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
// Create a new list item when clicking on the "Add" button

function add() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue == "") {
    alert("Please Write Something");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
//  completed my 2nd project
