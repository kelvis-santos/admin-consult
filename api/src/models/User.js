import { query as queryDb  } from '../config/database.js';

// Definição do modelo de usuário
export default class User {

    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static async create({ firstname, lastname, email, birthdate, phone, phone2, password, zip, number, adress, city, state, country }) {
        const query = 'INSERT INTO users (firstname, lastname, email, birthdate, phone, phone2, password, zip, number, adress, city, state, country, created_at, updated_at, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [
            firstname,
            lastname,
            email,
            birthdate,
            phone,
            phone2,
            password,
            zip,
            number,
            adress,
            city,
            state,
            country
        ];
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
        return result[0];
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

    static async update({ id, firstname, lastname, email, birthdate, phone, phone2, password, zip, number, adress, city, state, country }) {
        const query = 'UPDATE users SET firstname = $2, lastname = $3, password = $4, email = $5, birthdate = $6, phone = $7, phone2 = $8, zip = $9, number = $10, adress = $11, city = $12, state = $13, country = $14, updated_at = current_timestamp  WHERE id = $1 RETURNING *';
        const values = [id, firstname, lastname, password, email, birthdate, phone, phone2, zip, number, adress, city, state, country];
        const result = await queryDb(query, values);
        return result[0];
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
