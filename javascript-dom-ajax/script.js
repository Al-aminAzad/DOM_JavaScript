// Write your code here
// let request = new XMLHttpRequest();
//console.log(request.readyState);
// request.open('GET','https://jsonplaceholder.typicode.com/posts',true);
//console.log(request.readyState);
// request.send();
// request.onreadystatechange = function handlerequest(){
//     if(request.readyState ===4 && request.status===200){
//         console.log(JSON.parse(request.responseText));
//     }
    // console.log(request.readyState);
// }

let loadPosts = document.getElementById('btn-click-me');
let box = document.getElementById('box');
let ul = document.createElement('ul');
loadPosts.addEventListener('click',()=>{
    let request = new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    request.send();
    request.onreadystatechange = function handlerequest(){
        if(request.readyState===4 && request.status===200){
            // console.log(JSON.parse(request.responseText));
            let data = JSON.parse(request.responseText);
            data.forEach(element => {
                let list = document.createElement('li');
                list.textContent=element.title;
                ul.appendChild(list);
            });
            box.insertAdjacentElement('beforeend',ul);
        }
    }
})