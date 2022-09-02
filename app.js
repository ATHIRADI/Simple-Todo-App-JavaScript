const input = document.getElementById("item");
const submit = document.getElementById("submit");
const addForm = document.getElementById("addForm");

submit.addEventListener("click", () => {
  const ul = document.createElement("ul");
  const list = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  if (input.value.length !== 0) {
    addForm.appendChild(ul).className =
      "list-unstyled list-unstyled w-100 bg-success rounded-2  d-flex flex-column  mb-2 text-white";
    ul.appendChild(list).className = "p-3 mb-1  rounded-2";
    ul.appendChild(button).className = "btn btn-danger";
    list.innerHTML = `${input.value}`;
    input.value = "";
    button.onclick = (e) => {
      e.preventDefault()
      ul.removeChild(list)
      ul.removeChild(button)
    }
  }
});
