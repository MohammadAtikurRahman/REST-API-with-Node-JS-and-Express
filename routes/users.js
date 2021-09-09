import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
let users = [
    // {
    //     firstName: "Md. Atikur",
    //     lastNamr: "Rahman",
    //     age: 30
    // },
    // {
    //     firstName: "Md. Nazmul",
    //     lastNamr: "Ahsan",
    //     age: 30
    // }
]

router.get('/',(req,res) => {
  //console.log(users);
  res.send(users);
  
  //res.send('Users Route')

});
router.post('/', (req,res) => {
    const user = req.body;
//    const userId =- uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        users.push({ ...user, id: uuidv4() });
   //     console.log('Post Route Reached');
        res.send(`User with the name ${user.firstName} added to the database ` );
});

router.get('/:id', (req ,res) => {
  const  { id }  = req.params;
    //console.log(req.params); 
   const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
    //res.send(req.params);
   // res.send('THE GET ID ROUTE');
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id ==! id);
    res.send(`USer with the id  ${id} deleted from the database`);
})

router.patch('/:id', (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age  } =req.body;
    const user = users.find((user) => user.id  === id)
   
    if(firstName)  user.firstName = firstName; 
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`USer with the id  ${id} has been updated`);




    // users = users.filter((user) => user.id == !id);

    // res.send(`USer with the id  ${id} deleted from the database`);


})




export default router;