use wasm_bindgen::prelude::*;
use sha2::{Sha256, Digest};

//todo: implement
#[wasm_bindgen]
pub fn bubbleSortTest() {
    let mut count = 0;
    let mut _arr: [i64;50000] = [0;50000];
    while count < 10 {
        println!("hello");
        for i in 0.._arr.len() {
            _arr[i] = (50000-i) as i64;
        }
        bubble_sort(&mut _arr);
        count = count + 1;
    }
}

#[wasm_bindgen]
pub fn arrayAdditionTest() {
    let mut count = 0;
    while count < 10 {
        let mut counter: i64 = 0;
        while counter < 2147483647 {
            counter += 1;
        }
        count = count + 1;
    }
}

//todo: implement
#[wasm_bindgen]
pub fn hashTest() {

    let mut count = 0;
    while count < 10 {

        let string = "hello world".repeat(250000);

        let mut hasher = Sha256::new();
        hasher.update(string.as_bytes());
        let result = hasher.finalize();
        count = count + 1;
    }
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