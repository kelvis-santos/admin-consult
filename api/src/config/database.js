import { Pool } from 'pg';

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'seu_usuario',
    password: 'sua_senha',
    host: 'localhost',
    port: 5432,
    database: 'seu_banco_de_dados',
});

const query = async (text, params) => {
    try {
        const result = await pool.query(text, params);
        return result.rows;
    } catch (error) {
        throw new Error(`Erro na consulta: ${error}`);
    }
};

export default query;
