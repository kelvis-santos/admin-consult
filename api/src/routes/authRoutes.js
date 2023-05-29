import { Router } from 'express';
import { register, login, forgotPassword } from '../controllers/authController';

const router = Router();

// Rota para cadastro de usuário
router.post('/register', register);

// Rota para login
router.post('/login', login);

// Rota para recuperação de senha
router.post('/forgot-password', forgotPassword);

export default router;
