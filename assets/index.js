'use strict';

// Constants
const maxInt = 2147483647;
const completed = 'Complete';


/**  BEGIN PRIVATE METHODS **/
function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bSort(arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}
/** END PRIVATE METHODS **/


// TODO: MULTIPLY TASKS BY 100
/**
 * JavaScript addition test.
 */
function jsAdditionAlloc() {
    let counter = 0;
    let textEl = document.querySelector('.index__jsaddition-text');
    console.log('Starting JS addition test...');

    while (counter < maxInt) {
        counter += 1;
    }

    console.log('Completed JS addition test.');
    textEl.innerHTML = completed;
}

/**
 * JavaScript array allocation and bubble sort.
 */
function jsBubbleSort() {
    let arr = new Array(50000);
    let textEl = document.querySelector('.index__jsbsort-text');
    console.log('Starting JS bubble sort test...');

    for (let index = 0; index < arr.length; index++) {
        arr[index] = arr.length - index;
    }

    bSort(arr, arr.length);

    console.log('Completed JS bubble sort test.');
    textEl.innerHTML = completed;
}

async function sha256(message, textEl) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    console.log('Completed JS hash test.');
    textEl.innerHTML = completed;
    return hashHex;
}

/**
 * JavaScript hash after 250k string creation.
 */
function jsHash() {
    let textEl = document.querySelector('.index__jshash-text');
    console.log('Starting JS hash test...');
    
    let s = '';
    for (let index = 0; index < 250000; index++) {
        s = s.concat('A');
    }

    sha256(s, textEl);
}

/**
 * Calls WASM addition function and updates p tag text on completion.
 */
function addition() {
    let textEl = document.querySelector('.index__goaddition-text');
    textEl.innerHTML = additionTest();
}

/**
 * Calls WASM bubble sort function and updates p tag text on completion.
 */
function bubbleSort() {
    let textEl = document.querySelector('.index__gobubblesort-text');
    textEl.innerHTML = bubbleSortTest()
}

/**
 * Calls WASM hash function and updates p tag text on completion.
 */
function hash() {
    let textEl = document.querySelector('.index__gohash-text');
    textEl.innerHTML = hashTest()
}

// Await document ready state, then add click event listeners.
let tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);

    let jsAdditionBtn = document.querySelector('.index__jsaddition-btn');
    jsAdditionBtn.addEventListener('click', jsAdditionAlloc);

    let jsBubbleSortBtn = document.querySelector('.index__jsbsort-btn');
    jsBubbleSortBtn.addEventListener('click', jsBubbleSort);

    let jsHashBtn = document.querySelector('.index__jshash-btn');
    jsHashBtn.addEventListener('click', jsHash);
    
    let goAdditionBtn = document.querySelector('.index__goaddition-btn');
    goAdditionBtn.addEventListener('click', addition);

    let goBubbleSortBtn = document.querySelector('.index__gobubblesort-btn');
    goBubbleSortBtn.addEventListener('click', bubbleSort);

    let goHashBtn = document.querySelector('.index__gohash-btn');
    goHashBtn.addEventListener('click', hash);
}, 100);
