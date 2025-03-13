// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await users.json();
    const names = data.map(user => user.name);
    const moreThan17CharName = names.filter(name => name.length > 17);
    console.log(moreThan17CharName);

  }
  
  getUsers();