var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var touchstart = [0, 0];
var touchend = [0, 0];
var xpos = 0;

var gesuredZone = document.getElementById('main');

gesuredZone.addEventListener('touchstart', function (event) {
    touchstart[0] = event.changedTouches[0].screenX;
    touchstart[1] = event.changedTouches[0].screenY;
}, false);

gesuredZone.addEventListener('touchend', function (event) {
    touchend[0] = event.changedTouches[0].screenX;
    touchend[1] = event.changedTouches[0].screenY;
    handleGesure();
}, false);

function handleGesure() {
    let xdif = touchstart[0] - touchend[0];
    let ydif = touchstart[1] - touchend[1];
    if (xdif ** 2 > ydif ** 2) {

        if (xdif < -20) {
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
        if (xdif > 20) {
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
    //     alert('swiped in y dir');
    // }
}