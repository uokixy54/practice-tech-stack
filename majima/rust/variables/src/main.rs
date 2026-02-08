fn main() {
    let x: i32 = 5; // 型注釈もつけられる
    println!("The value of x is: {}", x);
    // x = 6; // Rustは変数の再代入を禁止しているためエラー
    let mut x = 6; // 再代入は可能またmutキーワードをつけることで再代入可能な変数として宣言できる
    x = 7;
    println!("The value of x is: {}", x);

    const CONSTANT: usize = 100; // letは再代入禁止かつ再定義は可能だがconstは再代入禁止かつ再定義禁止



    // シャドーイング
    let shadow_x = 5; // 5
    let shadow_x = shadow_x + 1; // 6

    { // ブロック内でシャドーイング
        let shadow_x = shadow_x * 2; // 12
        println!("The value of shadow_x in the inner scope is: {}", shadow_x);
    }

    println!("The value of shadow_x in the outer scope is: {}", shadow_x);

    let some_strings = "aaa";
    println!("The value of spaces is: {}", some_strings);

    let some_strings = some_strings.len(); // シャドーイングで型を上書きしてもエラーにならない
    println!("The value of spaces is: {}", some_strings);



    // データ型
    // 整数型
    let a: i8 = -128;
    let b: u8 = 255;
    let c: i16 = -32768;
    let d: u16 = 65535;
    let e: i32 = -2147483648;
    let f: u32 = 4294967295;
    let g: i64 = -9223372036854775808;
    let h: u64 = 18446744073709551615;
    let i: isize = -9223372036854775808;
    let j: usize = 18446744073709551615;

    // 整数リテラル
    let std_num = 98_222;
    let hex_num = 0xff;
    let oct_num = 0o77;
    let bit_num = 0b1111_0000;
    let byte_num = b'A';

    // 浮動小数点型
    let k = 2.0; // f64
    let l: f32 = 3.0; // f32

    // 論理値型
    let m = true;
    let n: bool = false;

    // 文字型
    let o = 'z'; // 1文字のみchar型でUnicodeの値を使用できる
    let p = '😊'; // 絵文字も使用できる

    // 複合型
    // タプル型
    let tup1: (i32, f64, u8) = (500, 6.4, 1);
    let (q, r, s) = tup1; // 分割代入
    println!("The value of q is: {}", q);
    println!("The value of r is: {}", r);
    println!("The value of s is: {}", s);

    let tup1_0 = tup1.0;
    let tup1_1 = tup1.1;
    let tup1_2 =tup1.2;
    println!("The vakue of tup1_0 is: {}", tup1_0);
    println!("The vakue of tup1_1 is: {}", tup1_1);
    println!("The vakue of tup1_2 is: {}", tup1_2);

    // 配列
    let arr1 = [1, 2, 3, 4, 5]; // スタック領域にメモリ確保したいときに有効でサイズが固定長
    let months: [&str; 12] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let arr2 = [3; 5]; // 初期化[3, 3, 3, 3, 3]
    let months_0 = months[0];
    let months_1 = months[1];
    

    // 四則演算（同じ型同士のみ計算できる）
    let x1: usize = 10;
    let x2: f64 = 1.5;
    // let z1 = x1 + x2; // エラー
    let z1 = x1 as f64 + x2; // 型キャストを使って型を合わせる
    println!("The value of z1 is: {}", z1);
    
}
