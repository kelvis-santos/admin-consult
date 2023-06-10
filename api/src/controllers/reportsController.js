import Reports from "../models/Reports.js";

const getReports = async (req, res) => {
    try {
        // Buscar todos os relatórios no banco de dados
        const reports = await Reports.findReports();

        if (reports.length === 0) {
            reports.push({ message: 'Nenhum relatório encontrado' });
        }

        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar relatórios' });
    }
}

const getReportById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar relatório pelo ID no banco de dados
        const report = await Reports.findReportById(id);

        if (!report) {
            return res.status(404).json({ message: 'Relatório não encontrado' });
        }

        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter relatório' });
    }
}

const createReport = async (req, res) => {
    try {
        const { name, value } = req.body;
        // Verificar se o relatório já existe no banco de dados
        const existingReport = await Reports.findByFilter({ name });
        if (existingReport) {
            return res.status(400).json({ message: 'Relatório já existe' });
        }

        // Criar um novo relatório
        const newReport = Reports.create(name, value);

        res.status(201).json(newReport);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar relatório' });
    }
}

const updateReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, value } = req.body;
        // Verificar se o relatório existe no banco de dados
        const existingReport = await Reports.findReportById(id);
        if (!existingReport) {
            return res.status(404).json({ message: 'Relatório não encontrado' });
        }

        // Atualizar o relatório
        const updatedReport = Reports.update(id, name, value);

        res.status(200).json(updatedReport);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao atualizar relatório' });
    }
}

const deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se o relatório existe no banco de dados
        const existingReport = await Reports.findReportById(id);
        if (!existingReport) {
            return res.status(404).json({ message: 'Relatório não encontrado' });
        }

        // Excluir o relatório
        const deletedReport = Reports.delete(id);

        res.status(200).json(deletedReport);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao excluir relatório' });
    }
}

export {
    getReports,
    getReportById,
    createReport,
    updateReport,
    deleteReport
}