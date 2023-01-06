
function newItem(){
let list = $('#list');
//add a new item to the list 
let li = $('<li></li>');
let inputValue= $('#input').val();
li.append(inputValue);

if(inputValue === ''){
    alert("Please write a list item!");
} else{
    $('#list').append(li);
}



  //crossing out item from list
function crossOut(){
 li.toggleClass("strike");
}
//cross out on click
li.on("dblclick", function crossOut(){
li.toggleClass('strike');
});
  //delete item button 
let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode('x'));
  li.append(crossOutButton);

 //delete on click
crossOutButton.on("click", deleteItem);
function deleteItem(){
    li.addClass("delete");
};
 //to change order of items
 list.sortable();
};
