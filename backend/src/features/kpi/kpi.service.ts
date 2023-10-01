import { Injectable } from '@nestjs/common';
import { KpiDto } from './kpi.dto';

@Injectable()
export class KpiService {
  processKpiData(data: KpiDto) {
    console.log('Received Data: ', data);
    return 'Data Received';
  }
}
