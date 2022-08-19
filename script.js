function encriptar() {
    var texto = document.querySelector("#txt1").value.toLowerCase(); 
    var textoCodificado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#txt2").value = textoCodificado;
    cambio();
}

function cambio() {
    document.querySelector("#oculto").style.display = "block";
    document.querySelector(".rectangulo").style.display = "none";
}

function desencriptar(){
    var texto = document.querySelector("#txt1").value.toLowerCase();
    var textoDecodificado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#txt2").value = textoDecodificado;
    cambio();
}

function copiar() {
    var textoXcopiar = document.querySelector("#txt2");
    navigator.clipboard.writeText(textoXcopiar.value);
    alert("Texto copiado ♡");
}