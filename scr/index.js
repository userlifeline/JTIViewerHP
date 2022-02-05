var ua = window.navigator.userAgent.toLocaleLowerCase();
let osIsNotWin = document.getElementById('winError');

if (ua.indexOf("windows nt") !== -1) 
{
    osIsNotWin.style.display = 'none';
}

console.log("All Process End");