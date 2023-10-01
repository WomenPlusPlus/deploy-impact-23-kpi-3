import {
  Controller,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiDto } from './kpi.dto';

@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

  @Put('submit')
  @UsePipes(new ValidationPipe())
  submitKpi(@Body() data: KpiDto) {
    return this.kpiService.processKpiData(data);
  }
}
