import connection from '../db/db.js';
// dababase connection

const getAssetList = async () => {
    try {
        const [data] = await connection.query('SELECT symbol, name, type FROM assetList');
        return data;
    } catch (error) {
        throw new Error('Database query failed(getAssetList): ' + error.message);
    }
};


export default {
    getAssetList
};
