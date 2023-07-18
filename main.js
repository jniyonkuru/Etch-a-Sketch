
let gridSize=16;
const  slideBar=document.querySelector('input[type="range"]');
const sizeDisplay=document.querySelector('.size');
const message=document.querySelector('.message');
const container=document.querySelector('.container');
const div=document.createElement('div');
const button=document.querySelector('#btn');
div.style.width=`${400/gridSize}px`;
div.style.height=`${400/gridSize}px`;
sizeDisplay.textContent=`${slideBar.value}X${slideBar.value}`;
div.classList.add('item');
slideBar.addEventListener("input",updateGrid)

for(let i=0;i<gridSize*gridSize;i++){
    container.appendChild(div.cloneNode(true));
    
}
 const  grids=document.querySelectorAll('.item');

// create a  mouseover event handler function
function changeGridBackground(e){
    e.target.style.background='var(--primary-color)';
}
// add an eventListener to each grid item;

grids.forEach(div=>div.addEventListener('mouseover',changeGridBackground));

// a  function that update the grid size

function updateGrid(e){
    let newSize=e.target.value;
    sizeDisplay.textContent=`${newSize}X${newSize}`;
    container.innerHTML="";
    div.style.width=`${400/newSize}px`;
    div.style.height=`${400/newSize}px`;
    div.classList.add('item');
    for(let i=0;i<newSize*newSize;i++){
    container.appendChild(div.cloneNode(true));
    
}
 const  grids=document.querySelectorAll('.item');

function changeGridBackground(e){
    e.target.style.background='var(--primary-color)';
}

grids.forEach(div=>div.addEventListener('mouseover',changeGridBackground));

}






