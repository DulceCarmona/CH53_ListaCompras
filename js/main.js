let txtName = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let  = document.getElementById("");


btnAgregar.addEventListener("click", function(event){
    event.preventDefault();

    txtName.value = txtName.value.trim();
    txtNumber.value = txtNumber.value.trim();

    if(txtName.value.lenght <3){
        txtName.style.border="solid medium red";
        alertValidacionesTexto="<strong>E1 NNombre del producto no es correcto.<strong>";
        alertValidaciones.style.display="block";

    } //lenght >=3


}); // btnAgregar