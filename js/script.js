//* JavaScript code
 function loadSearchData() {
    // Data to be used in the searchbar
let animals = [
        'Cat',
        'Dog',
        'Elephant',
        'Fish',
        'Gorilla',
        'Monkey',
        'Turtle',
        'Whale',
        'Aligator',
        'Donkey',
        'Horse',
    ];
    
// Get the HTML element of the list
let list = document.getElementById('list');
// Add each data item as an <a> tag
animals.forEach((animal)=>{
let a = document.createElement("a");
a.innerText = animal;
a.classList.add("listItem");
list.appendChild(a);
})
    }

 function search() {
// search functionality goes here
let listContainer = document.getElementById('list');
let listItems = document.getElementsByClassName('listItem');

let input = document.getElementById('input').value
input = input.toLowerCase(); 

let noResults = true;
for (i = 0; i < listItems.length; i++) { 
if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
listItems[i].style.display="none";
continue;
}
else {
listItems[i].style.display="flex";
noResults = false; 
listContainer.style.display = noResults ? "none" : "block";
}
}
 }

