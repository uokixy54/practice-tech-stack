/**
 * day 1 javascript
 * - jsは動的な検査を行う言語
 * - 実際に実行しないとエラーが分からない
 */

// ランタイム上でのみ検査を行うことを実証（pp16~17）
const msgString2 = 12345;
console.log("現在のメッセージは" + msgString2.length + "文字です");
const msgString1 = null;
console.log("現在のメッセージは" + msgString1.length + "文字です");
