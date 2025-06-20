import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

/**
 * PrismaService Test Suite
 * This suite tests the PrismaService to ensure it is defined and can be instantiated correctly.
 * 
 */

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
