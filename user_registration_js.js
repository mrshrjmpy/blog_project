
submit_btn = document.querySelector(".submit");
submit_btn.addEventListener("click", (event) => {
    event.preventDefault();
    password1 = document.querySelector(".password1").value;
    password2 = document.querySelector(".password2").value;

    if(password1 != password2)
    {
        console.log("in listener ifelse");
        alert("passwords do not match");
    }
})
