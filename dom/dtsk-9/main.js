var form=document.getElementById('addForm')
var itemlist=document.getElementById('items');

//FORM SUBMIT EVENT
form.addEventListener('submit',additem)
//delete item
itemlist.addEventListener('click',removeitem)
//ADD ITEM
function additem(e)
{
  e.preventDefault();
  //get imput value
  var newitem=document.getElementById('item').value;
  var descriptons=document.getElementById('descripton').value;
  //create new li element
  var li =document.createElement('li');
  // add class
  li.className="list-group-item";
  //add text node with imput value
  li.appendChild(document.createTextNode(newitem));
  li.appendChild(document.createTextNode(descriptons))
  var editbtn=document.createElement('button')
  //add class
  editbtn.className="btn btn-primary btn-sm float-md-right "
  
  //add text 
  editbtn.appendChild(document.createTextNode('edit'))
  li.appendChild(editbtn)

  //add delete buttin
  var deletebtn=document.createElement('button');
  //add class 
  deletebtn.className="btn btn-danger btn-sm float-right delete"
  //add text
  deletebtn.appendChild(document.createTextNode('X'));
  //add delete button to li
  li.appendChild(deletebtn)
  //appended li to item list
  itemlist.appendChild(li)

}

function removeitem(e)
{
   if(e.target.classList.contains("delete"))
   { console.log(1)
    if(confirm('Are you sure?'))
    {
    var li=e.target.parentElement
    itemlist.removeChild(li)
    }
   }
}

  
let filter=document.getElementById('filter')
filter.addEventListener('keyup',filterItems)
function filterItems(e){
    let text=e.target.value.toLowerCase();
    //get li
    var items=itemlist.getElementsByTagName('li')
    
    //conver to arry
    Array.from(items).forEach(function(item){
        var itemname = item.firstChild.textContent;
        var descriptionname=item.childNodes[1].textContent;
       if(itemname.toLowerCase().indexOf(text) != -1)
       {
        item.style.display='block'
       }
       else if(descriptionname.toLowerCase().indexOf(text) != -1)
       {
        item.style.display='block'
       }
       else{
        item.style.display='none'
       }
    });
    
}