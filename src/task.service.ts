import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { Model } from 'mongoose';
import { ITask } from './Interface/task.interface';
import { error } from 'console';

@Injectable()
export class TaskService {
 constructor(
  @InjectModel(Task.name) private readonly taskModel:Model<TaskDocument>
 ){}

 async create(taskDto:ITask){
  const {content,title,userId}=taskDto
  const task=await this.taskModel.create({
    title,
    content,
    userId
  })
  return{
    status:HttpStatus.CREATED,
    error:false,
    message:"created Task",
    data:{task}
  }
 }

 async getUserTask(userId:string){
  const tasks=await this.taskModel.find({userId})
  return{
    status:HttpStatus.OK,
    error:false,
    data:{tasks}
  }
 }

}
