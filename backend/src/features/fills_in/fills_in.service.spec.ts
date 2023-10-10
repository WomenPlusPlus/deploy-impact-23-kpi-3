import { Test, TestingModule } from '@nestjs/testing';
import { FillsInService } from './fills_in.service';

describe('FillsInService', () => {
  let service: FillsInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FillsInService],
    }).compile();

    service = module.get<FillsInService>(FillsInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
