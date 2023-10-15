import {Injectable} from '@nestjs/common';
import {KpiDto} from './kpi.dto';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';
import {KpiCreationDto} from '../../common/dto/kpi-creation.dto';

@Injectable()
export class KpiService {
	constructor(private service: DbConnectionService) {
	}

	async createKpi(
		kpiData: KpiCreationDto,
	): Promise<{ success: boolean; kpiId?: number; error?: any }> {
		const {circles, title, periodicity, unit, archived_at, closed_at} =
			kpiData;

		// Call the RPC function to create a new KPI entry
		const {data: kpiId, error} = await this.service.db.rpc('create_new_kpi', {
			kpi_title: title,
			kpi_periodicity: periodicity,
			kpi_unit: unit,
			kpi_archived_at: archived_at,
			kpi_closed_at: closed_at,
			circle_ids: circles,
		});

		if (error) {
			return {success: false, error};
		}

		return {success: true, kpiId};
	}

	// Call the RPC function to fetch KPI details
	async fetchKpis(
		userId: number,
		userType: 'gatekeeper' | 'economist',
	): Promise<any[]> {
		try {
			const rpcMethodDict = {
				gatekeeper: 'fetch_gatekeeper_kpis',
				economist: 'fetch_economist_kpis'
			}
			const {data, error} = await this.service.db.rpc(
				rpcMethodDict[userType],
				{
					[`${userType}_user_id`]: userId,
				});

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
}
