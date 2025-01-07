const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`;

}   

const buttons = document.querySelectorAll('button');
for (let btn of buttons) {
    btn.addEventListener('click', colorize) 
        // btn.style.backgroundColor = makeRandomColor()
}

const h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
    h2.addEventListener('click', colorize) 
        // h2.style.backgroundColor = makeRandomColor()
    }


function colorize() {
    this.style.backgroundColor = makeRandomColor()
    this.style.color = makeRandomColor()
}