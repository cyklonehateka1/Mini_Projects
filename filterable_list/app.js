const searchField = document.querySelector('.search-field');
const button = document.getElementById('button');
const item = document.querySelectorAll('.collection-item');
const ul = document.getElementsByTagName('ul')

searchField.addEventListener('keyup', () => {

    const searchValue = searchField.value.toUpperCase();

    for (i = 0; i < item.length; i++) {
        let a = item[i].getElementsByTagName('a')[0]
        if (a.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            item[i].style.display = ''
        }
        else {
            item[i].style.display = 'none'
        }
    }
});

button.addEventListener('click', () => {
    const searchValue = searchField.value.toUpperCase();

    for (i = 0; i < item.length; i++) {
        let a = item[i].getElementsByTagName('a')[0]
        if (a.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            item[i].style.display = ''
        }
        else {
            item[i].style.display = 'none'
        }
    }
});