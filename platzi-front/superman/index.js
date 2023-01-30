const modal = document.querySelector('.modal');
const button = document.querySelector('#button');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const close = document.querySelector('.modal_container--close');


button.addEventListener('click', () =>{
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
button1.addEventListener('click', () =>{
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
button2.addEventListener('click', () =>{
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

close.addEventListener('click', () =>{
    console.log('le diste click');
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})
