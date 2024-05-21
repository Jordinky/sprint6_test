import Usuari from "../model/usuari";

function getAllUsers(){
    const usuari = Usuari.findAll()
    console.log(usuari)
    return usuari
}

function createUser(user:any){
    var insertUser = Usuari.create(user)
    return insertUser
}
module.exports = {getAllUsers,createUser}