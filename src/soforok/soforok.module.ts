import { Module } from '@nestjs/common';
import { SoforokService } from './soforok.service';
import { SoforokController } from './soforok.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SoforokController],
  providers: [SoforokService, PrismaService],
})
export class SoforokModule {}
