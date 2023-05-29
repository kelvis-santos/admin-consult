import { query as _query } from '../config/database';

// Definição do modelo de usuário
class User {
    static async create(name, email, password) {
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, password];
        const result = await _query(query, values);
        return result.rows[0];
    }

    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await _query(query, values);
        return result.rows[0];
    }
}

export default User;
