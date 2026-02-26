use std::fmt::Display;
use std::fmt::Debug;

pub trait Summary1 {
    fn summarize(&self) -> String;
}

// デフォルト実装あり
pub trait Summary2 {
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}
// impl Summary1 for NewArticle {
//     fn summarize(&self) -> String {
//         format!("{} by {} ({})", self.headline, self.author, self.location)
//     }
// }
impl Summary2 for NewsArticle {}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}
impl Summary1 for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

// トレイトを実装した型を関数の引数にバインド
pub fn notify1(item: &impl Summary1) {
    println!("Breaking news! {}", item.summarize());
}

// 複雑なものにはトレイト境界構文
pub fn notify2<T: Summary1>(item1: &T, item2: &T) {}

// 複数のトレイト境界構文
pub fn notify3(item: &(impl Summary1 + Display)) {

}
pub fn notify4<T: Summary1 + Display>(item: &T) {

}

// トレイト境界が多いときはwhere句で読みやすく
fn some_function1<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 { 0 }
fn some_function2<T, U>(t: &T, u: &U) -> i32
where 
    T: Display + Clone,
    U: Clone + Debug,
{ 0 }

// トレイト実装の型を返却
// 主にクロージャーやイテレータで使用される
// ただし返却に指定できるトレイトは一つまで
fn returns_summarizable() -> impl Summary1 {
    Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably already know, people",),
        reply: false,
        retweet: false,
    }
}

// トレイト境界を使用してメソッド実装を条件分け
// ブランケット実装という
struct Pair<T> {
    x: T,
    y: T,
}
impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}
impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}