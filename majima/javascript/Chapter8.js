/**
 * Chapter 8
 * - 試すのが難しい領域のため演習は既存コードの改修のみ
 */

// Promiseについてはこの章では行わない
async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}
callApi();

// 演習1
function oldCallApi1() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(res) {
            return res.json();
        })
        .then(function(users) {
            console.log(users);
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(function() {
            console.log("finally");
        });
}
oldCallApi1();

// 演習2
function oldCallApi2() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.onerror = function() {
        console.log("error");
    }
    xhr.send();
}
