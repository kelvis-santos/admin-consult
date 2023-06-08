import express from 'express';
import cors from 'cors';

import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/usersRoutes.js';

// Configurações do servidor
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à API do sistema');
});

// Rotas
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
