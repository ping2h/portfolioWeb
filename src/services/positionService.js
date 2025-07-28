import connection from '../db/db.js';
import axios from 'axios';

const getAll = async () => {
    try {
        const [data] = await connection.query('SELECT * FROM position');
        return data;
    } catch (error) {
        throw new Error('Database query failed: ' + error.message);
    }
};

const getStock = async () => {
    try {
        const [stock] = await connection.query('SELECT * FROM position WHERE type = 0;');
        return stock;
    } catch (error) {
        throw new Error('Database query failed: ' + error.message);
    }
};

const getBond = async () => {
    try {
        const [bond] = await connection.query('SELECT * FROM position WHERE type = 1;');
        return bond;
    } catch (error) {
        throw new Error('Database query failed: ' + error.message);
    }
};

const getCrypto = async () => {
    try {
        const [crypto] = await connection.query('SELECT * FROM position WHERE type = 2;');
        return crypto;
    } catch (error) {
        throw new Error('Database query failed: ' + error.message);
    }
};


export default {
    getAll,
    getStock,
    getBond,
    getCrypto,
};
