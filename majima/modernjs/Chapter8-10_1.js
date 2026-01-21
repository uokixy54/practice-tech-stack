// Named export
export const studentNum = 123;
export function study() {
    console.log("called study");
}

const studentName = "Kaito";
const doHomework = () => console.log("called doHomework");

export { studentName, doHomework };

// default export
// 識別子なしで使用可能（変数は不可、functionのみ）
// default exportは一度だけ宣言できる
export default function() {
    console.log("call anonymous function");
}

// export default studentName;
