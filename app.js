
function encriptar() {
    let textoIngresado = document.getElementById("texto").value;
    var textocifrado = textoIngresado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
   
    if (textoIngresado.length !== 0) {
        if (/^[a-z]*$/.test(textoIngresado)) {
            document.querySelector(".receptor").value = textocifrado;
        } else {
            window.alert("Solo se aceptan letras minúsculas.");
        }
    } else {
        window.alert("NO HA INGRESADO NADA");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    var textocifrado =  texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    

    if(texto.length != 0){
        /*Este devuleve la informacion en el otro contenerdor*/
    document.querySelector(".receptor").value = textocifrado;

    }else{
        window.alert("NO SE A INGRESADO NADA")
    }
}
function portapapeles() {
    window.alert("A sido Copiado con exito");
    var origen = document.getElementById('texttarea');
    var destino = document.getElementById('texto');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');

}