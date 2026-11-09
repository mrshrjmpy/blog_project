export default class post{
    static postList = [];
    static currentId = 1;
    constructor(title, content){
        this.id = post.currentId;
        this.title = title;
        this.content = content;
        post.currentId++;
    }
}

