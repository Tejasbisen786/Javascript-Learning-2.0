
// Session Storage 

const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const dlt = document.getElementById("delete");

// function btnClick() {
//   sessionStorage.setItem("key1", input.value);
//   if (input.value == "") {
//     alert(` Value is empty !!! Please Enter The Value`);
//   } else {
//     alert(` Entered Value is : ${input.value}`);
//   }
// }

// btn.addEventListener("click", btnClick);
// dlt.addEventListener("click", () => {
  // console.log(sessionStorage.length); // finding the length
  // console.log(sessionStorage.key(1));  // access the values
//   console.log(sessionStorage.removeItem("key1"));
  // Removing the element from the sessonStorage
//   console.log(sessionStorage.clear());
  // Removing Keys And Pairs
// });

// console.log(sessionStorage.getItem("key1")); // accesing the sessionStorage Value
// if (sessionStorage.getItem("key1")) {
//   console.log(sessionStorage.getItem("key1")); // accesing the sessionStorage Value
// }


// **** Local Storage *******

function btnClick() {
    localStorage.setItem("key1", input.value);
    if (input.value == "") {
      alert(` Value is empty !!! Please Enter The Value`);
    } else {
      alert(` Entered Value is : ${input.value}`);
    }
  }

btn.addEventListener("click", btnClick);

dlt.addEventListener("click", () => {
    // console.log(sessionStorage.length); // finding the length
    // console.log(sessionStorage.key(1));  // access the values
    // console.log(localStorage.removeItem("key1"));
    // Removing the element from the sessonStorage
    console.log(localStorage.clear());
    // Removing Keys And Pairs
  });
  

  if (localStorage.getItem("key1")) {
  console.log(localStorage.getItem("key1")); // accesing the sessionStorage Value
}



// localStorage stored permanently until we deleted stuff
// but session storage data delted its scope eithin a tab if 