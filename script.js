let text = '';
let final = document.getElementById('final')
let container = document.getElementById('text-encripted-final');
console.log(window.innerWidth)
const configFinal = () => {
    container.style.display = 'block'
    container.style.paddingTop = '20px'
}

document.getElementById('encripted-input').addEventListener('keyup' , (event) => {
    text = event.target.value;
    if (window.innerWidth > 768){
        document.getElementById('img').style.display = 'block'
    }
    document.getElementById('text-info').style.display = 'block'
    final.innerHTML = 'Ingresa el texto que desea Encriptar o Desencriptar'
})

const encriptar = () => {
    if (text === ''){
        alert('debe ingresar un texto')
        return
    }
    text = text.replace('e' , 'enter');
    text = text.replace('i' , 'imes');
    text = text.replace('a' , 'ai');
    text = text.replace('o' , 'over');
    text = text.replace('u' , 'uffat');
    document.getElementById('text-info').style.display = 'none'
    document.getElementById('img').style.display = 'none'
    final.innerHTML = text
    configFinal()
}

const desencriptar = () => {
    if (text === ''){
        alert('debe ingresar un texto')
        return
    }
    text = text.replace('enter','e');
    text = text.replace('imes', 'i');
    text = text.replace('ai', 'a');
    text = text.replace('over', 'o');
    text = text.replace('uffat', 'u');
    document.getElementById('text-info').style.display = 'none'
    document.getElementById('img').style.display = 'none'
    final.innerHTML = text
    configFinal()
}