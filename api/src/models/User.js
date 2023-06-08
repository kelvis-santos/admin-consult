import { query as queryDb  } from '../config/database.js';

// Definição do modelo de usuário
export default class User {

    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static async create(name, email, password) {
        const query = 'INSERT INTO users (name, email, password, created_at, updated_at, active) VALUES ($1, $2, $3, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [name, email, password];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findUsers() {
        const query = 'SELECT * FROM users';
        const result = await queryDb(query);
        return result;
    }

    static async findUserById(id) {
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result;
    }

    static async findByFilter(filter) {
        console.log(filter);
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [filter.email];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await queryDb(query, values);
        console.log(result);
        return result.length > 0 ? result[0] : false;
    }

    static async update(id, name, email, password) {
        const query = 'UPDATE users SET name = $1, email = $2, password = $3, updated_at = current_timestamp WHERE id = $4 RETURNING *';
        const values = [name, email, password, id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'UPDATE users SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async setInactive(id) {
        const query = 'UPDATE users SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }
};
