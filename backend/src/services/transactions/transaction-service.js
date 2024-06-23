const { getVerticaClient } = require('../../config/vertica-config');

async function getAllTransactionsByGenre(id) {
    const verticaClient = await getVerticaClient();
    try {
        await verticaClient.connect();
    
        const query = `
            SELECT SUM(t.quantity) AS total_amount
            FROM Transactions t
            JOIN Users u ON t.user_id = u.user_id
            JOIN Games g ON t.game_id = g.game_id
            JOIN Genres ge ON g.genre_id = ge.genre_id
            WHERE ge.genre_id = ${id};   
        `;

        const result = await verticaClient.query(query);
        return result.rows[0];
    
    } catch (err) {
        console.error('Error fetching transactions by genre:', err);
        throw new Error('Database query error');
    }
    finally {
        await verticaClient.end();
    }
};

async function getAllTransactionsByRegion(id) {
    const verticaClient = await getVerticaClient();
    try {
        await verticaClient.connect();
    
        const query = `
            SELECT SUM(t.quantity) AS total_amount
            FROM Transactions t
            JOIN Users u ON t.user_id = u.user_id
            JOIN Regions r ON u.region_id = r.region_id
            WHERE r.region_id = ${id};    
        `;
    
        const result = await verticaClient.query(query);
        return result.rows[0];
    
    } catch (err) {
        console.error('Error fetching transactions by region:', err);
        throw new Error('Database query error');
    }
    finally {
        await verticaClient.end();
    }
};

module.exports = {
    getAllTransactionsByGenre,
    getAllTransactionsByRegion,
};