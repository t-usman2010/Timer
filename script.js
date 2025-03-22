function time(){
    let date = new Date();
    let hours = date.toLocaleTimeString();
    document.getElementById('current-time').innerHTML = hours;
}
function iftarTime(){
    let date = new Date();
    let time = date.getMilliseconds();
    let iftarTime = new Date(2025, 2, 28, 18, 30);
    let time2 = iftarTime.getMilliseconds();
    let diff = iftarTime - date;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("countdown").innerHTML = (days + " Days, " + hours + " Hours, " + minutes + " Minutes,");
}
function updateCountdown() {
    let left = new Date();
    if (now > iftarTime) {
        document.getElementById('countdown').textContent = "It's Iftar time!";
        return;
    }
}
// Update time
time();
setInterval(time, 1000);
iftarTime();
setInterval(iftarTime, 1000);
updateCountdown();
setInterval(updateCountdown, 1000);