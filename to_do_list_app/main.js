// Getting DOM elements and assigning them to variabless
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    // creates a new paragraph when button is clicked
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    paragraph.classList.add('Paragraph-styling');
    inputField.value = ""

    // appending paragraph to to-do container
    toDoContainer.appendChild(paragraph);

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = 'red';
    });
    
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    });
});