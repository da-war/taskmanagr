import { CreateTaskDto } from './dto/create-task-dto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
     tasks:Task[] = []
    

    getAllTheTasks():Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title,description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task)
        return task;
    }

    getTaskById(id: string): Task{
        const task = this.tasks.find(task => task.id === id);
        return task;
    }

    deleteTaskById(id: string):Task[] {
        this.tasks = this.tasks.filter(task => task.id !== id);
return this.tasks
    }
}
