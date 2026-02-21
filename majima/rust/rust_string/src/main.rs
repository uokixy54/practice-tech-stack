// String
fn main() {
    let mut s = String::new();

    let s = "literal";
    let data = s.to_string();

    let s = String::from("data"); // utf-8

    // String 文字更新
    let mut s1 = String::from("foo");
    let s2 = "bar";
    s1.push_str(s2);
    println!("s1 is {}", s1);

    s1.push('0'); // char型の場合
    println!("s1 is {}", s1);

    // String同士
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; // s1はムーブして使用不可
    println!("{}", s3);
    // +はaddメソッドが呼ばれているのでs2は参照を渡す必要がある

    // 分かりずらいためformatマクロを使用する
    let s1 =String::from("tic");
    let s2 =String::from("tac");
    let s3 =String::from("toe");

    let s = format!("{}-{}-{}", s1, s2, s3);
    println!("{}", s);
    // RustではStringはVec<u8>のラッパーだが添え字アクセスが禁止されている
    // 文字によってバイト数が違うため添え字で返す時どこを返せばよいかわからないため
    // 文字列のスライスは取れるがバイト数でどこまでとれるかその言語で異なる
    // 途中をとっちゃうとパニック
    // .chars()はバイト数を考慮して文字列を切り出してくれる
    // .bytes()これは1バイトずつ取り出す
}
