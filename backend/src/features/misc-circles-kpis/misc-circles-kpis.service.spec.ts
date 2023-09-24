import { Test, TestingModule } from '@nestjs/testing';
import { MiscCirclesKpisService } from './misc-circles-kpis.service';

describe('MiscCirclesKpisService', () => {
  let service: MiscCirclesKpisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiscCirclesKpisService],
    }).compile();

    service = module.get<MiscCirclesKpisService>(MiscCirclesKpisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
