import { query as queryDb } from '../config/database.js';

export default class Customers {
    constructor(id, name, document, type, phone, adress, active) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.type = type;
        this.phone = phone;
        this.adress = adress;
        this.active = active;
    }


    static async findCustomers() {
        const query = 'SELECT * FROM customers';
        const result = await queryDb(query);
        return result;
    }

    static async findCustomerById(id) {
        const query = 'SELECT * FROM customers WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result;
    }

    static async findByFilter(filter) {
        console.log(filter);
        const query = 'SELECT * FROM customers WHERE name = $1';
        const values = [filter.name];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByName(name) {
        const query = 'SELECT * FROM customers WHERE name = $1';
        const values = [name];
        const result = await queryDb(query, values);
        console.log(result);
        return result.length > 0 ? result[0] : false;
    }

    static async create(name, document, type, phone, adress) {
        const query = 'INSERT INTO customers (name, document, type, phone, adress, created_at, updated_at, active) VALUES ($1, $2, $3, $4, $5, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [name, document, type, phone, adress];
        const result = await queryDb(query, values);
        return result[0];
    }

    static async update(id, name, document, type, phone, adress, active) {
        const query = 'UPDATE customers SET name = $1, document = $2, type = $3, phone = $4, adress = $5, updated_at = current_timestamp, active = $6 WHERE id = $7 RETURNING *';
        const values = [id, name, document, type, phone, adress, active];
        const result = await queryDb(query, values);
        return result[0];
    }

    static async delete(id) {
        const query = 'UPDATE customers SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result[0];
    }
}