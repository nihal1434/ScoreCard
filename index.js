let scr = document.getElementById("homeipt");
let scrg = document.getElementById("gustipt");

function add1h() {
    scr.textContent = parseInt(scr.textContent) + 1;
}

function add2h() {
    scr.textContent = parseInt(scr.textContent) + 2;
}

function add3h() {
    scr.textContent = parseInt(scr.textContent) + 3;
}

function add1g() {
    scrg.textContent = parseInt(scrg.textContent) + 1;
}

function add2g() {
    scrg.textContent = parseInt(scrg.textContent) + 2;
}

function add3g() {
    scrg.textContent = parseInt(scrg.textContent) + 3;
}

function resetScores() {
    scr.textContent = 0;
    scrg.textContent = 0;
}
