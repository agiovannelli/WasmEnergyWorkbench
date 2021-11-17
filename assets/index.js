'use strict';

// Constants
const maxInt = 2147483647;
const arraySize = 50000000;
const completed = 'Complete';

/**
 * JavaScript array allocation test.
 */
function jsArrayAlloc() {
    let arr = new Array(arraySize);
    let textEl = document.querySelector('.index__jsarray-text');
    console.log('Starting JS array allocation test...');

    for (let index = 0; index < arr.length; index++) {
        arr[index] = index;
    }

    console.log('Completed JS array allocation test.');
    textEl.innerHTML = completed;
}

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
 * JavaScript array allocation with float point division test.
 */
function jsFloatDivision() {
    let arr = new Array(arraySize);
    let textEl = document.querySelector('.index__jsfloat-text');
    console.log('Starting JS float division test...');

    for (let index = 0; index < arr.length; index++) {
        arr[index] = index;
    }

    for (let index = 0; index < arr.length; index++) {
        arr[index] = index / 3.1415;
    }

    console.log('Completed JS float division test.');
    textEl.innerHTML = completed;
}

/**
 * Calls WASM array allocation function and updates p tag text on completion.
 */
function arrayAlloc() {
    let textEl = document.querySelector('.index__goarray-text');
    textEl.innerHTML = arrayTest();
}

/**
 * Calls WASM addition function and updates p tag text on completion.
 */
function addition() {
    let textEl = document.querySelector('.index__goaddition-text');
    textEl.innerHTML = additionTest();
}

/**
 * Calls WASM float division function and updates p tag text on completion.
 */
function floatDivision() {
    let textEl = document.querySelector('.index__gofloat-text');
    textEl.innerHTML = floatDivisionTest()
}

// Await document ready state, then add click event listeners.
let tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);
    let arrayBtn = document.querySelector('.index__goarray-btn');
    arrayBtn.addEventListener('click', arrayAlloc);

    let additionBtn = document.querySelector('.index__goaddition-btn');
    additionBtn.addEventListener('click', addition);

    let floatBtn = document.querySelector('.index__gofloat-btn');
    floatBtn.addEventListener('click', floatDivision);
}, 100);
