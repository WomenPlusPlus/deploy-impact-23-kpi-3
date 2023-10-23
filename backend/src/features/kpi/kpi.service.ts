import { Injectable } from '@nestjs/common';
import { KpiDto } from './kpi.dto';
import { DbConnectionService } from '../../core/db-connection/db-connection.service';
import { KpiCreationDto } from '../../common/dto/kpi-creation.dto';
import { PostgrestError } from '@supabase/postgrest-js';
import { AddValueDto } from '../../common/dto/add-value.dto';

@Injectable()
export class KpiService {
  constructor(private service: DbConnectionService) {}

  async createKpi(
    kpiData: KpiCreationDto,
  ): Promise<{ success: boolean; kpiId?: number; error?: any }> {
    const { circles, title, periodicity, unit, archived_at, closed_at, target_year  } =
      kpiData;

    // Call the RPC function to create a new KPI entry
    const { data: kpiId, error } = await this.service.db.rpc('create_new_kpi', {
      kpi_title: title,
      kpi_periodicity: periodicity,
      kpi_unit: unit,
      kpi_archived_at: archived_at,
      kpi_closed_at: closed_at,
      circle_ids: circles,
      target_year
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, kpiId };
  }

  // Call the RPC function to fetch KPI details
  async fetchKpis(
    userId: number,
    userType: 'gatekeeper' | 'economist',
  ): Promise<any[]> {
    try {
      const rpcMethodDict = {
        gatekeeper: 'fetch_gatekeeper_kpis',
        economist: 'fetch_economist_kpis',
      };
      const { data, error } = await this.service.db.rpc(
        rpcMethodDict[userType],
        {
          [`${userType}_user_id`]: userId,
        },
      );

      if (error) {
        console.error('Error:', JSON.stringify(error, null, 2));
        throw new Error(
          `Error fetching ${userType} KPIs: ${JSON.stringify(error)}`,
        );
      }

      return data;
    } catch (err) {
      console.error(`An error occurred fetching ${userType} KPIs:`, err);
      throw err;
    }
  }

  async getKpiDetailsWithConstraints(kpiId: number): Promise<any> {
    const { data, error } = await this.service.db.rpc(
      'get_kpi_and_constraints',
      {
        p_kpi_id: kpiId,
      },
    );

    if (error) {
      console.error(
        'Error fetching KPI details and unit constraints:',
        JSON.stringify(error, null, 2),
      );
      throw new Error(
        `Error fetching KPI details and unit constraints: ${JSON.stringify(
          error,
        )}`,
      );
    }

    return data[0];
  }

  async addKpiValue(
    kpiId: number,
    userId: number,
    kpiValueDto: AddValueDto,
  ): Promise<any> {
    try {
      const { value, date } = kpiValueDto;

      const { data: response, error } = await this.service.db.rpc(
        'add_kpi_value',
        {
          kpi_date: date,
          kpi_value: value,
          p_kpi_id: kpiId,
          p_user_id: userId,
          updated_by: userId,
        },
      );

      if (error) {
        console.error('Error:', JSON.stringify(error, null, 2));
        throw new Error(`Error adding KPI value: ${JSON.stringify(error)}`);
      }

      return response;
    } catch (err) {
      console.error('An error occurred adding KPI value:', err);
      throw err;
    }
  }
}
