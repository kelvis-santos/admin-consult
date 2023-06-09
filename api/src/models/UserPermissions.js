import { query as queryDb  } from '../config/database.js';

export default class UserPermissions {
    constructor(id, user_id, permission_id, active) {
        this.id = id;
        this.user_id = user_id;
        this.permission_id = permission_id;
        this.active = active;
    }

    static async create(user_id, permission_id) {
        const query = 'INSERT INTO user_permissions (user_id, permission_id, created_at, updated_at, active) VALUES ($1, $2, current_timestamp, current_timestamp, true) RETURNING *';
        const values = [user_id, permission_id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async findUserPermissions() {
        const query = 'SELECT * FROM user_permissions';
        const result = await queryDb(query);
        return result;
    }

    static async findUserPermissionById(id) {
        const query = 'SELECT * FROM user_permissions WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result;
    }

    static async findByFilter(filter) {
        const query = 'SELECT * FROM user_permissions WHERE user_id = $1 AND permission_id = $2';
        const values = [filter.user_id, filter.permission_id];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByUserId(user_id) {
        const query = 'SELECT * FROM user_permissions WHERE user_id = $1';
        const values = [user_id];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async update(id, user_id, permission_id) {
        const query = 'UPDATE user_permissions SET user_id = $1, permission_id = $2, updated_at = current_timestamp WHERE id = $3 RETURNING *';
        const values = [user_id, permission_id, id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'UPDATE user_permissions SET active = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result.rows[0];
    }
}