const random = document.querySelectorAll('button')[0];
const parent = document.querySelector('.inner-container');
const circleEvent = document.querySelector('.circle');
const spans = document.querySelectorAll('span')
const btn = document.querySelector('.btn')
for(let i = 0 ; i<=80 ; i++) {
    let div = document.createElement('div');
    div.classList.add('block');
    parent.appendChild(div);
}
const blocks = document.querySelectorAll(".block");

function addEvent(){
    blocks.forEach((block)=>{
        block.style.backgroundColor =`#${Math.floor(Math.random()*68790).toString(16)}`;
        block.style.transform=`translate(${Math.random()*(100)}vw , ${Math.random()*100}vh) scale(${Math.floor(Math.random()*4)})`;
    })
}
addEvent()
random.addEventListener('click', addEvent)
btn.addEventListener('click' , ()=>{
    blocks.forEach((block)=>{
        block.classList.toggle('circleClass')
    })
    removeBtnActive()
})

function removeBtnActive(){
    spans.forEach(span=>span.classList.toggle('active'))
}


