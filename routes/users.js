import express from 'express';
const router = express.Router();

import { v4 as uuidv4 } from 'uuid';

const users = [
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

    res.send('THE GET ID ROUTE');
  
});

export default router;