import * as taskService from "../services/taskService.js";

export async function createTask(req,res){
    try{
        const task = await taskService.createTask(req.body);
        res.status(201).json(task)
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

export async function getAllTasks(req,res){
    try{
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export async function getTaskById(req,res){
    try{
        const task = await taskService.findTask(req.params.id);
    if (!task){
        return res.status(404).json({message:"task not found"});
    }
    res.status(200).json(task)
    }
    catch (error){
        res.status(400).json({message:error.message});
    }
}

export async function updateTask(req,res){
    try{
        const task = await taskService.updateTask(req.params.id,req.body);
        if (!task){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

export async function deleteTaskById(req,res){
    try{
        const task = await taskService.deleteTaskById(req.params.id);
        if(!task){
            return res.status(404).json({message:"task not found"});
        }
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}