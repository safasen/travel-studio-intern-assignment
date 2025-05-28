import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService],
  controllers: [RequestsController]
})
export class RequestsModule {}
