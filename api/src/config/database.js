import pkg from 'pg';
const { Pool } = pkg;

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'web_app_db',
});

const query = async (text, params) => {
    try {
        const result = await pool.query(text, params);
        return result.rows;
    } catch (error) {
        throw new Error(`Erro na consulta: ${error}`);
    }
};

export { query };
