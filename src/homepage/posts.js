export default class post{
    static postList = [];
    static currentId = 1;
    constructor(id,title, content){
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

