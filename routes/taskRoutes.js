import * as taskController from "../controllers/taskControllers.js";
import { Router } from "express";

const taskRouter=Router();

taskRouter.get('/:id', taskController.getTaskById);
taskRouter.get('/',taskController.getAllTasks);
taskRouter.post('/',taskController.createTask);
taskRouter.delete('/:id',taskController.deleteTaskById);
taskRouter.put('/:id',taskController.updateTask)

export default taskRouter;