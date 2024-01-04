let todo = document.querySelector(".elements");
let label = document.querySelector("#input_label");
let add_task = document.querySelector("#add-task");

add_task.addEventListener("click",function(){
    let task = document.createElement("div");
    task.classList.add('task');

    let li = document.createElement("li");
    li.innerText = `${label.value}`;

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checkTask');

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");

    if(label.value==="")
    {
        alert("Enter a Task");
    }

    else
    {
        task.appendChild(li);
        task.appendChild(checkButton);
        task.appendChild(deleteButton);
        todo.appendChild(task);
    }

    label.value="";

    checkButton.addEventListener('click',function(){
      
            checkButton.parentElement.style.textDecoration="line-through";
        
    });

    deleteButton.addEventListener("click",function(){
        deleteButton.parentElement.remove();
    });
  

    
});

