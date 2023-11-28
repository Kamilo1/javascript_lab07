/* const callback = () => console.log("Time out");

//setTimeout(
//() => {
//   callback(),
//     setTimeout(
//        () => {
//            console.log("Task 2");
//        },
//        2000
//     )
//    },
//    2000
//);

let delay = function (d){new Promise((resolve) => {
    setTimeout(resolve, d);
});
};
async function TwoDelay(){
    console.log("start delay");
    await delay(2000);
    console.log("after delay");
    await delay(1000);
    if(Math.random() < 0.5){
        throw "Error";
    }
    return "End";
} 
//TwoDelay().then(str => console.log(str))
//.catch(error => console.log(error));
DoubleTwoDelay().then(str => console.log(str));
function long(){
    let n = 10000;
    while(n-->0){
        console.log("Wait");
    }
}
 */

async function DoubleTwoDelay(){
    await TwoDelay();
    await TwoDelay();
    return "End Of Double";
}

async function fetchJson(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let body = await response.json();
    console.log(body);
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(r => r.json())
.then(r => CreateUsersTable(r))
.catch(e => console.log("Error", e))

//fetchJson().then(r => console.log(r));

function CreateUsersTable(users){
    const table = document.getElementById('users'); 
   
   for (const user of users) {
    const important = [user.name, user.username, user.email]
       const row = table.insertRow();
       for (const key in important) {
           const cell = row.insertCell();
           cell.appendChild(document.createTextNode(important[key]));
           
       }
   }
}