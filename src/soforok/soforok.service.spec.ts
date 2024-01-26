import { Test, TestingModule } from '@nestjs/testing';
import { SoforokService } from './soforok.service';

describe('SoforokService', () => {
  let service: SoforokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoforokService],
    }).compile();

    service = module.get<SoforokService>(SoforokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
