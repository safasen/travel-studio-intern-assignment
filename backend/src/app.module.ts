import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RequestsModule } from './requests/requests.module';

/**
 * AppModule is the root module of the application.
 * It imports PrismaModule for database access and RequestsModule for handling requests.
 * It also defines the main controller and service for the application.
 * 
 */

@Module({
  imports: [PrismaModule, RequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
