use wasm_bindgen::prelude::*;
use sha2::{Sha256, Digest};

//todo: implement
#[wasm_bindgen]
pub fn bubbleSortTest() {
    let mut _arr: [i64;50000] = [0;50000];
    for i in 0.._arr.len() {
        _arr[i] = (50000-i) as i64;
    }
    bubble_sort(&mut _arr)
}

#[wasm_bindgen]
pub fn arrayAdditionTest() {
    let mut counter: i64 = 0;
    while counter < 2147483647 {
        counter += 1;
    }
}

//todo: implement
#[wasm_bindgen]
pub fn hashTest() {
    let string = "hello world".repeat(250000);

    let mut hasher = Sha256::new();
    hasher.update(string.as_bytes());
    let result = hasher.finalize();
    return;
}

pub fn bubble_sort<T: Ord>(arr: &mut [T]) {
    for i in 0..arr.len() {
        for j in 0..arr.len() - 1 - i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }
}