import * as taskRepository from "../repositories/taskRepository.js";

export async function createTask(taskData){
    return await taskRepository.createTask(taskData);
}

export async function findTask(taskId){
    return await taskRepository.findByTaskId(taskId);
}

export async function updateTask(taskId,taskData){
    return await taskRepository.updateTask(taskId,taskData);
}

export async function getAllTasks(){
    return await taskRepository.getAllTasks();
}

export async function deleteTaskById(taskId){
    return await taskRepository.deleteTaskById(taskId);
}