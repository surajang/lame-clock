var myVar = setInterval(function(){myTimer()}, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var greeting = document.querySelector('#greeting');
    greeting.innerText = t;
}