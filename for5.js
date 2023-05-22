const inputCantMeses = document.querySelector("#cant-meses");
const selectOpcionesMeses = document.querySelector("#opciones-suscripcion");


function generarOpciones() {
    let cantMeses = inputCantMeses.value;
    selectOpcionesMeses.innerHTML="";
    
    for (let i = 1; i <= cantMeses; i++) {
        selectOpcionesMeses.innerHTML += `
            <option value="">Meses ${i}</option>
        `;

    }
}