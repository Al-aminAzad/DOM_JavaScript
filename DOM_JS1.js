// let h1= document.getElementById('my-h1');
// h1.innerHTML='My first Dom';
// console.log(h1);
//  let headers  = document.getElementsByTagName('h1');
//  console.log(headers);
//  let para = document.getElementsByClassName('lead');
//  console.log(para);
// let btn = document.getElementById('click-me');
// let colors = ['red','green','yellow','blue'];
// let i=0;

// btn.addEventListener('click',()=>{
//     let h1=document.getElementById('my-h1');
//     h1.innerHTML='This is new text';
//     h1.style.background = colors[i];
//     if(i>=colors.length){
//         i=0;
//     }else{
//         i++;
//     }
// })

// let btn = $('#click-me');
// let colors = ['blue','yellow','green','red'],i=0;
// btn.addEventListener('click',()=>{
//     let h1 = $('#my-h1');
//     h1.innerHTML = 'This is another text';
//     h1.style.background =colors[i];
//     if(i>=colors.length){
//         i=0;
//     }else{
//         i++;
//     }
// })

// function $(selector)
// {
//     return document.querySelector(selector);
// }
const btn = document.getElementById('mybtn');
const para = document.getElementById('para');
let isShown = false;
btn.addEventListener('click', () => {
    if (isShown) {
        para.style.visibility = 'hidden';
        isShown = false;
        btn.innerHTML = 'Show';
    } else {
        para.style.visibility = 'visible';
        isShown = true;
        btn.innerHTML = 'Hide';
    }
})