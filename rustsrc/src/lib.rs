use wasm_bindgen::prelude::*;

let arr:[i64;100];

#[wasm_bindgen]
extern {
    pub fn test1();
    pub fn test2();
    pub fn test3();
}

#[wasm_bindgen]
pub fn test1() {
    arr = [1337; 100];
}

#[wasm_bindgen]
pub fn test2() {
    for (i, x) in arr.iter().enumerate() {
        arr[i] = arr[i] + 663;
    }
}

#[wasm_bindgen]
pub fn test3() {
    for (i, x) in arr.iter().enumerate() {
        let _: f32 = arr[i] / 2500.0;
    }
}