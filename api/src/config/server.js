import express from 'express';
import json from 'body-parser';

import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/usersRoutes.js';

// Configurações do servidor
const app = express();
const PORT = 3000;


// Middleware para processar dados JSON
app.use(json());

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
