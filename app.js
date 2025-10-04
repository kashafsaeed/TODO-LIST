
const input = document.getElementById("taskInput"),
  taskList = document.getElementById("taskList");

function addTask() {
  if (!input.value.trim()) return;
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${input.value}
        <button onclick="editTask(this)" class="btn btn-secondary btn-sm float-end me-2">Edit</button>
        <button onclick="this.parentElement.remove()" class="btn btn-danger btn-sm float-end">Delete</button>`;
  taskList.append(li);
  input.value = "";
}
function editTask(btn) {
  input.value = btn.parentElement.firstChild.textContent.trim();
  btn.parentElement.remove();

}
function deletebtn() {
  taskList.innerHTML = "";

}
input.addEventListener("keydown", e => e.key === "Enter" && addTask());

