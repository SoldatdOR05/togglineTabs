// let btn = document.getElementById("btn");
const btns = document.getElementsByClassName("btn")

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let select = document.getElementById("select");


let buttom1 = true;
let buttom2 = true;
let buttom3 = true;

b1.addEventListener('click', (e) => {
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "black";
  }
  if (buttom1) {
    b1.style.backgroundColor = '#73B9FF';
    b1.style.color = '#ffffff';
  }
})

b2.addEventListener('click', (e) => {
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "black";
  }
  if (buttom2) {
    b2.style.backgroundColor = '#73B9FF';
    b2.style.color = '#ffffff';
  }
})

b3.addEventListener('click', (e) => {
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "black"
  }
  if (buttom3) {
    b3.style.backgroundColor = '#73B9FF';
    b3.style.color = '#ffffff';
  }
})

select.addEventListener('click', (e) => {

})