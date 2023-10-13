import { Injectable } from '@nestjs/common';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';
import {PostgrestError} from '@supabase/supabase-js';
import {UnitDto} from '../../common/dto/unit.dto';

@Injectable()
export class UnitsService {
	constructor(private service: DbConnectionService) {
	}

	async fetchUnits(): Promise<{ error: PostgrestError, data: UnitDto[] }>{
		const { data, error } = await this.service.db
			.from('unit_constraints')
			.select('*');
		return {error, data};
	}

	async getUnit(id) {
		const { data, error } = await this.service.db
			.from('unit_constraints')
			.select('*')
			.eq('circle_id', id);
		return error || data;
	}

	async createOrUpdateUnit(newUnit) {
		const { data, error } = await this.service.db
			.from('unit_constraints')
			.insert([
				newUnit
			])
			.select();
		if(error) {
			return error
		}
		return this.fetchUnits();
	}

	async removeUnit(id) {
		const { error } = await this.service.db
			.from('yk_okt6_circles')
			.delete()
			.eq('circle_id', id)
		if(error) {
			return error
		}
		return this.fetchUnits();
	}
}
