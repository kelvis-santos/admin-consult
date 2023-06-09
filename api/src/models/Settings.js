import { query as queryDb  } from '../config/database.js';

export default class Settings {
    constructor(id, name, value, active) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.active = active;
    }

    static async create(name, value) {
        const query = 'INSERT INTO settings (name, value, created_at, updated_at, active) VALUES ($1, $2, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [name, value];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findSettings() {
        const query = 'SELECT * FROM settings';
        const result = await queryDb(query);
        return result;
    }

    static async findSettingById(id) {
        const query = 'SELECT * FROM settings WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result;
    }

    static async findByFilter(filter) {
        const query = 'SELECT * FROM settings WHERE name = $1';
        const values = [filter.name];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByName(name) {
        const query = 'SELECT * FROM settings WHERE name = $1';
        const values = [name];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async update(id, name, value) {
        const query = 'UPDATE settings SET name = $1, value = $2, updated_at = current_timestamp WHERE id = $3 RETURNING *';
        const values = [name, value, id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'UPDATE settings SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async setInactive(id) {
        const query = 'UPDATE settings SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }
}