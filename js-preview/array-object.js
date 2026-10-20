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
    { id: 102, name: "Ball", age: 19, major: "IT Gay"},
    { id: 103, name: "Gon", age: 30, major: "IT Futa"},
]
// console.log(`รายชื่อนักเรียน ${studentList}`);
// map 
const names = studentList.map(s => `ID ${s.id} ชื่อ ${s.name} อายุ ${s.age} สาขา ${s.major}`,);
console.log(`ข้อมูลที่ใช้งาน map : ${names}`);
