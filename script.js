var ua = window.navigator.userAgent.toLocaleLowerCase();
let osIsNotWin = document.getElementById('winError');

if (ua.indexOf("windows nt") !== -1) 
{
    osIsNotWin.style.display = 'none';
}

const versionList = require('versionList.json');
const jsonObj = JSON.parse(versionList);



console.log(jsonObj[0].version);

console.log("All Process End");