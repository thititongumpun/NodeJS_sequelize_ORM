const db = require('../utils/db.config')

test('connect db', async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.log('Error')    
    }
})


