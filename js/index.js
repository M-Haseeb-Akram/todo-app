let array_of_items = [];

if(localStorage["items"]){
    document.getElementsByClassName('items')[0].firstElementChild.remove();
    let local_data = JSON.parse(localStorage["items"]);
    array_of_items = local_data.concat(array_of_items); 
    for (let i=0; i < local_data.length; i++){
        document.getElementsByClassName('items')[0].innerHTML += local_data[i];
    }
    
} 
let checking_items = element => {
    const item = element.nextElementSibling;
    if(element.checked === true){
        element.setAttribute('checked', true);
        item.style.textDecoration ='line-through';
    }
    else{
        item.style.textDecoration ='none';
    }
};

let remove = element => {
    const list = document.getElementsByClassName('items')[0];
    const item = element.parentElement.parentElement; 
    const index = Array.from(item.parentNode.children).indexOf(item)
    item.remove();  
    if (index > -1) { 
        array_of_items.splice(index, 1);
        localStorage["items"] = JSON.stringify(array_of_items);
    }
    if(list.childElementCount == 0){
        list.innerHTML = "<p>Nothing on your todo list</p>";
    } 
}

let add = value => {
    if(!value){
        document.getElementById('error').style.display='block';
        setTimeout(() => {document.getElementById('error').style.display='none';}, 3000);
    }else{
        let list = document.getElementsByClassName('items')[0];
        if(list.firstElementChild.tagName=='P'){
            list.firstElementChild.remove();
        }
        let html = `<div><div class="todo">
                    <input type="checkbox" onchange="checking_items(this)">
                    <span>${value}</span>
                    <i class="fa fa-trash" onclick="remove(this)"></i></div><hr /> 
                </div>`;
        array_of_items.push(html); 
        localStorage["items"] = JSON.stringify(array_of_items);
        list.innerHTML += html;
    }  
    document.getElementById('value').value = "";
}

document.getElementById('add').addEventListener('click', event => {
    let value = document.getElementById('value').value;
    add(value);
});

document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        let value = document.getElementById('value').value;
        add(value);
    }
});
