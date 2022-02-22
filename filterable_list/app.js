const filterInput = document.getElementById('filterInput');
const ul = document.getElementById('name');

// This gets the DOM elements into an array
const li = ul.querySelectorAll('li.collection-item')

// Function for the callback value parameter
let filterNames = () => {
    
    // getting the value of the input
    let filterValue = filterInput.value.toUpperCase();

    // loop through collection-items lis
    for (let i = 0; i < li.length; i++) {

        // getting all the a elements in accordance with the iteration
        let a = li[i].getElementsByTagName('a')[0];

        // if a character of the value of 'a' natches the input charaters
        // ">" -1 indicates a minimum of 1 match
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }

    }
}
filterNames()

filterInput.addEventListener('keyup', filterNames);

