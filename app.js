let users = []; 
let NUname = document.getElementById('formNombre');
let NUemail = document.getElementById('formEmail');
let NUweight = document.getElementById('formPeso');
let NUage = document.getElementById('formEdad');
let NUheight = document.getElementById('formHeight');

class User{
    constructor(name, email, password, weight, height, age, goal){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = 1;
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.goal = goal;
    }
}
let user0 = new User("Ezequiel", "ezequielvalverde97@gmail.com", "ezeTest","M","1,70",24,"ganar peso");
let user1 = new User("Test", "test@test.com", "test", "M", "1,80", 30, "ganar peso");
users.push(user0, user1);

// seteo de usuario en LS, recupero del mismo para manipulación
localStorage.setItem("usuarios", JSON.stringify(users));

const modalContainer = document.getElementsByClassName('modal-container')[0];
const modalLoginAbrir = document.getElementById('loginIcon');
const modalLoginCerrar = document.getElementById('cerrarLogin');
modalLoginAbrir.addEventListener('click', ()=>{
    modalContainer.classList.add('modal-active')
});
modalLoginCerrar.addEventListener('click', ()=>{
    modalContainer.classList.remove('modal-active')
});
// 
const usuariosEnLs = localStorage.getItem('usuarios'); // array de usuarios en LS (formateado a JSON)
const usuarios = JSON.parse(usuariosEnLs); // objeto parseado, lo tengo que usar en la f
let loginSs = document.getElementById('ss');

//============ validación de usuarios, guardado de sesión activa en LS

function validarCredenciales(pCorreo, pContraseña) {
    var listaDeUsuarios = usuarios;
    var bAcceso = false; //variable booleana
    for(var i = 0; i < listaDeUsuarios.length; i++) {
        if(pCorreo == listaDeUsuarios[i].email && pContraseña == listaDeUsuarios[i].password){
            bAcceso = true;
            let userEnLs = JSON.stringify(listaDeUsuarios[i]);
            localStorage.setItem('userActivo', userEnLs);
        }
    }
    return bAcceso;
};
let userActivoEnLs = localStorage.getItem('userActivo'); // array de usuario en LS (formateado a JSON)
let userActivoParseado = JSON.parse(userActivoEnLs);

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
const ingresar = document.getElementById('ss');
ingresar.addEventListener('click', validarIngreso);

//========== redirección para crear cuenta nueva 
let crearCuenta = document.getElementById('newaccount');
crearCuenta.onclick = () =>{
    window.location.href = 'newuser.html'
};