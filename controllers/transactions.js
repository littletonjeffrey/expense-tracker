const Transaction = require('../models/Transaction');

// description  Get all transactions
// route    GET /api/v1/transactions
// access   Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.sendStatus(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
// description  Add a transaction
// route    POST /api/v1/transactions
// access   Public
exports.addTransaction = async (req, res, next) =>
    res.send('POST transaction');

// description  Delete a transaction
// route    DELETE /api/v1/transactions
// access   Public
exports.deleteTransaction = async (req, res, next) =>
    res.send('DELETE transaction');