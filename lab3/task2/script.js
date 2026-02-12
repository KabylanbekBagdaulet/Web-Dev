let taskInput=document.querySelector('#itemInput');
let btn = document.querySelector('#addBtn');
let list = document.querySelector('#myList');


btn.addEventListener("click", function(){
    let text = taskInput.value.trim();
    if (text === ""){
        alert("Enter a task first");
        return;
    }
    
    let taskItem = document.createElement("li");
    taskItem.className = "task-item";
    

    taskItem.innerHTML = `
        <input type="checkbox" class="complete">
        <span class="task-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;


    let checkbox = taskItem.querySelector(".complete");
    checkbox.addEventListener("change", function(){
        if (checkbox.checked){
            taskItem.classList.add("done");
        } else {
            taskItem.classList.remove("done");
        }
    });


    let deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function(){
        taskItem.remove();
    });

  
    list.appendChild(taskItem);
    
    taskInput.value = "";
});