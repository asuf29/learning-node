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
import axios from "axios";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("users uploaded", users);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((post) => {
        console.log("post 1 uploaded", post);

        fetch("https://jsonplaceholder.typicode.com/posts/2")
          .then((data) => data.json())
          .then((data) => console.log("post 2 uploaded", data));
      });
  });

// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/post/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/post/2")
//     ).json();

//     console.log("users", users);
//     console.log("post 1", post1);
//     console.log("post 2", post2);
// }

// getData();

//anonim fonksiyon oluşturduk
// (async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/post/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/post/2")
//   ).json();

//   console.log("users", users);
//   console.log("post 1", post1);
//   console.log("post 2", post2);
// })();

//yazdığım kodu fetch den axios a çeviriyorum
(async () => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { data: post1 } = await axios(
    "https://jsonplaceholder.typicode.com/post/1"
  );

  const { data: post2 } = await axios(
    "https://jsonplaceholder.typicode.com/post/2"
  );

  console.log("users", users);
  console.log("post 1", post1);
  console.log("post 2", post2);
})();
