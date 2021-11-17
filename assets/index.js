/**
 * Calls WASM array allocation function and updates p tag text on completion.
 */
function arrayAlloc() {
    let textEl = document.querySelector('.index__array-text');
    textEl.innerHTML = arrayTest();
}

/**
 * Calls WASM addition function and updates p tag text on completion.
 */
function addition() {
    let textEl = document.querySelector('.index__addition-text');
    textEl.innerHTML = additionTest();
}

/**
 * Calls WASM float division function and updates p tag text on completion.
 */
function floatDivision() {
    let textEl = document.querySelector('.index__float-text');
    textEl.innerHTML = floatDivisionTest()
}

// Await document ready state, then add click event listeners.
let tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);
    let arrayBtn = document.querySelector('.index__array-btn');
    arrayBtn.addEventListener('click', arrayAlloc);
    
    let additionBtn = document.querySelector('.index__addition-btn');
    additionBtn.addEventListener('click', addition);
    
    let floatBtn = document.querySelector('.index__float-btn');
    floatBtn.addEventListener('click', floatDivision);
}, 100);
