const inputCantMeses = document.querySelector("#cant-meses");
const selectOpcionesMeses = document.querySelector("#opciones-suscripcion");


function generarOpciones() {
    let cantMeses = inputCantMeses.value;
    selectOpcionesMeses.innerHTML="";

    for (let i = 1; i <= cantMeses; i++) {
    
    if (i==1) {
        selectOpcionesMeses.innerHTML += `
            <option value="">Seleccione</option>
        `;
            
        }
        selectOpcionesMeses.innerHTML += `
            <option value="">Meses ${i}</option>
        `;

    }
}