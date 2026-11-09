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

