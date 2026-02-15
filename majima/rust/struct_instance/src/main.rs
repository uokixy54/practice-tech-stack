// 構造体
// タプルに近いもの
struct User {
    email: String,
    username: String,
    active: bool,
    sign_in_count: u64,
}

// まとめるほうが良いものかつ名前があるといいものは構造体
#[derive(Debug)]
struct Reactangle {
    width: u32,
    height: u32,
}

// area関数をReactangleに関連した関数にする
impl Reactangle {
    // 大文字のSelfは自身の方 は自身の型を表す
    // staticメソッドみたいなもの
    fn square(width: u32) -> Self {
        Self { 
            width,
            height: width,
        }
    }

    fn area(&self) -> u32 {
        self.height * self.width
    }

    fn set_width(&mut self, width: u32) {
        self.width = width;
    }
}

struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

enum IpAddrKind {
    V4,
    V6,
}

struct IpAddr1 {
    kind: IpAddrKind,
    address: String,
}

// structみたいにaddressを同じ型にしなくてもいい利点がある
enum IpAddr2 {
    V4(u8, u8, u8, u8),
    V6(String),
}

#[derive(Debug)]
enum Message {
    Quit,
    Move { x: i32, y: i32 }, // 名前付きで値を持たせられる
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn show_this_message(&self) {
        println!("{:?}", self);
    }
}

// 標準ライブラリで定義されているOption
// あるないを定義するのに便利
// enum Option<T> {
//     Some(T),
//     None,
// }

fn main() {
    // 不変
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    // 可変
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com"); // 値の変更

    let user1 = build_user("email1".to_string(), "uokixy".to_string());
    let user2 = User {
        email: String::from("another@example.com"),
        username: String::from("anotherusername567"),
        ..user1 // スプレッド記法
    };

    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);

    let mut rect = Reactangle {
        width: 30,
        height: 50,
    };

    println!("The area of the reactangle is {} square pixels.", rect.area());

    rect.width = 60;

    println!("The area of the reactangle is {} square pixels.", rect.area());
    println!("{:?}", rect);

    let square = Reactangle::square(60);
    println!("{:?}", &square);
    println!("The area of reactangle is {} square pixcels.", &square.area());

    rect.set_width(40);
    println!("{:?}", &rect);

    let four = IpAddrKind::V4;
    let  six = IpAddrKind::V6;

    let home = IpAddr1 {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };

    let home = IpAddr2::V4(127, 0, 0, 1); // enumは関連する値をまとめて持つことができる

    let mut message: Message = Message::Quit;
    message.show_this_message();
    message = Message::Move { x: 30, y: 40 };
    message.show_this_message();
    message = Message::Write("content".to_string());
    message.show_this_message();
    message = Message::ChangeColor(255, 0, 0);
    message.show_this_message();

}

// 引数で受け取ったものをそのまま使用する場合の省略記法
fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}

// これはmain全体で使えてしまうので、、
// fn area(reactangle: &Reactangle) -> u32 {
//     reactangle.height * reactangle.width
// }