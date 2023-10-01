import { Module } from '@nestjs/common';
import { KpiController } from './kpi.controller';
import { KpiService } from './kpi.service';

@Module({
  controllers: [KpiController],
  providers: [KpiService],
})
export class KpiModule {}
