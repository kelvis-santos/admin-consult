import { Router } from 'express';
import {
    listUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/usersController.js';


const router = Router();

// Rota para listar todos os usuários
router.get('/', listUsers);

// Rota para obter um usuário pelo ID
router.get('/:id', getUserById);

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para atualizar um usuário pelo ID
router.put('/:id', updateUser);

// Rota para excluir um usuário pelo ID
router.delete('/:id', deleteUser);

export default router;
