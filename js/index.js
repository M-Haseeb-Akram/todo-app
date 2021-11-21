let checking = (element) => {
    const item = element.nextElementSibling;
    if(element.checked == true){
        item.innerHTML = item.innerText.strike();
    }
    else{
        item.innerHTML = item.innerText;
    }
};

let remove = (element) => {
    const item = element.parentElement.parentElement;
    let list = document.getElementsByClassName('items')[0];
    item.remove();
    if(list.childElementCount == 0){
        list.innerHTML = "<p>Nothing on your todo list</p>";
    } 
}

let add = (value) => {
    if(value == ""){
        document.getElementById('error').style.display='block';
        setTimeout(function(){document.getElementById('error').style.display='none';}, 3000);
    }else{
        let list = document.getElementsByClassName('items')[0];
        if(list.firstElementChild.tagName=='P'){
            list.firstElementChild.remove();
        }
        let html = `<div><div class="todo">
                    <input type="checkbox" onchange="checking(this)">
                    <span>${value}</span>
                    <i class="fa fa-trash" onclick="remove(this)"></i></div><hr /> 
                </div>`;
        
        list.innerHTML += html;
    }  
}

document.getElementById('add').addEventListener('click', function(){
    let value = document.getElementById('value').value;
    add(value);
})