// Start Writing Code Here
let showAlert = () => {
    alert('Alert by function call');
}

// function showAlert(){
//     alert('Alert by function call');
// }

const clickmebtn = document.getElementById('btn-click-me');
const box1 = document.getElementById('box1');

// clickmebtn.onclick = ()=>{
//     console.log('Button clicked');
// }

clickmebtn.onmouseover = () => {
    console.log('Mouseover button clik');
}
box1.addEventListener('click', () => {
    console.log('Box 1 is clicked');
})
clickmebtn.onclick = (event) => {
    event.stopPropagation();
    console.log('111 button clicked');
}
clickmebtn.addEventListener('click', () => {
    console.log('222 button clicked');
})

clickmebtn.onclick = (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log('333 button clicked');
}

const link = document.getElementById('link');
link.addEventListener('click', (event) => {
    event.preventDefault();
})

let box4 = document.getElementById('box4');
box4.addEventListener('click', (event) => {
    if (event.target.tagName = 'LI') {
        console.log('Clicked on a list item');
    }
})

let inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type = submit]');
// inputs[0].addEventListener('change', () => {
//     console.log('Change event on input');
// });
// inputs[0].addEventListener('change', (event) => {
//     console.log(event.target.value);
// })
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputs[0].value === '' || inputs[1].value === '') {
        alert('Inputs Feild can not be empty');
    } else {
        let name = inputs[0].value;
        let email = inputs[1].value;
        console.log(`Your name is ${name} and email is ${email}`);
    }
});
document.addEventListener('keydown', (event) => {
    console.log('Key down event');
    console.log(`Pressed key ${event.key}`);
    console.dir(event);
})
document.addEventListener('keypress', () => {
    console.log('Key press event');
})

document.addEventListener('keyup', () => {
    console.log('Key up event');
})
clickmebtn.addEventListener('mouseover', () => {
    console.log('Mouse upre gese');
});
clickmebtn.addEventListener('mouseout', () => {
    console.log('Mouse sore gese');
})
window.addEventListener('load', () => {
    console.log('Page is fully loaded');
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Your markup is loaded');
})

const img1 = document.querySelector('img[alt=valid-img]');
const img2 = document.querySelector('img[alt=invalid-img]');
img1.addEventListener('load', () => {
    console.log('First image is loaded');
})

// clickmebtn.onchange = ()=>{
//     console.log('Onchane click');
// }
// clickmebtn.onblur =()=>{
//     console.log('blur click');
// }