
let gridSize=40;
const container=document.querySelector('.container');
const div=document.createElement('div');
div.style.width=`${400/gridSize}px`;
div.style.height=`${400/gridSize}px`;
div.style.border='1px solid black';
div.classList.add('item');
for(let i=0;i<gridSize*gridSize;i++){
    container.appendChild(div.cloneNode(true));
    
}
 const  grids=document.querySelectorAll('.item');

// create a  mouseover event handler function
function changeGridBackground(e){
    e.target.style.background='#000';
}
// add an eventListener to each grid item;

grids.forEach(div=>div.addEventListener('mouseover',changeGridBackground));







