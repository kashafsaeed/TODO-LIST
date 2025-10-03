//  function addTask() {
//       let taskInput = document.getElementById("taskInput");
//       let taskText = taskInput.value.trim();

//       if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//       }

//       let li = document.createElement("li");
//       li.innerHTML = `
//         <span onclick="toggleComplete(this)">${taskText}</span>
//         <button class="delete" onclick="deleteTask(this)">X</button>
//       `;
//       document.getElementById("taskList").appendChild(li);

//       taskInput.value = "";
//     }

//     function toggleComplete(task) {
//       task.parentElement.classList.toggle("completed");
//     }

//     function deleteTask(button) {
//       button.parentElement.remove();
//     }


// var input = document.getElementById("taskInput"),
//       list = document.getElementById("taskList");

// var addTask = () => {
//   if (!input.value.trim()) return alert("Enter task!");
//   list.innerHTML += `<li><span onclick="this.parentNode.classList.toggle('completed')">${input.value}</span> 
//                      <button onclick="this.parentNode.remove()">X</button></li>`;
//   input.value = "";
// };

//    var input = document.getElementById("taskInput"),
//           list = document.getElementById("taskList");

//     var addTask = () => {
//       if (!input.value.trim()) return;
//       list.innerHTML += `<li>
//         <span onclick="this.parentNode.classList.toggle('completed')">${input.value}</span>
//         <button onclick="this.parentNode.remove()">X</button>
//         <button onlick="editTask(this)">Edit</button>
//       </li>`;
//       input.value = "";
//     };

//     input.addEventListener("keypress", e => e.key === "Enter" && addTask());


//   const input = document.getElementById("taskInput"),
//           list = document.getElementById("taskList");

//     const addTask = () => {
//       if (!input.value.trim()) return;
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <span>${input.value}</span>
//         <button onclick="editTask(this)">✏</button>
//         <button onclick="this.parentNode.remove()">❌</button>
//       `;
//       li.querySelector("span").onclick = e => li.classList.toggle("completed");
//       list.appendChild(li);
//       input.value = "";
//     };

//     const editTask = (btn) => {
//       let span = btn.parentNode.querySelector("span");
//       let newText = prompt("Edit your task:", span.textContent);
//       if (newText) span.textContent = newText;
//     };

//     input.addEventListener("keypress", e => e.key === "Enter" && addTask());




    //    const input=document.getElementById("taskInput"),
    //       list=document.getElementById("taskList");

    // const addTask=()=>{ 
    //   if(!input.value.trim()) return;
    //   list.innerHTML+=`<li>
    //     <span onclick="this.classList.toggle('completed')">${input.value}</span>
    //     <button onclick="editTask(this)">✏</button>
    //     <button onclick="this.parentNode.remove()">❌</button>
    //   </li>`;
    //   input.value="";
    // };

    // const editTask=btn=>{
    //   let li=btn.parentNode,span=li.querySelector("span");
    //   li.innerHTML=`<input value="${span.textContent}"><button onclick="saveTask(this)">✅</button>`;
    // };

    // const saveTask=btn=>{
    //   let li=btn.parentNode,box=li.querySelector("input");
    //   li.innerHTML=`<span onclick="this.classList.toggle('completed')">${box.value}</span>
    //     <button onclick="editTask(this)">✏</button>
    //     <button onclick="this.parentNode.remove()">❌</button>`;
    // };

    // input.addEventListener("keypress",e=>e.key==="Enter"&&addTask());


    function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `${input.value} 
    <button onclick="editTask(this)" class="btn btn-secondary btn-sm float-end me-2">Edit</button>;
    <button onclick="this.parentElement.remove()" class="btn btn-danger btn-sm float-end">Delete</button>`;
  
  
  document.getElementById("taskList").appendChild(li);
  input.value = "";
} 
  document.getElementById("taskInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") addTask();
});

  
