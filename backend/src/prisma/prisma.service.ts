import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

/**
 * PrismaService is a service that extends PrismaClient to manage database connections.
 * It implements OnModuleInit and OnModuleDestroy to handle connection lifecycle.
 * 
 */

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  /**
   * onModuleInit is called when the module is initialized.
   * It connects to the database using PrismaClient's $connect method.
   */

  async onModuleInit() {
    await this.$connect();
  }

  /**
   * onModuleDestroy is called when the module is destroyed.
   * It disconnects from the database using PrismaClient's $disconnect method.
   */
  
  async onModuleDestroy() {
    await this.$disconnect();
  }

}
