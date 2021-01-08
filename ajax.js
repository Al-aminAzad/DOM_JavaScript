import axios from 'axios'
let btn = document.getElementById('loadButton');
let para = document.getElementById('user');

const URL = 'https://jsonplaceholder.typicode.com/users';
//Using XMLHttprequest();
// btn.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest();
//     const URL = 'https://jsonplaceholder.typicode.com/users';
//     xhr.open('GET', URL, true);
//     xhr.send();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             //console.log(JSON.parse(xhr.responseText));
//             //para.innerHTML = xhr.response;
//             let data = JSON.parse(xhr.responseText);
//             //console.log(data);
//             data.forEach(element => {
//                 para.textContent = element.name;
//                 console.log(element.name);
//             });
//         }
//     }
// })

//Using Fetch API
// btn.addEventListener('click', () => {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(user => {
//                 para.innerHTML = `${para.innerHTML} <br> Name: ${user.name}`;
//             });
//         })
//         .catch(err => console.log(err));
// })

//Using Axios
btn.addEventListener('click', () => {
    // fetch(URL)
    //     .then(response => response.json())
    //     .then(data => {
    //         data.forEach(user => {
    //             para.innerHTML = `${para.innerHTML} <br> Name: ${user.name}`;
    //         });
    //     })
    //     .catch(err => console.log(err));
    axios.get(URl)
        .then(res => {
            res.data.forEach(user => {
                para.innerHTML = `${para.innerHTML} <br> Name: ${user.name}`;
            })
        })
        .catch(err => console.log(err));
});
