import { Router } from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateAvailability
} from "../controllers/productController.js";

const router = Router();

// Rota para listar produtos
router.get("/", getProducts);

// Rota para obter produto pelo ID
router.get("/:id", getProductById);

// Rota para criar produto
router.post("/", createProduct);

// Rota para atualizar produto
router.put("/:id", updateProduct);

// Rota para excluir produto
router.delete("/:id", deleteProduct);

// Rota para atualiar a disponibilidade do produto
router.patch("/:id", updateAvailability);

export default router;
