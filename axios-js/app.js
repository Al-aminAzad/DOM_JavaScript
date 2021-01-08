import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
let btn =document.getElementById('loadData');
let para =document.getElementById('user');

btn.addEventListener('click',()=>{
    axios.get(BASE_URL)
    .then(res =>{
        res.data.forEach(element => {
            para.innerHTML = `${para.innerHTML} <br> Name: ${element.name}`;
        });
    })
    .catch(err =>console.log(err));

})

// const URl = 'http://localhost:3000/contacs';
// window.onload = function () {
//     let tbody = document.querySelector('#tbody');
//     axios.get(URL)
//         .then(res => {
//             res.data.forEach(element => {
//                 createelement(element,tbody);
//             });
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// function createelement(contact, parentelement) {
//     const tr = document.createElement('tr');
//     const tdName = document.createElement('td');
//     tdName.innerHTML = contact.name;
//     tr.appendChild(tdName);

//     const tdEmail = document.createElement('td');
//     tdEmail.innerHTML = contact.email ? contact.email : 'N/A';
//     tr.appendChild(tdEmail);

//     const tdPhone = document.createElement('td');
//     tdPhone.innerHTML = contact.phone ? contact.phone : 'N/A';
//     tr.appendChild(tdphone);

//     const tdActions = document.createElement('td');
//     const tdEditButton = document.createElement('button');
//     tdEditButton.className = 'btn btn-warning';
//     tdEditButton.innerHTML = 'Edit';
//     tdEditButton.addEventListener('click', () => {
//         console.log('I am edit button');
//     })
//     tdActions.appendChild(tdEditButton);

//     const tdDeleteButton = document.createElement('button');
//     tdDeleteButton.className = 'btn btn-danger';
//     tdDeleteButton.innerHTML = 'Delete';
//     tdDeleteButton.addEventListener('click', () => {
//         console.log('I am Delete button');
//     })
//     tdActions.appendChild(tdDeleteButton);
//     tr.appendChild(tdActions);
//     parentelement.appendChild(tr);
// }