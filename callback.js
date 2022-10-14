//vereceğimiz parametredeki süre tamamlandıktan sonra 1 kere çalışır
// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// setInterval(() => {
//     console.log("Hello, I will work every second");
// }, 1000);

//callback ile bu fonk çalıştırıyoruz
// const sayHi = (cb) => {
//     cb();
// };

//parametre olarak bir fonk verdik
// sayHi(() => {
//     console.log("Hi!");
// });

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then(data => data.json())
.then((users) => {
    console.log("users uploaded", users);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((data) => data.json())
        .then((post) => { 
            console.log("post 1 uploaded",post);

            fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then((data) => data.json())
            .then((data) => console.log("post 2 uploaded", data));
    });
});