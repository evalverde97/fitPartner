let users = []; 
let NUname = document.getElementById('formNombre');
let NUemail = document.getElementById('formEmail');
let NUpassword = document.getElementById('formContraseña');
let NUweight = document.getElementById('formPeso');
let NUage = document.getElementById('formEdad');
let NUgender = $('#NUgender').val();
let NUheight = document.getElementById('formHeight');
let NUtarget = document.getElementById('formTarget');
let NUform = document.getElementById('formForm');

class User{
    constructor(){
        this.name = NUname;
        this.email = NUemail;
        this.password = NUpassword;
        this.gender = NUgender;
        this.id = 1;
        this.weight = NUweight;
        this.age = NUage;
        this.height = NUheight;
        this.target = NUtarget;
        this.form = NUform;
        this.waterIntake = waterIntake();
    }
    waterIntake(form, weight){
        if(form == high){Math.round(weight * 40)} else {Math.round(pWeight * 35)}
    }
}
let user0 = new User("Ezequiel", "ezequielvalverde97@gmail.com", "ezeTest","m");
let user1 = new User("Test", "test@test.com", "test", "m");
users.push(user0, user1);

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

function crearUsuario(){
   let NUser = new User(NUname,NUemail, NUpassword, NUgender, NUweight, NUage, NUheight, NUtarget, NUform);
   users.push(NUser);
}