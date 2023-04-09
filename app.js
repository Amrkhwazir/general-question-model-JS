let miniBox = document.querySelector('.miniBox')
let plusBtn = document.querySelector('.plusBtn')
let plusBtn1 = document.querySelector('.plusBtn1')
let plusBtn2 = document.querySelector('.plusBtn2')
let articleBox1 = document.querySelector('.articleBox1')
let articleBox2 = document.querySelector('.articleBox2')

plusBtn.addEventListener('click', () => {
    miniBox.classList.toggle("showPara")
    articleBox1.classList.remove("showPara")
    articleBox2.classList.remove("showPara")
    
})

plusBtn1.addEventListener('click', () => {
    articleBox1.classList.toggle("showPara")
    miniBox.classList.remove("showPara")
    articleBox2.classList.remove("showPara")
})
plusBtn2.addEventListener('click', () => {
    articleBox2.classList.toggle("showPara")
    articleBox1.classList.remove("showPara")
    miniBox.classList.remove("showPara")
})