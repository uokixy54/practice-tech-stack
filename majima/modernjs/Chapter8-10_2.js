import anonymousFn, { studentName, studentNum, study, doHomework } from "./Chapter8-10_1.js";
import * as allDist from "./Chapter8-10_1.js";  // all import

console.log(studentName);
console.log(studentNum);
study();
doHomework();
anonymousFn();

// all import
console.log("All Import attr: " + allDist.studentName);
console.log("All Import attr: " + allDist.studentNum);
allDist.study();
allDist.doHomework();
// default exportは対象外
