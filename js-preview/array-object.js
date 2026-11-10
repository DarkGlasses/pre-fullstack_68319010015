// อาเรย์ และ ออบเจกต์

// array
const students = ["Earth", "Tho", "Silapakhon", "Ood", "Matus"];

console.log(`ก. แสดงทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำกรแสดงผลลัพท์ทั้งหมด ${students} จำนวนรายชื่อ ${students.length} คน`)

// object
const student = {
    id: 101,
    name: "Ice",
    age: 99,
    major: "Information Techonology"
};
console.log(`name ${student.neme}`);
console.log(`major ${student.major}`);

// Array and Object
const studentList = [
    { id: 101, name: "Ice", age: 20, major: "IT"},
    { id: 102, name: "Ball", age: 19, major: "CG"},
    { id: 103, name: "Gon", age: 30, major: "IT"},
]
// console.log(`รายชื่อนักเรียน ${studentList}`);
// map 
const names = studentList.map(s => `ID ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`,);
console.log(`ข้อมูลที่ใช้งาน map : ${names}`);

// filter คัดกรอง
const isStudent = studentList.filter((s) => s.major === "IT");
console.log(`filter IT : ${isStudent.length}`)

// find หาข้อมูลที่ตรงเงื่อนไข
const found  = studentList.find((s) => s.id === 103);
console.log("ค้นหา : ", found)
console.log(`ค้นหา : ${found.name}`)

// ค้นหาจากชื่อ 
const keyword = "ba";
const searchResult = studentList.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase()));
console.log(`ผลการค้นหา : ${keyword}`, searchResult.map((s) => s.name));

const keywordTest = "I";
const searchResultTest = studentList.filter((s) => s.major.toLowerCase().includes(keywordTest.toLowerCase()));
console.log(`ผลการค้นหา : ${keywordTest}`, searchResultTest.map((s) => `ID : ${s.id} ชื่อ : ${s.name} สาขา ${s.major}`));
