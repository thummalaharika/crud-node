import {v4 as uuidv4} from 'uuid';
let users =[];

export const createUser = (req,res)=>{
    const user = req.body;
    users.push({ ...user, id:uuidv4() });
    res.send(`user with the name ${user.name} added to the database`);
}
export const getUsers = (req,res)=>{
    res.send(users);
}
export const getUser = (req,res)=>{
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}
export const deleteUser = (req,res)=>{
    const {id} = req.params ;
    users = users.filter((user) => user.id !== id);
    res.send(`user with the id ${id} is deleted from database`);

}
export const updateUser = (req,res) => {
    const {id} =req.params;
    const {name, age} = req.body;
    
    const user = users.find((user) => user.id ===id);

    if(name){
        user.name = name;
    }
    if(age){
        user.age = age;
    }
    res.send (`user with the id ${id} is updated`);
}