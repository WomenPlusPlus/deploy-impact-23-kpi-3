import { Test, TestingModule } from '@nestjs/testing';
import { FillsInController } from './fills_in.controller';
import { FillsInService } from './fills_in.service';

describe('FillsInController', () => {
  let controller: FillsInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FillsInController],
      providers: [FillsInService],
    }).compile();

    controller = module.get<FillsInController>(FillsInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
