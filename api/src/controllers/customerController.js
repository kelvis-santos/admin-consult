import Customers from "../models/Customers.js";

const getCustomers = async (req, res) => {
    try {
        // Buscar todos os clientes no banco de dados
        const customers = await Customers.findCustomers();
        console.log(customers);
    
        if (customers.length === 0) {
            customers.push({ message: "Nenhum cliente encontrado" });
        }
    
        res.status(200).json(customers);
    } catch (error) {
        console.error("Erro ao listar clientes:", error);
        res.status(500).json({ message: "Erro ao listar clientes" });
    }
}

const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        // Buscar cliente pelo ID no banco de dados
        const customer = await Customers.findCustomerById(id);
    
        if (!customer) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
    
        res.status(200).json(customer);
    } catch (error) {
        console.error("Erro ao obter cliente:", error);
        res.status(500).json({ message: "Erro ao obter cliente" });
    }
}

const createCustomer = async (req, res) => {
    try {
        const { name, document, type, phone, adress } = req.body;
        // Verificar se o cliente já existe no banco de dados
        const existingCustomer = await Customers.findByFilter({ name });
        if (existingCustomer) {
            return res.status(400).json({ message: "Cliente já existe" });
        }
    
        // Criar um novo cliente
        const newCustomer = Customers.create(name, document, type, phone, adress);
    
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error("Erro ao criar cliente:", error);
        res.status(500).json({ message: "Erro ao criar cliente" });
    }
}

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, document, type, phone, adress, active } = req.body;
        // Verificar se o cliente existe no banco de dados
        const existingCustomer = await Customers.findCustomerById(id);
        if (!existingCustomer) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
    
        // Atualizar cliente
        const updatedCustomer = Customers.update(id, name, document, type, phone, adress, active);
    
        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        res.status(500).json({ message: "Erro ao atualizar cliente" });
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        // Verificar se o cliente existe no banco de dados
        const existingCustomer = await Customers.findCustomerById(id);
        if (!existingCustomer) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
    
        // Remover cliente
        const deletedCustomer = Customers.delete(id);
    
        res.status(200).json(deletedCustomer);
    } catch (error) {
        console.error("Erro ao remover cliente:", error);
        res.status(500).json({ message: "Erro ao remover cliente" });
    }
}

export {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};