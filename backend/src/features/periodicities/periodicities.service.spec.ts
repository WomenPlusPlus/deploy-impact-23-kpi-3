import { Test, TestingModule } from '@nestjs/testing';
import { PeriodicitiesService } from './periodicities.service';

describe('PeriodicitiesService', () => {
  let service: PeriodicitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodicitiesService],
    }).compile();

    service = module.get<PeriodicitiesService>(PeriodicitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
