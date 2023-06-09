import UserPermissions from "../models/UserPermissions";

const getUserPermissions = async (req, res) => {
    try {
        // Buscar todas as permissões de usuário no banco de dados
        const userPermissions = await UserPermissions.findUserPermissions();

        if (userPermissions.length === 0) {
            userPermissions.push({ message: 'Nenhuma permissão de usuário encontrada' });
        }

        res.status(200).json(userPermissions);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar permissões de usuário' });
    }
}

const getUserPermissionById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar permissão de usuário pelo ID no banco de dados
        const userPermission = await UserPermissions.findUserPermissionById(id);

        if (!userPermission) {
            return res.status(404).json({ message: 'Permissão de usuário não encontrada' });
        }

        res.status(200).json(userPermission);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter permissão de usuário' });
    }
}

const createUserPermission = async (req, res) => {
    try {
        const { user_id, permission_id } = req.body;
        // Verificar se a permissão de usuário já existe no banco de dados
        const existingUserPermission = await UserPermissions.findByFilter({ user_id, permission_id });
        if (existingUserPermission) {
            return res.status(400).json({ message: 'Permissão de usuário já existe' });
        }

        // Criar uma nova permissão de usuário
        const newUserPermission = UserPermissions.create(user_id, permission_id);

        res.status(201).json(newUserPermission);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar permissão de usuário' });
    }
}

const updateUserPermission = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, permission_id } = req.body;
        // Verificar se a permissão de usuário existe no banco de dados
        const existingUserPermission = await UserPermissions.findUserPermissionById(id);
        if (!existingUserPermission) {
            return res.status(404).json({ message: 'Permissão de usuário não encontrada' });
        }

        // Atualizar a permissão de usuário
        const updatedUserPermission = UserPermissions.update(id, user_id, permission_id);

        res.status(200).json(updatedUserPermission);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao atualizar permissão de usuário' });
    }
}

const deleteUserPermission = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se a permissão de usuário existe no banco de dados
        const existingUserPermission = await UserPermissions.findUserPermissionById(id);
        if (!existingUserPermission) {
            return res.status(404).json({ message: 'Permissão de usuário não encontrada' });
        }

        // Remover a permissão de usuário
        const deletedUserPermission = UserPermissions.delete(id);

        res.status(200).json(deletedUserPermission);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao remover permissão de usuário' });
    }
}

export {
    getUserPermissions,
    getUserPermissionById,
    createUserPermission,
    updateUserPermission,
    deleteUserPermission
};