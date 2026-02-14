fn main() {
    {
        let s = "hello"; // ここでsがhelloを所有（有効となる）
        println!("{}", s);
    } // スコープの終了でsの所有権は削除（無効になる）
    // println!("{}", s); // 無効のためエラー

    // String型
    // &strはイミュータブルで参照用、スタック領域に参照のみ保持して実体は別の場所
    {
        let mut s = String::from("hello");
        s.push_str(", world!"); // push_str()関数は、リテラルをStringに付け加える
        println!("{}", s);
    }

    // ムーブ
    let s1 = String::from("hello"); // Stringはヒープのためポインタを保持している
    let s2 = s1; // このときs1, s2どちらも同じ参照を持つがRustではs1からs2に参照を移すとs1は使用できなくなる
    // println!("{}", s1); // コンパイルエラー
    println!("{}", s2);
    let s3 = s2.clone(); // コピーしたいときはクローンメソッドを使う
    println!("{} {}", s2, s3);

    let x = 5;
    let y = x; // スタック領域のものはコピーが毎回される
    println!("x = {}, y = {}", x, y); // ムーブされないのでエラーにならない

    // 関数の引数に渡してもヒープ領域のものはムーブする
    // Cではポインタそのものを渡さなければ値のコピーが渡されるだけなので値を変更しても元の変数に影響はない
    // ただし、ポインタで渡した場合は参照先そのものが変わる
    // Javaは自動でポインタのようなものを渡しているため値を変更すると参照先そのものが変わる
    // Rustも同じであるが所有権がムーブするので元の参照の変数は利用不可となる
    let s = String::from("hello");
    takes_ownership(s); // この時点で同じ参照のコピーを渡すが所有権が移りもとのsは使用不可になる
    // println!("{}", s); // エラー

    let x = 5;
    makes_copy(x); // この時点で値がコピーされるがi32はスタックなので前の変数が利用できなくならない
    println!("{}", x); // エラーにならない

    // 所有権を返り値で戻す
    let s1 = gives_ownership(); // 戻り値をs1に返しているため関数内から所有権が移る
    let s2 = String::from("hello");
    let s3 = takes_and_gives_back(s2); // s2の所有権が関数に移るが関数内から戻り値で返すためs3が所有権を持つ
    println!("s1 = {}, s3 = {}", s1, s3); // s1 s3はムーブされて所有権があるので使用可能
    // println!("s2 = {}", s2); // ムーブしているためs2は使用できない

    let (s4, len) = calculate_length1(s1); // s1の長さを計算してs1そのものをまた使う場合は返り値で返さねばならない
    println!("The length of '{}' is {}.", s4 , len);

    // 参照と借用
    let s1 = String::from("hello"); // 不変な借用
    let len = calculate_length2(&s1); // &で所有権を借りることができs1がムーブしない。関数にはs1を指し示すポインタが渡される
    println!("The length of '{}' is {}.", s1 , len); // s1エラーにならない

    let mut s = String::from("hello");
    change(&mut s); // 可変できる借用（所有権も残る）
    println!("{}", s); // sの所有権を移動せずそのまま関数で値を変更

    // ただし、可変の借用を同時に2つ以上借用することはできない。2カ所で変更されることを防ぐため
    // ブロックスコープが異なれば可能
    // 可変参照と不変参照は同時にとれない。不変でとっているのにほかで変えられてしまう恐れがあるため
    let mut s = String::from("hello");
    let r1 = &mut s;
    // let r2 = &mut s;
    // let r3 = &s; // 可変参照があるためエラー
    // println!("{}, {}", r1, r2); // これはエラーになる

    // 参照の規則
    // - 任意のタイミングで、1つの可変参照か不変な参照をいくつでものどちらかを行える
    // - 参照は常に有効でなければならない（もとの所有権のオーナーが消えてはいけない）

    // スライス型
    // スライスは借用の一種
    // 文字列スライスは大本の文字列Stringを不変な参照としてとる
    // 以上のため不変な参照に対して可変な参照をとるようなことは規則に反するのでエラー
    // 文字列リテラルもスライス（&strはスライス）
    let mut s = String::from("hello world");
    let hello = &s[0..4];
    let world = &s[6..10];
    // s.push_str("!"); // すでに不変参照をとっているので可変参照できないエラー
    // s.clear();  // すでに不変参照をとっているので可変参照できないエラー
    println!("The first words is: {}", hello);

    // 配列でもスライスをとれる
    let i = [0, 1, 2, 3, 4, 5];
    let slice = &i[1..3];

    // &strなどは借用しているのであり所有権を持たない
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
}

fn gives_ownership() -> String {
    let some_string = String::from("hello");
    some_string
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
}

fn calculate_length1(s: String) -> (String, usize) {
    let length = s.len();
    (s, length)
}

fn calculate_length2(s: &String) -> usize {
    // s.push_str(", world"); // 借用してるだけなので参照先そのものの変更はできない
    s.len()
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}