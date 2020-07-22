const value = document.querySelector(".value");
const submit = document.querySelector(".submit");
const list = document.querySelector(".list");


submit.addEventListener("click",addingItems);
submit.addEventListener("click",addingItems);

function addingItems(event){
    const itemCont = document.createElement("div");
    itemCont.classList.add("todo");

    const newItem = document.createElement("li");
    newItem.classList.add('item');
    newItem.innerText = value.value;
    value.value='';
    itemCont.appendChild(newItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("dele-button");
    deleteButton.innerText = "Delete";
    itemCont.appendChild(deleteButton);

    list.appendChild(itemCont);
}
  
function deleteOne(){

}

function deleteAll(e){

}

