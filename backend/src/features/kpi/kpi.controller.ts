import {
  Controller,
  Get,
  Put,
  Query,
  Body,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiDto } from './kpi.dto';
import { KpiCreationDto } from '../../common/dto/kpi-creation.dto';

@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

  @Put('create')
  @UsePipes(new ValidationPipe())
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

  // To fetch KPI details for the gatekeeper
  @Get('gatekeeper-list')
  // Default to ID 3 if none is provided. For testing
  fetchGatekeeperKpis(@Query('gatekeeperId') gatekeeperId: number = 3) {
    return this.kpiService.fetchKpis(+gatekeeperId, 'gatekeeper');
  }

  // To fetch KPI details for the economist
  @Get('economist-list')
  fetchEconomistIdKpis(@Query('economistId') economistId: number = 2) {
    return this.kpiService.fetchKpis(economistId, 'economist');
  }
  @Get('/:id')
  fetchSngleKpi(@Query('economistId') economistId: number = 2) {
    return this.kpiService.fetchKpis(economistId, 'economist');
  }

  // To fetch details and constraints for a KPI
  @Get(':id/constraints')
  async getKpiDetailsWithConstraints(@Param('id') kpiId: number) {
    const kpiDetails = await this.kpiService.getKpiDetailsWithConstraints(
      kpiId,
    );
    if (!kpiDetails) {
      throw new NotFoundException(
        `Details and constraints for KPI with id ${kpiId} not found`,
      );
    }
    return {
      id: kpiDetails.kpi_id,
      name: kpiDetails.kpi_name,
      periodicity: kpiDetails.kpi_periodicity,
      unit: kpiDetails.kpi_unit,
      unitMin: ['Infinity', '-Infinity'].includes(kpiDetails.min_value) ? null : kpiDetails.min_value.toString(),
      unitMax: ['Infinity', '-Infinity'].includes(kpiDetails.max_value) ? null : kpiDetails.max_value.toString(),
      target: kpiDetails.kpi_target?.toString(),
      value: kpiDetails.latest_filled_value?.toString(),
    };
  }
}
