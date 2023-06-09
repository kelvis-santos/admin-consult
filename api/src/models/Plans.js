import { query as queryDb  } from '../config/database.js';

export default class Plans {
    constructor(id, name, price, description, active) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.active = active;
    }

    static async create(name, price, description) {
        const query = 'INSERT INTO plans (name, price, description, created_at, updated_at, active) VALUES ($1, $2, $3, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [name, price, description];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findPlans() {
        const query = 'SELECT * FROM plans';
        const result = await queryDb(query);
        return result;
    }

    static async findPlanById(id) {
        const query = 'SELECT * FROM plans WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result;
    }

    static async findByFilter(filter) {
        console.log(filter);
        const query = 'SELECT * FROM plans WHERE name = $1';
        const values = [filter.name];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByName(name) {
        const query = 'SELECT * FROM plans WHERE name = $1';
        const values = [name];
        const result = await queryDb(query, values);
        console.log(result);
        return result.length > 0 ? result[0] : false;
    }

    static async update(id, name, price, description) {
        const query = 'UPDATE plans SET name = $1, price = $2, description = $3, updated_at = current_timestamp WHERE id = $4 RETURNING *';
        const values = [name, price, description, id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'UPDATE plans SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async setInactive(id) {
        const query = 'UPDATE plans SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }
}