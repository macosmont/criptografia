let textoC = ''
let textoTrocado = ''

function trocarVogais(){
    let vogais = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat",
    }
    
    const procurar = /[aeiou]/g;
    
    return textoC.replace(procurar, (match) => {
        return vogais[match];
    });

}

function texto(){
    textoC = document.querySelector ('input').value;
    textoC = textoC.toLowerCase()
    const textoComVogaisTrocadas = trocarVogais(textoC);

    const pElement = document.getElementById("textoCript");
    pElement.innerHTML = textoComVogaisTrocadas;
}

function descry(){
    const pElement = document.getElementById("textoCript");
    pElement.innerHTML = textoC;
}

function copiar(){
    
}