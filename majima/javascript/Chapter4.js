/**
 * Chapter 4
 */

// sample object
let youtuber = {
    list: {
        business: {
            youtuber: [
                { name: "しまぶー", age: 20, teachProgramming() {} },
                { name: "あっちゃん", age: 37, teachHistory() {} }
            ],
            teach() {}
        },
        entertainment: {
            youtuber: [
                { name: "ヒカキン" },
                { name: "はじめしゃちょー" }
            ]
        }
    },
    plan() {},
    uploadVideo() {}
};

// how to access object property
youtuber.list.business.youtuber[0].teachProgramming();

console.log(youtuber.list.business.youtuber[0].name);

// about window, document object
window.console.log(123);
window.alert(456);

// Ex.1
const button1 = window.document.getElementById("button1");
console.log("button1:", button1);

// Ex.2
youtuber["list"]["business"]["youtuber"][0]["teachProgramming"]();
