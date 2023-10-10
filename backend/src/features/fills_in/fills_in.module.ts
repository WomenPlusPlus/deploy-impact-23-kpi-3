import { Module } from '@nestjs/common';
import { FillsInService } from './fills_in.service';
import { FillsInController } from './fills_in.controller';

@Module({
  controllers: [FillsInController],
  providers: [FillsInService]
})
export class FillsInModule {}
