var input = document.querySelector(".todoInput")
var todoList = document.querySelector(".todo-list")
var buttonRemove = document.querySelector(".remove")
var btnSender = document.querySelector(".btn-sender")

const todos = [
  "Comprar novos mic",
  "Comprar soft-box",
]

function renderTodo(){
  input.innerHTML = ""

  for(lista of todos){
   
    
    var todoElement = document.createElement("li")
    var todoText   = document.createTextNode(lista)
    var linkDeleted = document.createElement("a")
    // var linkText = document.createTextNode("Excluir")
    var createImg = document.createElement("img")
    var pos = todos.indexOf(lista)
    
    createImg.setAttribute("src", "../assets/Iconly-Bulk-Delete.svg")
    todoElement.setAttribute("class", "todo-item")
    linkDeleted.setAttribute("onclick", `deletedTodo(${pos})`)
    linkDeleted.setAttribute("class", "icon-deleted")
    linkDeleted.setAttribute("href", "#")
    linkDeleted.appendChild(createImg)
    // linkDeleted.appendChild(linkText)


    todoElement.appendChild(todoText)
    todoElement.appendChild(linkDeleted)
    todoList.appendChild(todoElement)

  }
}

renderTodo()

function addTodo(){

  var inputValue = input.value
  todos.push(inputValue)

  input.value = ""

renderTodo()

}


btnSender.onclick = addTodo


function deletedTodo(pos){
  todos.splice(pos,1)
  renderTodo()
}



function Modal(){
  window.document.querySelector("#click-here").addEventListener("click", e =>{
    window.document.querySelector(".todo-area-sub").style.display = 'block'
  })
  window.document.querySelector("#close-This").addEventListener("click", e =>{
    window.document.querySelector(".todo-area-sub").style.display = 'none'
  })
}

Modal()