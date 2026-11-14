import "./create.css"
import post from "../homepage/posts.js"

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let title = document.getElementById("title_text");
    let content = document.getElementById("content_text");
    let newPost = new post( title,content);
    post.postList.push(newPost);
    console.log(post.postList);
})

let profile_link = document.getElementById("profile_link");
profile_link.addEventListener("click", () => {
    window.location.href = "./profile.html";
})


let homepage_link = document.getElementById("homepage_link");
homepage_link.addEventListener("click", () => {
    window.location.href = "./homepage.html";
})