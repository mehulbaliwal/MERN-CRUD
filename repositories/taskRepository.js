import task from "../models/task.js";

export async function createTask(taskData){
    return await task.create(taskData);
}

export async function getAllTasks(){
    return await task.findAll();
}

export async function findByTaskId(taskId){
    return await task.findByPk(taskId);
}

export async function deleteTaskById(taskId){
    const taskToDelete=await task.findByPk(taskId);
    if (taskToDelete){
        return await taskToDelete.destroy(taskToDelete);
    }
    return null;
}

export async function updateTask(taskId,taskData){
    const oldTask=await task.findByPk(taskId);
    if (oldTask){
        return await oldTask.update(taskData);
    }
    return null;
}