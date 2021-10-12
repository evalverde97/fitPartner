const usersEnLs = localStorage.getItem('usuarios'); // array de usuarios en LS (formateado a JSON)
const usuarios = JSON.parse(usersEnLs); // objeto parseado, lo tengo que usar en la f
let loginEmail = document.getElementById('email').value;
let loginPassword = document.getElementById('password').value;
let loginSs = document.getElementById('ss');

//================================================ validación de usuarios, guardado de sesión activa en LS

function validarCredenciales(pCorreo, pContraseña) {
    var listaDeUsuarios = usuarios;
    var bAcceso = false; //variable booleana
    for(var i = 0; i < listaDeUsuarios.length; i++) {
        if(pCorreo == listaDeUsuarios[i].email && pContraseña == listaDeUsuarios[i].password){
            bAcceso = true;
            localStorage.setItem('userActivo', listaDeUsuarios[i].name)
        }
    }
    return bAcceso;
};

document.querySelector('#ss').addEventListener("click", iniciarSesion);
function iniciarSesion(){
    var sCorreo = '';
    var sContraseña = '';
    var bAcceso = false;
    sCorreo = document.querySelector('#email').value;
    sContraseña = document.querySelector('#password').value;
    bAcceso = validarCredenciales(sCorreo, sContraseña);
    if(bAcceso){
        window.location.href='perfil.html'
    } else{
        alert("Usuario no encontrado");
    }
};
let userActivoParse = JSON.parse(localStorage.getItem('userActivo'));

// ============== Personalización de página de pefil para user 
let bienvenida = document.getElementById("welcome");
let h2 = document.createElement("h2");
h2.innerHTML = `<h2> Hola ${userActivoParse}! </h2>`;
bienvenida.appendChild(h2);