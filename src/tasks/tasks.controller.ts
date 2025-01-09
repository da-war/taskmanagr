import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }
    @Get()
    getAllTasks():Task[] {
       return this.tasksService.getAllTheTasks()
    }
    @Post()
    createTask(@Body() body): Task{
        const task = this.tasksService.createTask(body.title, body.description);
        return task
    }

}
