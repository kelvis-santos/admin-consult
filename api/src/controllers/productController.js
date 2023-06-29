import Products from "../models/Products.js";

const getProducts = async (req, res) => {
    try {
        // Buscar todos os produtos no banco de dados
        const products = await Products.findProducts();
        console.log(products);
        if (products.length === 0) {
            products.push({ message: 'Nenhum produto encontrado' });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        res.status(500).json({ message: 'Erro ao listar produtos' });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar produto pelo ID no banco de dados
        const product = await Products.findProductById(id);

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Erro ao obter produto:', error);
        res.status(500).json({ message: 'Erro ao obter produto' });
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, description, image, quantity, availability } = req.body;
        // Verificar se o produto já existe no banco de dados
        const existingProduct = await Products.findByFilter({ name });
        if (existingProduct) {
            return res.status(400).json({ message: 'Produto já existe' });
        }

        // Criar um novo produto
        const newProduct = Products.create(name, price, description, image, quantity, availability);

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ message: 'Erro ao criar produto' });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, image, quantity, availability } = req.body;
        // Verificar se o produto existe no banco de dados
        const existingProduct = await Products.findProductById(id);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Atualizar o produto
        const updatedProduct = Products.update(id, name, price, description, image, quantity, availability);

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se o produto existe no banco de dados
        const existingProduct = await Products.findProductById(id);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Remover o produto
        const deletedProduct = Products.delete(id);

        res.status(200).json(deletedProduct);
    } catch (error) {
        console.error('Erro ao remover produto:', error);
        res.status(500).json({ message: 'Erro ao remover produto' });
    }
}

const updateAvailability = async (req, res) => {
    try {
        const { id } = req.params;
        const { availability } = req.body;
        // Verificar se o produto existe no banco de dados
        const existingProduct = await Products.findProductById(id);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Atualizar a disponibilidade do produto
        const updatedProduct = Products.updateAvailability(id, availability);

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Erro ao atualizar disponibilidade do produto:', error);
        res.status(500).json({ message: 'Erro ao atualizar disponibilidade do produto' });
    }
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateAvailability
}