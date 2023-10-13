import { Injectable } from '@nestjs/common';
import { KpiDto } from './kpi.dto';
import { DbConnectionService } from '../../core/db-connection/db-connection.service';
import { PostgrestError } from '@supabase/supabase-js';
import { KpiCreationDto } from './dto/kpi-creation.dto';

@Injectable()
export class KpiService {
  constructor(private service: DbConnectionService) {}

  processKpiData(data: KpiDto) {
    console.log('Received Data: ', data);
    return 'Data Received';
  }

  async createKpi(
    kpiData: KpiCreationDto,
  ): Promise<{ success: boolean; kpiId?: number; error?: any }> {
    const { circles, title, periodicity, unit, archived_at, closed_at } =
      kpiData;

    // Call the RPC function to create a new KPI entry
    const { data: kpiId, error } = await this.service.db.rpc('create_new_kpi', {
      kpi_title: title,
      kpi_periodicity: periodicity,
      kpi_unit: unit,
      kpi_archived_at: archived_at,
      kpi_closed_at: closed_at,
      circle_ids: circles,
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, kpiId };
  }
}
