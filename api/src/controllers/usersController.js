import User from '../models/User.js';


const listUsers = async (req, res) => {
    try {
        // Buscar todos os usuários no banco de dados
        const users = await User.findUsers();
        console.log(users);
        if (users.length === 0) {
            users.push({ message: 'Nenhum usuário encontrado' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ message: 'Erro ao listar usuários' });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar usuário pelo ID no banco de dados
        const user = await User.findUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao obter usuário:', error);
        res.status(500).json({ message: 'Erro ao obter usuário' });
    }
};

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, birthdate, phone, phone2, password, zip, number, adress, city, state, country } = req.body;
        // Verificar se o usuário já existe no banco de dados
        const existingUser = await User.findByFilter({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criar um novo usuário
        const newUser = User.create({
            firstname,
            lastname,
            email,
            birthdate,
            phone,
            phone2,
            password,
            zip,
            number,
            adress,
            city,
            state,
            country
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, email, birthdate, phone, phone2, password, zip, number, adress, city, state, country } = req.body;
        // Verificar se o usuário existe no banco de dados
        const user = await User.findUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.password = password;
        user.birthdate = birthdate;
        user.phone = phone;
        user.phone2 = phone2;
        user.zip = zip;
        user.number = number;
        user.adress = adress;
        user.city = city;
        user.state = state;
        user.country = country;

        const userUpdated = await User.update(user);

        res.status(200).json(userUpdated);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se o usuário existe no banco de dados
        const user = await User.findUserById(id);
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
};

export {
    listUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

