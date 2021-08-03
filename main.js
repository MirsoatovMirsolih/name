// let h1 = document.getElementById('js').innerText = "Hello world";
// let h2 = document.querySelector('#js').innerText = "Uzb";
let input = document.querySelectorAll('input[type="text"]');
console.log((input[1].value = "Kiriting"));
let date = document.querySelectorAll('input[type="date"]');
console.log((date.value = Number(10)));

let btn = document.querySelector("button");
btn.onclick()=
function cilick() {
  let wth = document.querySelector("input");
  wth.style.padding = "1rem 2rem";
  wth.style.border = "3px solid blue";
}

