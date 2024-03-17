let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')

trilho.addEventListener('click', () =>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    h1.classList.toggle('dark')
})