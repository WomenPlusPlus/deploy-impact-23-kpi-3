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

  // To fetch constraints for KPI
  @Get(':id/unit-constraints')
  async getUnitConstraints(@Param('id') kpiId: number) {
    const constraints = await this.kpiService.getUnitConstraints(kpiId);

    if (!constraints) {
      throw new NotFoundException(
        `Constraints for KPI with id ${kpiId} not found`,
      );
    }

    return constraints;
  }
}
