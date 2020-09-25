// import default object with a local camelCase name
import initData from '../data/data.js';

const loadFunction = initData.arr.forEach( (item, index)=> {
    const newNode = document.createElement('li');
    newNode.innerHTML = item;
    document.querySelector('#my-list').appendChild(newNode);
})

document.addEventListener('load',loadFunction);