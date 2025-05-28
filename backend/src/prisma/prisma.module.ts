import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * PrismaModule is a global module that provides and exports
 * the PrismaService to be used across the application.
 * 
 * This allows other modules to inject PrismaService without
 * having to instantiate or manage PrismaClient manually.
 * 
 */

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
