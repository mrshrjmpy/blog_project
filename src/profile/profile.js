import './profile.css'
import post from "../homepage/posts.js"




const post_container = document.querySelector("#post_container");

function printPostList(){
    let output = '';
    for(const postItem of post.postList){
        console.log(postItem);
        output += `<div class="post" id="${postItem.id}"> <div class="title">${postItem.title}</div>`
        output +=  " " + postItem.content.slice(0,500) + '... </div>'; 
    }

    post_container.innerHTML = output;
}

let homepage_link = document.getElementById("homepage_link");
homepage_link.addEventListener("click", () => {
    window.location.href = "./homepage.html";
})

printPostList();

console.log(post.postList);

let create_link = document.getElementById("create_link");
create_link.addEventListener("click", () => {
    window.location.href = "./create.html";
})


post_container.addEventListener("click", (event) => {
    let id = event.target.closest("[id]");

    window.location.href = "./postview.html";

})