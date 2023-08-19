const btn = document.getElementById("btn");
const h1 = document.querySelector("h2");
const btn1 = document.getElementById("btn1");

count = 0;
function incrementValue() {
    if(count>=0)

  h1.innerText = `Count is ${count}`;
  count++;
}
function decrementValue(){
    if(count>=0)
    h1.innerText = `Count is ${count}`;
    count--;

}
btn.addEventListener("click", incrementValue);
btn1.addEventListener("click", decrementValue);
