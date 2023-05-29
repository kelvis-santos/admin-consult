import User, { find, findById, findOne } from '../models/User';

const usersController = {
    async listUsers(req, res) {
        try {
            // Buscar todos os usuários no banco de dados
            const users = await find();

            res.status(200).json(users);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            res.status(500).json({ message: 'Erro ao listar usuários' });
        }
    },

    async getUserById(req, res) {
        try {
            const { id } = req.params;

            // Buscar usuário pelo ID no banco de dados
            const user = await findById(id);

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            res.status(200).json(user);
        } catch (error) {
            console.error('Erro ao obter usuário:', error);
            res.status(500).json({ message: 'Erro ao obter usuário' });
        }
    },

    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;

            // Verificar se o usuário já existe no banco de dados
            const existingUser = await findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Usuário já existe' });
            }

            // Criar um novo usuário
            const newUser = new User({ name, email, password });
            await newUser.save();

            res.status(201).json(newUser);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ message: 'Erro ao criar usuário' });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            // Verificar se o usuário existe no banco de dados
            const user = await findById(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            // Atualizar os dados do usuário
            user.name = name;
            user.email = email;
            user.password = password;
            await user.save();

            res.status(200).json(user);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ message: 'Erro ao atualizar usuário' });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            // Verificar se o usuário existe no banco de dados
            const user = await findById(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            // Excluir o usuário
            await user.remove();

            res.status(200).json({ message: 'Usuário excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            res.status(500).json({ message: 'Erro ao excluir usuário' });
        }
    },
};

export default usersController;
