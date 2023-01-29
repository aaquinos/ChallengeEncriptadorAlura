const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".Mensaje");
const fondo = document.querySelector(".fondo");
const contenido = document.querySelector(".Contenido");
const btnCopiar = document.querySelector(".btnCopiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""
    fondo.style.opacity = "0.15";
    contenido.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
}

function btnDesencriptar(){
    const txtDesencriptado = desencriptar(textArea.value);
    mensaje.value = txtDesencriptado;
    textArea.value = ""
    fondo.style.opacity = "0.15";
    contenido.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
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

