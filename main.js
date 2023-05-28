document.addEventListener("DOMContentLoaded", function(){
    var boton_encriptar = document.getElementById("btn-en")
    boton_encriptar.addEventListener("click", function() {
        encriptar()
    })
})

document.addEventListener("DOMContentLoaded", function(){
    var boton_encriptar = document.getElementById("btn-des")
    boton_encriptar.addEventListener("click", function() {
        desencriptar()
    })
})

document.addEventListener("DOMContentLoaded", function(){
    var boton_encriptar = document.getElementById("btn-copiar")
    boton_encriptar.addEventListener("click", function() {
        copiar()
    })
})

document.addEventListener("DOMContentLoaded", function(){
    var boton_encriptar = document.getElementById("btn-eliminar")
    boton_encriptar.addEventListener("click", function() {
        eliminar()
    })
})

function encriptar(){
    var texto = document.getElementById("texto-des").value
    var resultado = ""

    for (var i = 0; i < texto.length; i++){
        var charCode = texto.charCodeAt(i)
        resultado += String.fromCharCode(charCode + 1)
    }

    document.getElementById("texto-en").textContent = resultado
}

function desencriptar(){
    var texto = document.getElementById("texto-en").textContent
    var resultado = ""

    for (var i=0; i < texto.length; i++){
        var charCode = texto.charCodeAt(i)
        resultado += String.fromCharCode(charCode - 1)
    }

    document.getElementById("texto-en").textContent = resultado
}

function copiar() {
    var resultado = document.getElementById("texto-en").textContent

    navigator.clipboard.writeText(resultado)
        .then(function() {
            Swal.fire({
                icon: "success",
                title: "¡Texto Copiado!",
                timer: 800
            })
        })
        .catch(function(error) {
            console.error("Error al copiar el texto:", error)
        })
}

function eliminar() {
    document.getElementById("texto-des").value = "";
    document.getElementById("texto-en").textContent = "";
}