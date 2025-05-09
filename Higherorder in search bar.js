let todos=[
    {id:1,Title:"HTML",Completed:true},
    {id:2,Title:"CSS", Completed:true},
    {id:3,Title:"Bootstrap", Completed:true},
    {id:4,Title:"Javascript", Completed:false}

]
const searchInput=document.getElementById("search");
const todolist=document.getElementById("todo-list");
const summary=document.getElementById("summary");

searchInput.addEventListener("input",()=>{const searchItem=searchInput.value.toLowerCase();
    const filteredTodos=todos.filter(a=>a.Title.toLowerCase().includes(searchItem));
    rendertodos(filteredTodos);
    function rendertodos(filteredTodos){
        todoliist.innerHTML="";
        filiteredtodos.forEach(todo=>)
    }
})
