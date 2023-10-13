import {
  Controller,
  Get,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiDto } from './kpi.dto';
import { KpiCreationDto } from '../../common/dto/kpi-creation.dto';

@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

  @Put('submit')
  @UsePipes(new ValidationPipe())
  submitKpi(@Body() data: KpiDto) {
    return this.kpiService.processKpiData(data);
  }

  @Put('create')
  // @UsePipes(new ValidationPipe())
  async createKpi(@Body() createKpi: KpiCreationDto) {
    const result = await this.kpiService.createKpi(createKpi);

    if (!result.success) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: result.error?.message || 'There was an error creating the KPI',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      message: 'KPI successfully created!',
      kpiId: result.kpiId,
    };
  }
}
