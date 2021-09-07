import express from 'express';
const router = express.Router();


const users = [

    {
        firstName: "Md. Atikur",
        lastNamr: "Rahman",
        age: 30
    },
    {
        firstName: "Md. Nazmul",
        lastNamr: "Ahsan",
        age: 30


    }

]



router.get('/',(req,res) => {

  console.log(users);

  res.send(users);
 // console.log(users[0].age);

  res.send('Users Route')

});


router.post('/',(req,res)=>{




});

export default router;