const verticaClient = require('../../config/vertica-client');

async function getAllTransactionsByGender(id) {
    try {
        await verticaClient.connect();
    
        const query = `
        SELECT transaction_id, user_id, transaction_date, amount, description
        FROM user_transactions
        WHERE user_id = $1
        ORDER BY transaction_date DESC;
        `;
    
        const result = await verticaClient.query(query, [id]);
        return result.rows;
    
    } catch (err) {
        console.error('Error fetching transactions by gender:', err);
        throw new Error('Database query error');
    }
    finally {
        await verticaClient.end();
    }
};

async function getAllTransactionsByRegion(id) {
    try {
        await verticaClient.connect();
    
        const query = `
        SELECT transaction_id, user_id, transaction_date, amount, description
        FROM user_transactions
        WHERE user_id = $1
        ORDER BY transaction_date DESC;
        `;
    
        const result = await verticaClient.query(query, [id]);
        return result.rows;
    
    } catch (err) {
        console.error('Error fetching transactions by region:', err);
        throw new Error('Database query error');
    }
    finally {
        await verticaClient.end();
    }
};

module.exports = {
    getAllTransactionsByGender,
    getAllTransactionsByRegion,
};