let users = []; 
let NUname = document.getElementById('formNombre');
let NUemail = document.getElementById('formEmail');
let NUpassword = document.getElementById('formContraseña');
let NUweight = document.getElementById('formPeso');
let NUage = document.getElementById('formEdad');
let NUheight = document.getElementById('formHeight');

class User{
    constructor(name, email, password, weight, height, age){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = 1;
        this.weight = weight;
        this.height = height;
        this.age = age;
    }
}
let user0 = new User("Ezequiel", "ezequielvalverde97@gmail.com", "ezeTest","M");
let user1 = new User("Test", "test@test.com", "test", "M");
users.push(user0, user1);

// seteo de usuario en LS, recupero del mismo para manipulación
localStorage.setItem("usuarios", JSON.stringify(users));


//////////// calcular las calorías que debe consumir para cumplir sus necesidades básicas
/*
function basicCalorieIntake(){
    var result = "";
    var wc = weight*10;
    var hc = height*6.25;
    var ac = 5*age;
    result = (wc + hc) - ac;
    if(gender=="M"){
       result + 5
    } else {
        result - 161
    }
}

/////////// calcular las calorías según su nivel de actividad física
function calorieIntake(){

}
*/
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
// crear usuario nuevo
/*let crearUser = document.getElementById('crearCuentaNueva');
crearUser.addEventListener('click', ()=>{
    let NUser = new User(NUname.value,NUemail.value, NUpassword.value, NUweight.value, NUheight.value, NUage.value);
    users.push(NUser);
    window.location.href = 'perfil.html';
 });
 */
// info para los datos al momento de crear un user

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

// usar variable userActivoParseado para acceder a las propiedades
const divBienvenida = $('#welcome')
divBienvenida.append(`
<h3>Bienvenido </h3>
`);