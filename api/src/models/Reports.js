import { query as queryDb } from '../config/database.js';

export default class Reports {
    static async findReports() {
        const query = 'SELECT * FROM reports';
        const result = await queryDb(query);
        return result;
    }

    static async findReportById(id) {
        const query = 'SELECT * FROM reports WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result;
    }

    static async findByFilter(filter) {
        console.log(filter);
        const query = 'SELECT * FROM reports WHERE name = $1';
        const values = [filter.name];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByName(name) {
        const query = 'SELECT * FROM reports WHERE name = $1';
        const values = [name];
        const result = await queryDb(query, values);
        console.log(result);
        return result.length > 0 ? result[0] : false;
    }

    static async create(name, value) {
        const query = 'INSERT INTO reports (name, value, created_at, updated_at, active) VALUES ($1, $2, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [name, value];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async update(id, name, value) {
        const query = 'UPDATE reports SET name = $1, value = $2, updated_at = current_timestamp WHERE id = $3 RETURNING *';
        const values = [name, value, id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'UPDATE reports SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }
}