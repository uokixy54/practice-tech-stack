use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();

    // キーとバリューで値を持たせる
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    // vecから作る
    let teams =vec![String::from("Blue"), String::from("Yellow")];
    let initial_scores = vec![10, 50];
    let scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();
    

}
