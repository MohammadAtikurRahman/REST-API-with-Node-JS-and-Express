import express from 'express';
import {createdUser, getUsers, getUser, deleteUser,updatedUser} 
from '../controllers/users.js';
const router = express.Router();



router.get('/', getUsers);
router.post('/', createdUser);
router.get('/:id',  getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updatedUser);

export default router;