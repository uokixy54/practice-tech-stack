fn main() {
    println!("Hello, world!");
    another_function1(); // C言語と違いmain関数後でも呼び出せる
    another_function2(5);
    print_labeled_measurement(5, 'h');

    // 文と式（関数は文と式から成る）
    let y = 6; // 値を返さない命令が文、このうち6は評価される式である
    let y = { // ブロックスコープも式
        let x = 3;
        x + 1
    };
    println!("The value of y is: {}", y);

    let x = five(); // 5
    println!("The value of x is: {}", x);

    let x = plus_one(5); // 6
    println!("The value of x is: {}", x);
}

fn another_function1() {
    println!("Another function 1.");
}

fn another_function2(x: i32) {
    println!("The value of x is: {}", x);
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {}{}", value, unit_label);
}

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}