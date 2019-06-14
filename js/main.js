// DOM Elements
const time = document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
focus = document.getElementById("focus");

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZeros(n) {
    return (parseInt(n) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBackgroundGreeting() {
    let hour = new Date().getHours();
    if(hour >= 4 && hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        greeting.innerHTML = 'Good Morning,';
    } else if(hour >= 12 && hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
        greeting.innerHTML = 'Good Afternoon,';
    } else{
        //Night
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        greeting.innerHTML = 'Good Night,';
        document.body.style.color = 'white';
    }
}

// Get Name function
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name function
function setName(e) {
    if(e.type === 'keypress') {
        if(e.witch == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus function
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
// Set Focus function
function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.witch == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Run
showTime();
setBackgroundGreeting();
getName();
getFocus();
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);