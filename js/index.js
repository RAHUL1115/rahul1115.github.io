var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// let topwidth = (100 - ((document.getElementById('socialicon').clientHeight - document.getElementById('topnav').clientHeight) / (h / 100))) / 2;
let topwidth = (100 - ((document.getElementById('socialicon').clientHeight - 0) / (h / 100))) / 2;
document.getElementById('socialicon').style.top = topwidth + '%';