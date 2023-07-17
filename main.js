
let gridSize=50;
const container=document.querySelector('.container');
const div=document.createElement('div');
div.style.width=`${600/gridSize}px`;
div.style.height=`${600/gridSize}px`;
div.style.border='1px solid black';
div.classList.add('item');
for(let i=0;i<gridSize*gridSize;i++){
    container.appendChild(div.cloneNode(true));
    
}