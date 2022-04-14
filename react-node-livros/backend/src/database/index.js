const Sequelize = require('sequelize');

const connection = new Sequelize(    
    'd4c0io57ia5thp', 'epkycdjgfqnexd', '6a59b521e55d402d379076055a1f65a91ce0a74ca56dd66d9a24ef0a9e0e4aa0', 
    {
        host: 'ec2-44-194-4-127.compute-1.amazonaws.com',
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": {
                "require": true,
                "rejectUnauthorized": false
            }
        },
        define: {
            timestamps: false
        }
    }
);

// Models
const Livro = require('../models/Livro')

// Models Init
Livro.init(connection);

module.exports = connection;