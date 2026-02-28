import { Router } from 'express';
import { deleteUser, getUsers, loginUser, registerUser, updateUser } from '../controllers/UserController';
import { verifyAdmin } from '../middlewares/authMiddleware';

const router = Router();


router.post('/login', loginUser);
router.post('/', verifyAdmin, registerUser);       
router.get('/', verifyAdmin, getUsers);            
router.put('/:id', verifyAdmin, updateUser);       
router.delete('/:id', verifyAdmin, deleteUser);   

export default router;