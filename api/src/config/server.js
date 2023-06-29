import express from 'express';
import cors from 'cors';

import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/usersRoutes.js';
import plansRoutes from '../routes/plansRoutes.js';
import reportsRoutes from '../routes/reportsRoutes.js';
import settinsRoutes from '../routes/settingsRoutes.js';
import userPermissionsRoutes from '../routes/userPermissionsRoutes.js';
import productsRoutes from '../routes/productsRoutes.js';

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
app.use('/plans', plansRoutes);
app.use('/reports', reportsRoutes);
app.use('/settings', settinsRoutes);
app.use('/user-permissions', userPermissionsRoutes);
app.use('/products', productsRoutes);


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
