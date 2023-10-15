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
} from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiDto } from './kpi.dto';
import { KpiCreationDto } from '../../common/dto/kpi-creation.dto';

@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

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

  // To fetch KPI details for the gatekeeper
  @Get('gatekeeper-list')
  fetchGatekeeperKpis(@Query('gatekeeperId') gatekeeperId?: number) {
    if (!gatekeeperId) {
      gatekeeperId = 3; // Default to ID 3 if none is provided. For testing
    }

    return this.kpiService.fetchKpis(gatekeeperId, 'gatekeeper');
  }

  // To fetch KPI details for the economist
  @Get('economist-list')
  fetchEconomistIdKpis(@Query('economistId') economistId?: number) {
    if (!economistId) {
      economistId = 2; // Default to ID 2 if none is provided. For testing
    }

    return this.kpiService.fetchKpis(economistId, 'economist');
  }
}
