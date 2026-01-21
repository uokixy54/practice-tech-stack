// Named export
export const studentNum = 123;
export function study() {
    console.log("called study");
}

const studentName = "Kaito";
const doHomework = () => console.log("called doHomework");

export { studentName, doHomework };
