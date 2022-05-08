'strict mode'


function SaveItem() {
    let item = document.forms.ShoppingList.item.value;
    let data = document.forms.ShoppingList.data.value;
    localStorage.setItem(item, data);
    ShowAll();
}

function ModifyItem() {
    let item = document.forms.ShoppingList.item.value;
    document.forms.ShoppingList.data.value = localStorage.getItem(item);
    localStorage.getItem(item);
    ShowAll();
}

function RemoveItem() {
    let item = document.forms.ShoppingList.item.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(item);
    localStorage.removeItem(item);
    ShowAll();
}

function ClearAll() {
    localStorage.clear();
    ShowAll();
}

function ShowAll() {
    if (CheckBrowser()) {
        let key = "";
        let list = "";
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += '<tr><td>' + key + '</td>\n<td>' + localStorage.getItem(key) + '</td></tr>\n';
        }
        document.getElementById('list').innerHTML = list
    } else {
        alert('Cannot store shopping list. Your browser does not contain local storage')
    }
}

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        //we can use local storage
        console.log('Local Storage Works');
        return true;
    } else {
        return false
    }
}

