let count = 0;

const countEl = document.getElementById('countEl')
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

function increment(){
    count += 1
    countEl.textContent = count
}

function decrement(){
    count -= 1
    countEl.textContent = count
}

button1.addEventListener('click', ()=>{
    increment()
    console.log('added 1')
} )

