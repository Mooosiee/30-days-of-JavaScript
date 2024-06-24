let hour = document.querySelector('[data-hour-hand]');
let min = document.querySelector('[data-minute-hand]');
let sec = document.querySelector('[data-second-hand]');
setInterval(setClock,1000);
function setClock(){
    let current = new Date();
    let sratio = current.getSeconds() / 60;
    let mratio = (sratio + current.getMinutes()) / 60;
    let hratio = (mratio + current.getHours()) / 12;
    setRotation(sec,sratio);
    setRotation(min,mratio);
    setRotation(hour,hratio);
}

/**
 * Sets the rotation of an element using CSS custom properties.
 * @param {HTMLElement} el - The element to apply the rotation to.
 * @param {number} rratio - The rotation ratio to be applied (0 to 1).
 * rratio is a string and rotate property requires the number as well as the unit 'deg' hence we added 'deg' to our string angle
 */
function setRotation(el, rratio) {
    el.style.setProperty('--rotation', rratio * 360 + 'deg');
}
setClock();
