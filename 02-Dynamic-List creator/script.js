const input = document.getElementById("item");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");


addBtn.addEventListener('click', () => {
    if(input.value === ""){
        alert("There is nothing to add!");
        return;
    }

    const li = document.createElement("li")
    li.innerText = input.value;
    
    input.value = "";

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    // li.append(delBtn);

    const wrapper = document.createElement("div");
    wrapper.append(li);
    wrapper.append(delBtn);
    
    list.appendChild(wrapper);

    delBtn.addEventListener('click', () => {
        wrapper.remove();
    })

    li.addEventListener('dblclick', () => {
        const editInput = document.createElement('input');

        //the ediatble part should already contain the input we've given
        editInput.innerText = li.value;

        //replace the input
        li.replaceWith(editInput);
        editInput.focus();
    })

})