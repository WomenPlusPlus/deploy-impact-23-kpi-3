import { Test, TestingModule } from '@nestjs/testing';
import { MiscCirclesKpisController } from './misc-circles-kpis.controller';

describe('MiscCirclesKpisController', () => {
  let controller: MiscCirclesKpisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiscCirclesKpisController],
    }).compile();

    controller = module.get<MiscCirclesKpisController>(MiscCirclesKpisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
