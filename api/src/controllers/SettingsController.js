import Settings from "../models/Settings.js";

const getSettings = async (req, res) => {
    try {
        // Buscar todas as configurações no banco de dados
        const settings = await Settings.findSettings();

        if (settings.length === 0) {
            settings.push({ message: 'Nenhuma configuração encontrada' });
        }

        res.status(200).json(settings);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar configurações' });
    }
}

const getSettingById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar configuração pelo ID no banco de dados
        const setting = await Settings.findSettingById(id);

        if (!setting) {
            return res.status(404).json({ message: 'Configuração não encontrada' });
        }

        res.status(200).json(setting);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter configuração' });
    }
}

const createSetting = async (req, res) => {
    try {
        const { name, value } = req.body;
        // Verificar se a configuração já existe no banco de dados
        const existingSetting = await Settings.findByFilter({ name });
        if (existingSetting) {
            return res.status(400).json({ message: 'Configuração já existe' });
        }

        // Criar uma nova configuração
        const newSetting = Settings.create(name, value);

        res.status(201).json(newSetting);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar configuração' });
    }
}

const updateSetting = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, value } = req.body;
        // Verificar se a configuração existe no banco de dados
        const existingSetting = await Settings.findSettingById(id);
        if (!existingSetting) {
            return res.status(404).json({ message: 'Configuração não encontrada' });
        }

        // Atualizar a configuração
        const updatedSetting = Settings.update(id, name, value);

        res.status(200).json(updatedSetting);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao atualizar configuração' });
    }
}

const deleteSetting = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se a configuração existe no banco de dados
        const existingSetting = await Settings.findSettingById(id);
        if (!existingSetting) {
            return res.status(404).json({ message: 'Configuração não encontrada' });
        }

        // Remover a configuração
        const deletedSetting = Settings.delete(id);

        res.status(200).json(deletedSetting);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao remover configuração' });
    }
}

export {
    getSettings,
    getSettingById,
    createSetting,
    updateSetting,
    deleteSetting
};