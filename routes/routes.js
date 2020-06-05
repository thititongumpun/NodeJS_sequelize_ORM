const express = require('express')
const router = express.Router()

const db = require('../utils/db.config');
const Task = db.task;
const sequelize = db.sequelize;

//get all
router.get('/', async (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const tasks = await Task.findAll();
    res.json(tasks);
})

//get by 1
router.get('/:id', async (req, res) => { 
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const taskId = req.params.id;
    let tasks = {};
    if (taskId) {
        // use findByPK instead findById
        tasks = await Task.findByPk(taskId);
    }
    res.json(tasks);
})

//add post
router.post('/', async (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const temp = req.body;
    let newTemp = null;
    if (temp) {
        newTemp = await sequelize.transaction((t) => {
            return Task.create(temp, {transaction: t});
        });
    }
    res.json(newTemp);
})

//update
router.put("/:id", async (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const task = req.body;
    const id = req.params.id;
    let updateTask = null;
    if (task && id) {
        updateTask = await sequelize.transaction((t) => {
            return Task.update(
                task,
                { where: {id: id}}, 
                { transaction: t}
            );
        });
    }
    res.json(updateTask);
}); 

// router.put("/:_id", (req, res) => {
//     Task.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
//         if (err) {res.status(400).send(err)}
//         res.status(200).send("update complete");
//     })
// })

//delete
router.delete("/:id", async (req, res) => {
    console.log('body::==', req.body);
    console.log('params::==', req.params);
    const id = req.params.id;
    let taskDel =  null;
    if (id) {
        const task = await Task.findByPk(id);
        if (task) {
            taskDel = await task.destroy();
        }
    }
    res.json(taskDel);
});

module.exports = router;