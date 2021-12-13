const calendar = document.getElementById('calendar');
const countDown = document.getElementById('count');
const reset = document.getElementById('reset');

let countDownDate = 0
const startTimer = (countDownDate) => {
// if(countDownDate < 0){
//     alert("This date has passed")
// }
if(countDownDate !== 0){
    setInterval(() => {
       const targetDate = new Date(countDownDate);
       const currentDate = new Date();
       const totalSeconds = (targetDate - currentDate) / 1000;
       const days = Math.floor(totalSeconds / 3600 / 24)
       const hours = Math.floor((totalSeconds / 3600) % 24)
       const minutes = Math.floor((totalSeconds / 60) % 60);
       const seconds = Math.floor(totalSeconds) % 60;

       countDown.textContent = `${days} Days ${hours} Hours ${minutes} minutes ${seconds} seconds`
    }, 1000);
} else {
    countDown.textContent = "Please Enter target Date";
}
}

calendar.addEventListener('input',() => {
     countDownDate = calendar.value;
     calendar.disabled = true;
     startTimer(countDownDate);
})

reset.addEventListener('click',() => {
    window.location.reload();
    countDown.textContent= 'Please Enter a date input'
})

countDown.textContent= 'Please Enter a date input'

