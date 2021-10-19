const usersEnLs = localStorage.getItem('usuarios'); // array de usuarios en LS (formateado a JSON)
const usuarios = JSON.parse(usersEnLs); // objeto parseado, lo tengo que usar en la f
//let loginEmail = document.querySelector('#email').value;
// let loginPassword = document.querySelector('#password').value;
let loginSs = document.getElementById('ss');

//================================================ validación de usuarios, guardado de sesión activa en LS

function validarCredenciales(pCorreo, pContraseña) {
    var listaDeUsuarios = usuarios;
    var bAcceso = false; //variable booleana
    for(var i = 0; i < listaDeUsuarios.length; i++) {
        if(pCorreo == listaDeUsuarios[i].email && pContraseña == listaDeUsuarios[i].password){
            bAcceso = true;
            localStorage.setItem('userActivo', listaDeUsuarios[i])
        }
    }
    return bAcceso;
};
let ingresar = document.querySelector('#ss');
// validar ingreso de user
function validarIngreso(){
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
}
ingresar.addEventListener('click', validarIngreso);
//========== redirección para crear cuenta nueva 
let crearCuenta = document.getElementById('newaccount');
crearCuenta.onclick = () =>{
    window.location.href = 'newuser.html'
};
// ============== Personalización de página de pefil para user 
let bienvenida = document.getElementById("welcome");
let h2 = document.createElement('h2');
const userActivoEnLs = localStorage.getItem('userActivo'); // array de usuario en LS (formateado a JSON)
const userActivoParseado = JSON.parse(userActivoEnLs);
h2.innerHTML = `<h2> Hola ${userActivoParseado}! </h2>`;
bienvenida.appendChild(h2);

let fichaUser = $('#fichaUser');
fichaUser.html(` 
hola
`);

$('crearUser').on('click', crearUsuario)