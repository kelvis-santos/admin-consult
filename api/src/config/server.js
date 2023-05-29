import express from 'express';
import { json } from 'body-parser';
// const { Pool } = require('pg');
import userRoutes from './routes/usersRoute';
import authRoutes from './routes/authRoute';
// eslint-disable-next-line no-unused-vars
import query from './config/database';

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
