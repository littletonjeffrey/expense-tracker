const Transaction = require('../models/Transaction');

// description  Get all transactions
// route    GET /api/v1/transactions
// access   Public
exports.addTransaction = async (req, res, next) => {
    try {
      const { text, amount } = req.body;
  
      const transaction = await Transaction.create(req.body);
    
      return res.status(201).json({
        success: true,
        data: transaction
      }); 
    } catch (err) {
      if(err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
  
        return res.status(400).json({
          success: false,
          error: messages
        });
      } else {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
    }
  }
// description  Delete a transaction
// route    DELETE /api/v1/transactions
// access   Public
exports.deleteTransaction = async (req, res, next) =>
    res.send('DELETE transaction');