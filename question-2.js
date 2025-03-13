const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let TotalScore = students.filter(students => students.score > 50).map(Pass50Students => Pass50Students.score*1.1 ).reduce(((acc,value) => acc+value) ,0);
console.log(`Total score is ${TotalScore}`);
