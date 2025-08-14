const filtersContainer = document.getElementById("filters");
const form = document.getElementById("task-form");
const todoContainer = document.getElementById("todos-Container");

getAllTodos(); // get todos and renders it when js loads

todoContainer.addEventListener("click", async(e) => {
    const btnClass = e.target.className; // get the class of the button that was clicked
    if(btnClass != "delete" && btnClass != "status") return; // if the button is not delete or status, return

    const todoId = e.target.parentElement.id; // get the id of the todo from the parent element


    if(btnClass == "delete"){
        const res = await axios.delete(`http://localhost:4000/todo/delete/${todoId}`);

    }

    if(btnClass == "status"){
        const res = await axios.put(`http://localhost:4000/todo/update/${todoId}`);
        console.log(res.data);
    }
    getAllTodos(); // rerender the ui with the latest todos
});

async function getAllTodos(){
    const res = await axios.get("http://localhost:4000/todo/all");
    const todos = res.data.todos;
    renderTodos(todos);
}

function renderTodos(todos){
    todoContainer.innerHTML = ""; // clear the todo container before rendering new todos
    for(let todo of todos){
    const div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `<h3>${todo.task}</h3> <div id =${todo._id}>
        <button class="status">${todo.status?"Undo" : "Complete"}</button>
        <button class="delete"> delete </button>
    </div>`
    //todoContainer.innerHTML=""; //this is logically wrong
    todoContainer.prepend(div);
    }
}

form.addEventListener("submit", async(e) => {
    e.preventDefault(); // to stop page refresh on submit
    const input = form.children[0]; // get the input field
    const task = input.value; // textm that user has entered in the input field
    const res = await axios.post("http://localhost:4000/todo/create",{
        task : task // create a new todo to send to the server 
    })
    input.value = ""; // clear the input field after submitting
    getAllTodos(); // rerender the ui with the latest todos
});

async function getFilterTodos(filterName){
    let res = await axios.get("http://localhost:4000/todo/filter",{
        params:{filterName: filterName}
    })
    let todos = res.data.todos;
    renderTodos(todos);

}


filtersContainer.addEventListener("click", (e) => {
    const btnId = e.target.id;
//    console.log(btn.id);
    const allBtns = filtersContainer.children;
    if(btnId == "all"){
        getFilterTodos("all");
        e.target.className = "active";
        allBtns[1].className = "";
        allBtns[2].className = "";
    }
    else if(btnId == "active"){
         getFilterTodos("active");
       e.target.className = "active";
       allBtns[0].className = "";
       allBtns[2].className = "";
    }
    else if(btnId == "completed"){
         getFilterTodos("completed");
       e.target.className = "active";
         allBtns[0].className = "";
        allBtns[1].className = "";
    }


    

})