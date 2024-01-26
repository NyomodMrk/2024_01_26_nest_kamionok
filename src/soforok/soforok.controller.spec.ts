import { Test, TestingModule } from '@nestjs/testing';
import { SoforokController } from './soforok.controller';
import { SoforokService } from './soforok.service';

describe('SoforokController', () => {
  let controller: SoforokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoforokController],
      providers: [SoforokService],
    }).compile();

    controller = module.get<SoforokController>(SoforokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
