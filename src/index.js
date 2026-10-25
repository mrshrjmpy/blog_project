import './style.css'
let submit_btn = document.querySelector(".submit");
submit_btn.addEventListener("click", (event) => {
    event.preventDefault();
    let password1 = document.querySelector(".password1").value;
    let password2 = document.querySelector(".password2").value;

    if(password1 != password2)
    {
        alert("passwords do not match");
    }
    else {
        window.open(
  'homepage.html' , "_self"
);
    }
})
