import { query as queryDb  } from '../config/database.js';

// Definição do modelo de usuário
export default class User {
    static async create(name, email, password) {
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, password];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findUsers() {
        const query = 'SELECT * FROM users';
        const result = await queryDb(query);
        return result.rows;
    }

    static async findUserById(id) {
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findByFilter(filter) {
        const query = 'SELECT * FROM users WHERE name = $1 OR email = $2';
        const values = [filter.name, filter.email];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await queryDb(query, values);
        return result.rows[0];
    }
};
