import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }
    @Get()
    getAllTasks():Task[] {
       return this.tasksService.getAllTheTasks()
    }
    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto): Task[]{
        const task = this.tasksService.createTask(createTaskDto);
        return this.tasksService.tasks
    }
    @Get("/:id")
    getTaskByID(@Param("id") id:string): Task{
        const task = this.tasksService.getTaskById(id);
        return task
    }

    @Delete("/:id")
    deleteTaskById(@Param("id") id:string): Task[]{
        const tasks = this.tasksService.deleteTaskById(id);
        return tasks
    }
}
