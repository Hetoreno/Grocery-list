const value = document.querySelector(".value");
const submit = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const list = document.querySelector(".list");
const all = document.querySelector(".ul-cont");

submit.addEventListener("click",addingItems);
list.addEventListener("click",deleteOne);
clear.addEventListener("click",deleteAll);
//making entire list
function addingItems(event){
    const itemCont = document.createElement("div");
    itemCont.classList.add("todo");
    list.appendChild(itemCont);

    const newItem = document.createElement("li");
    newItem.classList.add('item');
    newItem.innerText = value.value;
    value.value='';
    itemCont.appendChild(newItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("dele-button");
    deleteButton.innerText = "Delete";
    itemCont.appendChild(deleteButton);

    
}

//abilty to delete one item from list
function deleteOne(event){
    const clickItem= event.target;
    console.log(clickItem);
    
    if (clickItem.classList[0] === 'dele-button'){
        const wholeList = clickItem.parentElement;
        wholeList.remove();
    }
}

//abilty to delete entire list
function deleteAll(e){

    while (all.children.length>0){
        all.removeChild(all.children[0]);
        clearStorage();
    }
}

