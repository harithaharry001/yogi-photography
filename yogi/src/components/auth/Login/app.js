const signin = document.querySelector("#sign-in-btn");
console.log(signin);
const signup = document.querySelector("#sign-up-btn");
console.log(signup)
const container = document.querySelector(".container");
console.log(container)

signup.addEventListener('click',()=>{
  container.classList.add("sign-up-mode");
});


signin.addEventListener('click',()=>{
  container.classList.remove("sign-up-mode");
})