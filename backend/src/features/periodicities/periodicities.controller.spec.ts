import { Test, TestingModule } from '@nestjs/testing';
import { PeriodicitiesController } from './periodicities.controller';

describe('PeriodicitiesController', () => {
  let controller: PeriodicitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodicitiesController],
    }).compile();

    controller = module.get<PeriodicitiesController>(PeriodicitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
