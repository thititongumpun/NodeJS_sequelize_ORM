module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define(
        'task',
        {
            id: {
                type: Sequelize.INTEGER,
                field: '_id',
                primaryKey: true
            },
            task: {
                type: Sequelize.STRING,
                field: 'task'                
            },
            date: {
                type: Sequelize.DATE,
                field: 'date'
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return Task;
};