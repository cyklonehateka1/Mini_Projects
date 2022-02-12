// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    names = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
const showTime = () => {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12 hour format
hour = hour % 12 || 12;

// Out The Time
time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}`;

setTimeout(showTime, 1000)
}

// Add Zeros 
const addZero = n => (parseInt(n, 10) < 10 ? '0' : '') + n;

const setBgGreet = () => {
    let today = new Date(),
        hour = today.getHours()

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('../img/morning1.jpg')";
        greeting.textContent = "Good Morning";
        // document.h1.style.color = '#ffff';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundRepeat = "no-repeat"
    } else if (hour < 18) {
        // afternoon
        document.body.style.backgroundImage = "url('../img/afternoon1.jpg')";
        greeting.textContent = "Good Afternoon";
        document.body.style.backgroundSize = "cover";
        document.body.h1.style.color = '#ffff';
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundRepeat = "no-repeat"
        
    }else {
        // evening
        document.body.style.backgroundImage = "url('../img/evening1.jpg')";
        greeting.textContent = "Good Evening";
        // document.body.style.color = '#ffff';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundRepeat = "no-repeat"
    }
}

// Get Name
const getName = () => {
    if (localStorage.getItem('name') === null) {
        names.textContent = '[Enter Name]';
    } else {
        names.textContent = localStorage.getItem('name');
    }
}

// Set Name
const setName = e => {
    if (e.type === 'keypress') {
        // Make it's enter that was pressed
        if (e.type == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
        names.blur
    }
}

// Get Focus
const getFocus = () => {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

names.addEventListener('keypress', setName);
names.addEventListener('blur', setName);

// Run
showTime();
setBgGreet();
getName();
getFocus()
setName()