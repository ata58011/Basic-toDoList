const text = document.getElementById("mission");
const add = document.getElementById("addButton");

const clear = document.getElementById("clearButton");
const toDoContainer = document.getElementById("toDoContainer");

add.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = text.value;
  paragraph.classList.add("mantar");
  toDoContainer.appendChild(paragraph);
  text.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    paragraph.remove();
  });
});

clear.addEventListener("click", function () {
  toDoContainer.innerHTML = "";
});
