let errorNombre = document.getElementById('error-nombre');

const inputContraseña = document.getElementById('formContraseña');
inputContraseña.addEventListener("input", ()=> {
    let contraseña = inputContraseña.value;
    if (contraseña.length < 8 ){
        errorNombre.classList.add('error-show');
    } else {
        errorNombre.classList.remove('error-show');
    }
});