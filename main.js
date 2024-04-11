const form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    validarNumeros();
});

function validarNumeros() {
    const campoA = parseInt(document.getElementById('formA').value);
    const campoB = parseInt(document.getElementById('formB').value);

    if (campoB > campoA) {
        alert("Sucesso");
    } else {
        alert("Erro");
    }
}