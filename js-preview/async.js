// จำลฟงการจำลองข้อมูล server
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo() {
    console.log("1) Start loading...");
    await wait(2000);
    console.log("2) Complete");
    // await getUsers();
    await postUsers();
}

// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error(`HTTP ${response.status}`);
//         }
//         const usesr = await response.json();
//         console.log(`Get data ${usesr.lenght}`)
//         usesr.forEach((u) => console.log(u.id, u.name, "-", u.email));
//     } catch {
//         console.error("Error found", error.message);
//     }
// }

demo()
console.log("3) Show data")

async function postUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new ErrOR(`HTTP ${response.status}`);
        }
        const post = await response.json();
        console.log(`Get data ${post.lenght}`);
        post.forEach((u) => console.log(u.userId, u.id, u.title, u.body));
    } catch {
        console.error("Error found", error.message)
    }
}