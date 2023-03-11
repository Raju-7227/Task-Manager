// step 11:
const asyncWrapper = require("../middleware/async")
const Task = require("../models/Task")

// step12: 

const getAllTasks = asyncWrapper(async (req, res) => {

      const tasks = await Task.find({})  // to get all doumments
      res.status(200).json({ tasks })
})

// const createTask =  (req, res) => {
//     res.status(200).send("createTask Called")
// }

// step 11: add a document using await method , test it in postman and then refresh altas collection to check document store in database
const createTask = asyncWrapper(async (req, res) => {
      const task = await Task.create(req.body); //to create a instance on post
      res.status(201).json({ task })
})


// step 13: for getting data by ID
const getTask = asyncWrapper(async (req, res) => {
 
  const { id: taskID } = req.params // get id value
    const task = await Task.findOne({ _id: taskID }) // finding data for ID
    console.log(task)
    if (!task) {
      return res.status(404).json({msg: `No task with id : ${taskID}`})
  }
  res.status(200).json({ task })
} 

)

  // Step 14: 
  const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    console.log(task)
    if (!task) {
    return res.status(404).json({msg: `No task with id : ${taskID}`})
}
res.status(200).json({ task })
})


// step 15: 
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  // const name = req.body.name
  // const lname = req.body.lname
  // console.log(name,lname)

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body , { // req.body will get the data from json body 
    new: true, // it will return new values, otherwise we get old value at output 
    runValidators: true, // these option objects for validations , without them a user can update an empty value 
    overwrite: true, 
  })

  if (!task) {
    return res.status(404).json({msg: `No task with id : ${taskID}`})
  }
    res.status(200).json({ task })
}
)
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
