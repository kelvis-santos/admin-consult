import User from '../models/User.js';
import jwt from 'jsonwebtoken';


  const register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // Verificar se o usuário já existe no banco de dados
      const existingUser = await User.findByEmail({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }

      // Criar um novo usuário
      const newUser = User.create({ name, email, password });
      await newUser.save();

      res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
      console.error('Erro no registro de usuário:', error);
      res.status(500).json({ message: 'Erro no registro de usuário' });
    }
  };

  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Verificar se o usuário existe no banco de dados
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      // Verificar se a senha está correta
      if (password !== user.password) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }

      // Realizar a autenticação do usuário
      // ...
      const token = generateToken(user);

      res.status(200).json({ message: 'Login realizado com sucesso', token });
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ message: 'Erro no login' });
    }
  };

  const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      // Verificar se o usuário existe no banco de dados
      const user = await User.findByEmail({ email });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      // Lógica para recuperação de senha
      // ...

      res.status(200).json({ message: 'Email de recuperação de senha enviado' });
    } catch (error) {
      console.error('Erro na recuperação de senha:', error);
      res.status(500).json({ message: 'Erro na recuperação de senha' });
    }
  };

function generateToken(user) {
  const token = jwt.sign({ id: user.id, email: user.email }, 'secreto', { expiresIn: '1h' });
  return token;
}


export {
  register,
  login,
  forgotPassword,
};
