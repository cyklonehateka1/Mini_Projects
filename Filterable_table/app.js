const searchInput = document.getElementById('search');
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener('keyup', (event) =>{
    const inputValue = event.target.value.toLowerCase();
    rows.forEach((row) => {
        row.querySelector('td').textContent.toLowerCase().startsWith(inputValue) ? (row.style.display = "table-row") : row.style.display = "none";
    });
});