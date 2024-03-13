
// DECLARACION VARIABLES
let results = document.getElementById('info-desencriptar');
let imagen_results = document.getElementById('info-desencriptar').innerHTML;

let output_section = document.getElementById('output');

let input_area = document.getElementById('input-area');
let output_area = document.getElementById('output-area');

let btn_encriptar = document.getElementById('btn-encriptar');
let btn_desencriptar = document.getElementById('btn-desencriptar');
let btn_copiar = document.getElementById('btn-copiar');

let letras_a_cifrar = ['a', 'e', 'i', 'o', 'u'];
let letras_auxiliares = ['á', 'é', 'í', 'ó', 'ú'];
let cifrado = ['ai', 'enter', 'imes', 'ober', 'ufat'];



// inicializar
output_area.classList.add('hidden')
btn_copiar.classList.add('hidden')

btn_encriptar.classList.add('disabled');
btn_desencriptar.classList.add('disabled')

input_area.addEventListener('input', () => {
    if (input_area.value != '') {
        btn_encriptar.classList.remove('disabled');
        btn_desencriptar.classList.remove('disabled');
        return;
    }
    btn_encriptar.classList.add('disabled');
    btn_desencriptar.classList.add('disabled')

    return;
}
)

// La letra 'a' es convertida para 'ai'
// La letra 'e' es convertida para 'enter'
// La letra 'i' es convertida para 'imes'
// La letra 'o' es convertida para 'ober'
// La letra 'u' es convertida para 'ufat'


function reset() {
    results.innerHTML = '';
    input_area.value = '';
    output_area.classList.remove('hidden')
    btn_copiar.classList.remove('hidden')
    
    btn_desencriptar  .classList.add('disabled')
    btn_encriptar.classList.add('disabled')
}




//------------------------
// FUNCIONES
//------------------------


function cifrarTexto(texto) {
    for (index in letras_a_cifrar) {
        texto = texto.replaceAll(letras_a_cifrar[index], letras_auxiliares[index]);
    }
    for (index in letras_auxiliares) {
        texto = texto.replaceAll(letras_auxiliares[index], cifrado[index]);
    }
    return texto;
}

function descifrarTexto(texto) {
    for (index in cifrado) {
        texto = texto.replaceAll(cifrado[index], letras_auxiliares[index]);
    }
    for (index in letras_auxiliares) {
        texto = texto.replaceAll(letras_auxiliares[index], letras_a_cifrar[index]);
    }
    return texto;
}
function encriptar() {
    let input_text = input_area.value;
    if (input_text == '')
        return;

    output_area.value = cifrarTexto(input_text);
    reset();
    return;
}

function desencriptar() {
    let input_text = input_area.value;
    if (input_text == '')
        return;

    output_area.value = descifrarTexto(input_text);
    reset();
    return;
}

function copiar() {
    if (output_area.value == '')
        return;
    navigator.clipboard.writeText(output_area.value);
    alert('Se ha copiado el texto: ' + output_area.value);
    return;
}