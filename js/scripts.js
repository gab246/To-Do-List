
function newItem(){
let list = $('#list');
//add a new item to the list 
let li = $('<li></li>');
let inputValue= $('#input').val();
li.append(inputValue);
}
