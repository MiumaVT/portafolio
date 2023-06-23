/*  e --> enter
    o --> ober
    i --> imes
    a --> ai
    u --> ufat
*/
function encriptar(){
    var texto = document.getElementById("textarea").value.toLowerCase();

    /*  i es para afectar tanto mayusculas como minusculas 
        g es para toda la linea u oracion
        m es para que afecte a miltiples lineas o parrados
    */
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");

    document.getElementsByClassName("img-persona")[0].style.display = "none";
    document.getElementsByClassName("mensaje","texto")[0].style.display = "none";
    document.getElementById("resultado").style.top = "100px";
    document.getElementById("resultado").innerHTML = txtCifrado;
    document.getElementsByClassName("boton-copiar")[0].style.display = "show";
    document.getElementsByClassName("boton-copiar")[0].style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("textarea").value.toLowerCase();
    
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");

    document.getElementsByClassName("img-persona")[0].style.display = "none";
    document.getElementsByClassName("mensaje")[0].style.display = "none";
    document.getElementById("resultado").style.top = "100px";
    document.getElementById("resultado").innerHTML = txtCifrado;
    document.getElementsByClassName("boton-copiar")[0].style.display = "show";
    document.getElementsByClassName("boton-copiar")[0].style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("Copiado en el portapapeles")
}