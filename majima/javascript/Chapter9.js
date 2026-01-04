/**
 * Chapter 9
 * - apiは実践できないためコードの書き方の変更を演習とする
 */

// 初期表示
window.onload = callApi; // 関数における()は即座に実行する命令のためコールバックの時は付けない

// サンプル
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", callApi);

async function callApi() {
    // データ取得
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    // DOM操作
    users.forEach(function(user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    });
}
