import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { MessagePattern } from '@nestjs/microservices';
import { ITask } from './Interface/task.interface';


@Controller("task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}


  @MessagePattern("create_task")
  create(taskDto:ITask){
    return this.taskService.create(taskDto)
  }
  @MessagePattern("user_task")
  getTaskUser({userId}:{userId:string}){
    return this.taskService.getUserTask(userId)
  }
  @MessagePattern("delete_task")
  deleteTaskUser({title}:{title:string}){
  
    return this.taskService.deleteTask(title)
  }

}
