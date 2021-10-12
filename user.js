let users = []; 
class User{
    constructor(name,email,password){
        this.name = name.toUpperCase();
        this.email = email;
        this.password = password;
        this.id = 1;
    }
}
let user0 = new User("Ezequiel", "ezequielvalverde97@gmail.com", "ezeTest");
let user1 = new User("Test", "test@test.com", "test");
users.push(user0, user1);

localStorage.setItem("usuarios", JSON.stringify(users));
