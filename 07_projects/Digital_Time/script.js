const clock = document.getElementById('clock');
const date = document.getElementById('date');

setInterval(function (){
    const time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
},1000);

setInterval(() => {
    const curr_date = new Date();
    date.innerHTML = curr_date.toLocaleDateString();
}, 1000);