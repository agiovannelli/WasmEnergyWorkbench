'use strict';

// Constants
const maxInt = 2147483647;
const completed = 'Complete';
const repeatTaskAmount = 10;


/**  BEGIN PRIVATE METHODS **/
function swap(arr, xp, yp) {
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

function sha256(ascii) {
    function rightRotate(value, amount) {
        return (value>>>amount) | (value<<(32 - amount));
    };
    
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length'
    var i, j; // Used as a counter across the whole file
    var result = ''

    var words = [];
    var asciiBitLength = ascii[lengthProperty]*8;
    
    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = sha256.h = sha256.h || [];
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = sha256.k = sha256.k || [];
    var primeCounter = k[lengthProperty];
    /*/
    var hash = [], k = [];
    var primeCounter = 0;
    //*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
            for (i = 0; i < 313; i += candidate) {
                isComposite[i] = candidate;
            }
            hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
            k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
        }
    }
    
    ascii += '\x80' // Append Ƈ' bit (plus zero padding)
    while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
    for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j>>8) return; // ASCII check: only accept characters in range 0-255
        words[i>>2] |= j << ((3 - i)%4)*8;
    }
    words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
    words[words[lengthProperty]] = (asciiBitLength)
    
    // process each chunk
    for (j = 0; j < words[lengthProperty];) {
        var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
        var oldHash = hash;
        // This is now the undefinedworking hash", often labelled as variables a...g
        // (we have to truncate as well, otherwise extra entries at the end accumulate
        hash = hash.slice(0, 8);
        
        for (i = 0; i < 64; i++) {
            var i2 = i + j;
            // Expand the message into 64 words
            // Used below if 
            var w15 = w[i - 15], w2 = w[i - 2];

            // Iterate
            var a = hash[0], e = hash[4];
            var temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                + ((e&hash[5])^((~e)&hash[6])) // ch
                + k[i]
                // Expand the message schedule if needed
                + (w[i] = (i < 16) ? w[i] : (
                        w[i - 16]
                        + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
                        + w[i - 7]
                        + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
                    )|0
                );
            // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
            var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
                + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
            
            hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
            hash[4] = (hash[4] + temp1)|0;
        }
        
        for (i = 0; i < 8; i++) {
            hash[i] = (hash[i] + oldHash[i])|0;
        }
    }
    
    for (i = 0; i < 8; i++) {
        for (j = 3; j + 1; j--) {
            var b = (hash[i]>>(j*8))&255;
            result += ((b < 16) ? 0 : '') + b.toString(16);
        }
    }
    return result;
};

/** END PRIVATE METHODS **/


// TODO: MULTIPLY TASKS BY 100
/**
 * JavaScript addition test.
 */
function jsAdditionAlloc() {
    console.time('jsAdditionAlloc');
    console.log('Starting JS addition test...');
    let textEl = document.querySelector('.index__jsaddition-text');
    for (let index = 0; index < repeatTaskAmount; index++) {
        let counter = 0;

        while (counter < maxInt) {
            counter += 1;
        }
    }
    console.log('Completed JS addition test.');
    textEl.innerHTML = completed;
    console.timeEnd('jsAdditionAlloc');
}

/**
 * JavaScript array allocation and bubble sort.
 */
function jsBubbleSort() {
    console.time('jsBubbleSort');
    console.log('Starting JS bubble sort test...');
    let textEl = document.querySelector('.index__jsbsort-text');
    for (let index = 0; index < repeatTaskAmount; index++) {
        let arr = new Array(50000);

        for (let index = 0; index < arr.length; index++) {
            arr[index] = arr.length - index;
        }

        bSort(arr, arr.length);
    }
    console.log('Completed JS bubble sort test.');
    textEl.innerHTML = completed;
    console.timeEnd('jsBubbleSort');
}

/**
 * JavaScript hash after 250k string creation.
 */
function jsHash() {
    console.time('jsHash');
    console.log('Starting JS hash test...');
    let textEl = document.querySelector('.index__jshash-text');

    for (let index = 0; index < repeatTaskAmount; index++) {
        let s = '';
        for (let index = 0; index < 250000; index++) {
            s = s.concat('A');
        }

        sha256(s);
    }
    textEl.innerHTML = completed;
    console.timeEnd('jsHash');
}

/**
 * Calls WASM addition function and updates p tag text on completion.
 */
function addition() {
    console.time('goAddition');
    console.log('Starting Go addition test...');
    let textEl = document.querySelector('.index__goaddition-text');
    textEl.innerHTML = additionTest();
    console.timeEnd('goAddition');
    console.log('Completed Go addition test.');
}

/**
 * Calls WASM bubble sort function and updates p tag text on completion.
 */
function bubbleSort() {
    console.time('goBubbleSort');
    console.log('Starting Go bubble sort test...');
    let textEl = document.querySelector('.index__gobubblesort-text');
    textEl.innerHTML = bubbleSortTest()
    console.timeEnd('goBubbleSort');
    console.log('Completed Go bubble sort test.');
}

/**
 * Calls WASM hash function and updates p tag text on completion.
 */
function hash() {
    console.time('goHash');
    console.log('Starting Go hash test...');
    let textEl = document.querySelector('.index__gohash-text');
    textEl.innerHTML = hashTest()
    console.timeEnd('goHash');
    console.log('Completed Go hash test.');
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

