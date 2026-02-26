// Rustのコレクション
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}

fn main() {
    // ベクター
    let v: Vec<i32> = Vec::new();
    let mut v =vec![1, 2, 3]; // !はマクロを表す

    v.push(5);
    // スコープを抜けるとドロップする

    let third: &i32 = &v[2];
    println!("The third element is {}", third); // 3番目の要素がないとパニックで強制終了

    // match文で安全に処理を書く
    match v.get(2) {
        Some(third) => println!("The third element is {}", third),
        None => println!("There is no third element."),
    }

    let mut v = vec![1, 2, 3, 4, 5];
    let first = &v[0]; // 不変な参照
    v.push(6); // pushメソッドで可変な参照をとると不変な参照があるので以降でfirst変数にアクセスしようとするとエラーとなる
    // println!("The first element is: {}", first); // エラー

    // ひとずつとりだす
    let v = vec![1, 2, 3, 4, 5];
    for i in &v {
        println!("{}", i);
    }

    // 値を変更したい場合
    let mut v = vec![1, 2, 3, 4, 5];
    for i in &mut v {
        *i += 50; // iは&i32型でポインタであり実態ではないので*参照外し演算子を使用しないとアクセスできない
    }

    // vec内に異なる型の値を持たせたいときはenumの各列挙子に別の型を保持させることで実現
    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];
    // vecについてはdocs.rs絵使用を調べるのが良い

}
