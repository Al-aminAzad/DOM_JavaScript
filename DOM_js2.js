// let root  = document.querySelector('#root');
// let jumbotornDiv = document.createElement("div");
// jumbotornDiv.className = 'jumbotron text-center';
// jumbotornDiv.setAttribute('id','my-jmb');
// root.appendChild(jumbotornDiv);
// let h1 = document.createElement('h1');
// h1.className = 'display-2 py-5';
// h1.innerHTML = '<strong>Hello</strong>';
// jumbotornDiv.appendChild(h1);

let nameFiled = document.querySelector('#namefield');
let ul = document.querySelector('#nameList');
nameFiled.addEventListener('keypress',(event)=>{
    if(event.keyCode ===13){
        let name = event.target.value;
        createLi(ul,name);
        event.target.value="";
    }
});
function createLi(ul,name){
    let li = document.createElement('li');
    li.className ='list-group-item  d-flex';
    li.innerHTML=name;
    let span = document.createElement('span');
    span.innerText='X';
    span.className ='ml-auto';
    span.style.color='red';
    span.style.cursor='pointer'
    li.appendChild(span);
    span.addEventListener('click',()=>{
        ul.removeChild(li);
    })
    ul.appendChild(li);
}
