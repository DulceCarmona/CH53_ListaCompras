let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let tablaListaCompras  = document.getElementById("tablaListaCompras")
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos"),
const productosTotal = document.getElementById("productosTotal"),
const precioTotal = document.getElementById("precioTotal"),




//Numeración de la primera columna de la tabla
let cont = 0;
let costoTotal = 0;
let totalEnProductos = 0;

// Validar que la cantidad no esté vacía y que sea mayor a 0
function validarCantidad() {
    if (txtNumber.value.trim().length) {
        return true;
    } // length <=0

    // Validar que el valor ingresado sea un número
    if (isNaN(txtNumber.value)) {
        return false;
    } //isNaN

    if (Number(txtNumber.value) <= 0) {
        return false;
    } // <=0

    //Mayor de 0
    return true;
} // ValidarCantidad

function getPrecio(){
    return Math.round((Math.random()*10000)) / 100;
} // getPrecio



btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    // Bandera, al ser true permite agregar los datos a la tabla
    let isValid = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtName.style.border = "";
    txtNumber.style.border = "";

    txtName.value = txtName.value.trim();
    txtNumber.value = txtNumber.value.trim();

    if (txtName.value.length < 3) {
        txtName.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML = "<strong>El Nombre del producto no es correcto.</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } //length >=3

    if (!validarCantidad()) {
        txtNumber.style.border = "solid medium red";
        alertValidacionesTexto.innerHTML += "<br/><strong>La cantidad no es correcta.</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } //validarCantidad

    if(isValid){ //si pasó las validaciones
        cont++;
        let precio = getPrecio();
        let row = ` <tr>
                    <td>${cont}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
                    </tr>`
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        costoTotal += precio * Number(txtNumber.value);
        precioTotal.innerText = "$ " + costoTotal.toFixed(2);
        totalEnProductos += Number(txtNumber.value);
        productosTotal.innerText = totalEnProductos;
        contadorProductos.innerText = cont;
        

        txtName.value = "";
        txtNumber.value = "";
        txtName.focus();
    }//if isValid


}); // btnAgregar

