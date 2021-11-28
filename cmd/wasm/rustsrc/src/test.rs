pub fn arrayInit() {
    let _arr: [i64;1000000] = [1337;1000000];
}

pub fn arrayAddition() {
    let mut counter: i64 = 0;
    while counter < 2147483647 {
        counter += 1;
    }
}

pub fn arrayDivision() {
    let mut arr: [f64;1000000] = [1.0;1000000];
    for element in arr.iter_mut() {
        *element = *element/2.0;
    }

}

fn main(){
    arrayInit();
    arrayAddition();
    arrayDivision();
}