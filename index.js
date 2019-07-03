function addTodo(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = document.getElementById("item").value;
  const ele = document.querySelector("u1");
  ele.appendChild(item);
}

document.querySelector("form").addEventListener("submit", addTodo);
