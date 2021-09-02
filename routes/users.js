import express from 'express';
const rounter = express.Router();


const users = [

    {
        irstName: "Md. Atikur",
        lastNamr: "Rahman",
        age: 25
    }

]



rounter.get('/',(req,res) => {

  res.send('Users Route')

});

export default rounter;