const validateUserData = (req, res, next) => {
    const { email, password } = req.body;

    // Verificar se todos os campos obrigatórios estão presentes
    if (!email || !password) {
        return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
    }

    // Outras validações de dados, se necessário...

    next(); // Chama o próximo middleware ou a função do controlador
};

export { validateUserData };
