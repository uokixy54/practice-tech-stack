fn main() {
    let number = 3;

    if number < 5 { // ifの評価値はbool型でなければならない
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    // ifを式として扱う
    let condition = true;
    let number = if condition {5} else {6};
    // let number = if condition {5} else {"six"}; // 左辺がコンパイル時、一意に型が定まらないためエラー
    println!("The value of number is: {}", number);

    // ループ
    // - loop
    // - while
    // - for

    loop { // while(true)でない無限ループ
        println!("again!");
        break;
    }

    // ラベルづけ
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {}", count);

    let mut number = 3;
    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }
    println!("LIFTOFF!!!");

    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("The value is: {}", a[index]);
        index += 1;
    } // whileでもできるが…
    for element in a { // コレクション変数を一つずつ処理するのに便利
        println!("The value is: {}", element);
    }
    // 任意の回数ループしたいときは標準ライブラリのRange型を使う
    for number in 1..4 {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}
