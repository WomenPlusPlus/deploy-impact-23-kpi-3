import { Injectable } from '@nestjs/common';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';
import {PostgrestError} from '@supabase/supabase-js';
import {UnitDto} from '../../common/dto/unit.dto';

@Injectable()
export class PeriodicitiesService {
	constructor(private service: DbConnectionService) {
	}

	async fetchPeriodicities(): Promise<{ error: PostgrestError, data: UnitDto[] }>{
		const { data, error } = await this.service.db
			.rpc('get_all_periodicities');
		return {error, data};
	}

}
