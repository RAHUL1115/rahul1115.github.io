var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var touchstart = [0, 0];
var touchend = [0, 0];
xpos = 0;

// let topwidth = (100 - ((document.getElementById('socialicon').clientHeight - document.getElementById('topnav').clientHeight) / (h / 100))) / 2;
let topwidth = (100 - ((document.getElementById('socialicon').clientHeight - 0) / (h / 100))) / 2;
document.getElementById('socialicon').style.top = topwidth + '%';

var swipeZone = document.getElementById('main');

//for mobile
swipeZone.addEventListener('touchstart', function (event) {
    touchstart[0] = event.changedTouches[0].screenX;
    touchstart[1] = event.changedTouches[0].screenY;
}, false);

swipeZone.addEventListener('touchend', function (event) {
    touchend[0] = event.changedTouches[0].screenX;
    touchend[1] = event.changedTouches[0].screenY;
    handleSwipe();
}, false);

//for desktop
swipeZone.addEventListener('mousedown', function (event) {
    // console.log('mouse down');
    touchstart[0] = event.screenX;
    touchstart[1] = event.screenY;
}, false);

swipeZone.addEventListener('mouseup', function (event) {
    // console.log('mouse up');
    touchend[0] = event.screenX;
    touchend[1] = event.screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    let xdif = touchstart[0] - touchend[0];
    let ydif = touchstart[1] - touchend[1];
    if (xdif ** 2 > ydif ** 2) {
        if (xdif < -24) {        
            let el = document.getElementsByClassName('el');
            if (xpos == 0) {
                xpos = 0;
            } else {
                xpos += 100;
            }
            for (let i = 0; i < el.length; i++) {
                el[i].style.transform = 'translateX(' + xpos + '%)';
            }
        }
        if (xdif > 24) {
            let el = document.getElementsByClassName('el');
            if (xpos == -200) {
                xpos = -200;
            } else {
                xpos -= 100;
            }
            for (let i = 0; i < el.length; i++) {
                el[i].style.transform = 'translateX(' + xpos + '%)';
            }
        }
    } 
    // else {
    //     if (ydif < -20) {
    //         console.log('down');
    //     }
    //     if (ydif > 20) {
    //         console.log('up');
    //     }
    // }
}