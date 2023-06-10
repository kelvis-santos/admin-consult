import { Router } from 'express';
import {
    getReports,
    getReportById,
    createReport,
    updateReport,
    deleteReport
} from '../controllers/reportsController.js';

const router = Router();

// Rota para listar relatórios
router.get('/', getReports);

// Rota para obter relatório pelo ID
router.get('/:id', getReportById);

// Rota para criar relatório
router.post('/', createReport);

// Rota para atualizar relatório
router.put('/:id', updateReport);

// Rota para excluir relatório
router.delete('/:id', deleteReport);

export default router;