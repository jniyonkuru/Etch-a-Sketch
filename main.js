
let gridSize=16;
const message=document.querySelector('.message');
const container=document.querySelector('.container');
const div=document.createElement('div');
const button=document.querySelector('#btn');
div.style.width=`${400/gridSize}px`;
div.style.height=`${400/gridSize}px`;

div.classList.add('item');
button.addEventListener('click',updateCreate)
for(let i=0;i<gridSize*gridSize;i++){
    container.appendChild(div.cloneNode(true));
    
}
 const  grids=document.querySelectorAll('.item');

// create a  mouseover event handler function
function changeGridBackground(e){
    e.target.style.background='rgb(80, 77, 77)';
}
// add an eventListener to each grid item;

grids.forEach(div=>div.addEventListener('mouseover',changeGridBackground));

// a  function that update the grid size

function updateCreate(newSize){

    newSize=parseInt(prompt("Enter the the size of the grid  it should be between 0-100"));
    if(newSize<0||newSize>100){
     message.innerHTML="The size should be 0-100";
     return;
    }
    container.innerHTML="";
div.style.width=`${400/newSize}px`;
div.style.height=`${400/newSize}px`;
div.classList.add('item');
for(let i=0;i<newSize*newSize;i++){
    container.appendChild(div.cloneNode(true));
    
}
 const  grids=document.querySelectorAll('.item');

function changeGridBackground(e){
    e.target.style.background='rgb(80, 77, 77)';
}

grids.forEach(div=>div.addEventListener('mouseover',changeGridBackground));

}





