import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { TcpOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule,{transport:Transport.TCP,options:{port:4003,host:'0.0.0.0'}} as TcpOptions);
  await app.listen();
  console.log('task service is runnig in : localhost:4003')
}
bootstrap();
