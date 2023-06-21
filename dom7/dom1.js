//TAVERSING DOM
var itemlist=document.querySelector('#items')
//parentnode
/*console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor='#f4f4f4'
console.log(itemlist.parentNode.parentNode.parentNode)*/
//parent element
console.log(itemlist.parentElement)
itemlist.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemlist.parentElement.parentElement.parentElement)
//CHILDNODE
//console.log(itemlist.childNodes)
console.log(itemlist.children)
itemlist.children[1].style.backgroundColor='yellow'
//FIRSTCHILD
console.log(itemlist.firstChild)
itemlist.firstElementChild.textContent="hellow1"
//lastchild
console.log(itemlist.lastChild)
itemlist.lastElementChild.textContent="hellow4"
// next sibling
console.log(itemlist.nextSibling)
//next elementsabling
console.log(itemlist.nextElementSibling)

//previous sabilings
console.log(itemlist.previousSibling)

//previouselementsabilings

console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color='green'

//createlement
var newDiv=document.createElement('div')
//add class id atributes
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','hellow Div')

//create text node
var newDivtext=document.createTextNode('HELLo')
//add text to div
newDiv.appendChild(newDivtext)


console.log(newDiv)
let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1)
var newDiv1=document.createElement('div')
newDiv1.className='hello2'
newDiv1.id='hello2'
newDiv1.setAttribute('title','hellow Div')
var newDiv1text=document.createTextNode('HELLo')
newDiv1.appendChild(newDiv1text)
console.log(newDiv1)


let items=document.querySelector("div .list-group");
console.log(items)

let l1=document.querySelector('ul .list-group-item')
console.log(l1)
items.insertBefore(newDiv1,l1)




