import Plans from '../models/Plans.js';

const getPlans = async (req, res) => {
    try {
        // Buscar todos os planos no banco de dados
        const plans = await Plans.findPlans();
        console.log(plans);
        if (plans.length === 0) {
            plans.push({ message: 'Nenhum plano encontrado' });
        }

        res.status(200).json(plans);
    } catch (error) {
        console.error('Erro ao listar planos:', error);
        res.status(500).json({ message: 'Erro ao listar planos' });
    }
}

const getPlanById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar plano pelo ID no banco de dados
        const plan = await Plans.findPlanById(id);

        if (!plan) {
            return res.status(404).json({ message: 'Plano não encontrado' });
        }

        res.status(200).json(plan);
    } catch (error) {
        console.error('Erro ao obter plano:', error);
        res.status(500).json({ message: 'Erro ao obter plano' });
    }
}

const createPlan = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        // Verificar se o plano já existe no banco de dados
        const existingPlan = await Plans.findByFilter({ name });
        if (existingPlan) {
            return res.status(400).json({ message: 'Plano já existe' });
        }

        // Criar um novo plano
        const newPlan = Plans.create(name, price, description);

        res.status(201).json(newPlan);
    } catch (error) {
        console.error('Erro ao criar plano:', error);
        res.status(500).json({ message: 'Erro ao criar plano' });
    }
}

const updatePlan = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        // Verificar se o plano existe no banco de dados
        const existingPlan = await Plans.findPlanById(id);
        if (!existingPlan) {
            return res.status(404).json({ message: 'Plano não encontrado' });
        }

        // Atualizar o plano
        const updatedPlan = await Plans.update(id, name, price, description);

        res.status(200).json(updatedPlan);
    } catch (error) {
        console.error('Erro ao atualizar plano:', error);
        res.status(500).json({ message: 'Erro ao atualizar plano' });
    }
}

const deletePlan = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se o plano existe no banco de dados
        const existingPlan = await Plans.findPlanById(id);
        if (!existingPlan) {
            return res.status(404).json({ message: 'Plano não encontrado' });
        }

        // Excluir o plano
        const deletedPlan = await Plans.delete(id);

        res.status(200).json(deletedPlan);
    } catch (error) {
        console.error('Erro ao excluir plano:', error);
        res.status(500).json({ message: 'Erro ao excluir plano' });
    }
}

export {
    getPlans,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan
}