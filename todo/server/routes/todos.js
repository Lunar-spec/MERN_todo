import express from "express"

import Todo from "../mongodb/models/todo.js"
import auth from "../middleware/auth.js"
import mongoose from "mongoose"

const router = express.Router()

router.delete('/:id',auth, async (req, res) => {
    const id = req.params.id;
    try {
        await Todo.findByIdAndRemove(id).exec();
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/',auth, async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTodo = new Todo({
            userId: req.body.userId,
            title,
            description
        })

        const savedTodo = await newTodo.save();

        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:userId',auth, async (req, res) => {
    try {
        const userId = req.params.userId;
        const todos = await Todo.find({ userId });
        // console.log(todos)
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router