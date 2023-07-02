import { query as queryDb } from '../config/database.js';

export default class Products {
    constructor(id, name, price, description, image, quantity, availability) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
        this.availability = availability;
    }

    static async create(name, price, description, image, quantity, availability) {
        const query = 'INSERT INTO products (name, price, description, image, quantity, availability, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, current_timestamp, current_timestamp) RETURNING *';
        const values = [name, price, description, image, quantity, availability];
        const result = await queryDb(query, values);
        return result.rows;
    }

    static async findProducts() {
        const query = 'SELECT * FROM products';
        const result = await queryDb(query);
        return result;
    }

    static async findProductById(id) {
        const query = 'SELECT * FROM products WHERE id = $1';
        const values = [id];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByFilter(filter) {
        const query = 'SELECT * FROM products WHERE name = $1';
        const values = [filter.name];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async findByName(name) {
        const query = 'SELECT * FROM products WHERE name = $1';
        const values = [name];
        const result = await queryDb(query, values);
        console.log(result);
        return result.length > 0 ? result[0] : false;
    }

    static async update(id, name, price, description, image, quantity, availability) {
        const query = 'UPDATE products SET name = $1, price = $2, description = $3, image = $4, quantity = $5, availability = $6, updated_at = current_timestamp WHERE id = $7 RETURNING *';
        const values = [name, price, description, image, quantity, availability, id];
        const result = await queryDb(query, values);
        return result.length > 0 ? result[0] : false;
    }

    static async delete(id) {
        const query = 'UPDATE products SET availability = false WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await queryDb(query, values);
        return result[0];
    }

    static async updateAvailability(id, availability) {
        const query = 'UPDATE products SET availability = $1 WHERE id = $2 RETURNING *';
        const values = [availability, id];
        const result = await queryDb(query, values);
        return result[0];
    }
}