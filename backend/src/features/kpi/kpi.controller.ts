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
import { KpiCreationDto } from '../../common/dto/kpi-creation.dto';
import { AddValueDto } from '../../common/dto/add-value.dto';

// This controller manages all endpoints related to KPIs.
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
  @Get(':id/evolution')
  fetchKpiEvolution(@Param('id') id: number = 2, @Query('circleId') circleId: number) {
    return this.kpiService.fetchKpiEvolution(id, circleId);
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
      unitMin: ['Infinity', '-Infinity'].includes(kpiDetails.min_value)
        ? null
        : kpiDetails.min_value.toString(),
      unitMax: ['Infinity', '-Infinity'].includes(kpiDetails.max_value)
        ? null
        : kpiDetails.max_value.toString(),
      target: kpiDetails.kpi_target?.toString(),
      value: kpiDetails.latest_filled_value?.toString(),
      kpi_date: kpiDetails.kpi_date
    };
  }

  // To fetch details and constraints for a KPI
  @Get(':id/sum-and-target')
  async getKpiSumAndTarget(@Param('id') kpiId: number, @Query('circleId') circleId: number) {
    const kpiSumAndTarget = await this.kpiService.getKpiSumAndTarget(
      kpiId,
      circleId,
    );
    if (!kpiSumAndTarget) {
      throw new NotFoundException(
        `Sum values and targets for kpi: ${kpiId} and circle ${circleId} not found`,
      );
    }
    return kpiSumAndTarget;
  }

  @Put(':id/add-value')
  @UsePipes(new ValidationPipe())
  async addKpiValue(
    @Param('id') kpiId: number,
    @Query('userId') userId: number,
    @Body() dto: AddValueDto,
  ) {
    const result = await this.kpiService.addKpiValue(kpiId, userId, dto);

    if (!result) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error:
            result && result.error
              ? result.error.message
              : 'There was an error adding the KPI value',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return result;
  }

  // FOR LUNCH SESSION: Endpoint to fetch turnover data for electronic products by date.
  // Returns aggregated turnover or throws an error if unsuccessful.

  @Get('electronics-turnover')
  async getElectronicsTurnover() {
    try {
      return await this.kpiService.getElectronicsTurnover();
    } catch (err) {
      throw new HttpException(
        'Failed to fetch electronics turnover by date.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
