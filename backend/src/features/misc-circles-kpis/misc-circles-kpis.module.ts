import { Module } from '@nestjs/common';
import { MiscCirclesKpisController } from './misc-circles-kpis.controller';
import { MiscCirclesKpisService } from './misc-circles-kpis.service';

@Module({
  controllers: [MiscCirclesKpisController],
  providers: [MiscCirclesKpisService]
})
export class MiscCirclesKpisModule {}
