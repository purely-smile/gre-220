const fs = require("fs");

const data = fs.readFileSync('./data/base-data','utf8');
const arr = data.trim().split(/\n+/);
const answer = [];
let index = -1;
arr.forEach(val=>{
    if(val.match('Passage')){
        index++;
        answer.push([]);
    }else{
        answer[index].push(val);
    }
})

fs.writeFileSync('./data.json',JSON.stringify(answer),'utf8');