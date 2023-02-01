const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".Mensaje");
const fondo = document.querySelector(".fondo");
const contenido = document.querySelector(".Contenido");
const btnCopiar = document.querySelector(".btnCopiar");
let modalIndex = document.getElementById('modal');
let closeModal = document.getElementById('close');
let modalH2 = document.getElementById('modal-h2');
let modalp = document.getElementById('modal-p');

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const eliminarAcentos = (str)=>{
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    }
    const textoEncriptado = encriptar(eliminarAcentos(textArea.value));
    mensaje.value = textoEncriptado;
    textArea.value = ""
    fondo.style.opacity = "0.15";
    contenido.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
    modalH2.innerHTML = "¡Texto encriptado exitósamente!";
    modalp.innerHTML = "Su texto ha sido encriptado, para desencriptarlo puede copiar el texto encriptado con el botón 'Copiar' y luego pegarlo en el cuadro para desencriptar."
    modalIndex.style.visibility = "visible";
}
closeModal.onclick = function(){
    modalIndex.style.visibility = "hidden"
}
modalIndex.onclick = function(){
    modalIndex.style.visibility = "hidden"
}

function btnDesencriptar(){
    const eliminarAcentos = (str)=>{
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    }
    const txtDesencriptado = desencriptar(eliminarAcentos(textArea.value));
    mensaje.value = txtDesencriptado;
    textArea.value = ""
    fondo.style.opacity = "0.15";
    contenido.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
    modalH2.innerHTML = "¡Texto desencriptado exitósamente!";
    modalp.innerHTML = "Su texto ha sido desencriptado. Gracias por utilizar nuestro servicio de encriptación y desencriptación"
    modalIndex.style.visibility = "visible";
}

function copiarPortapapeles(){
    var mensajeCopiado = mensaje.value;
    navigator.clipboard.writeText(mensajeCopiado)
        .then(()=>{
            console.log("Texto copiado al portapapeles");
        })
        .catch(err =>{
            console.error("Algo ha salido mal", err);
        })
    mensaje.value = "";
    fondo.style.opacity = "1";
    contenido.style.visibility = "visible";
    btnCopiar.style.visibility = "hidden";
}

function encriptar(textoPlano){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoPlano = textoPlano.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoPlano.includes(matrizCodigo[i][0])){
            textoPlano = textoPlano.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return textoPlano;
}

function desencriptar(txtEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    txtEncriptado = txtEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(txtEncriptado.includes(matrizCodigo[i][1])){
            txtEncriptado = txtEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return txtEncriptado;
}

