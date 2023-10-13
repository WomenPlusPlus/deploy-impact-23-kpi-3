import { Injectable } from '@nestjs/common';
import {CircleDto} from '../../common/dto/circle.dto';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';
import {PostgrestError} from '@supabase/supabase-js';

@Injectable()
export class CirclesService {
	constructor(private service: DbConnectionService) {
	}

	async fetchCircles(): Promise<{ error: PostgrestError, data: CircleDto[] }>{
		const { data, error } = await this.service.db
			.from('circle')
			.select('*');
		return {error, data};
	}

	async getCircle(id) {
		const { data, error } = await this.service.db
			.from('circle')
			.select('*')
			.eq('circle_id', id);
		return error || data;
	}

	async createOrUpdateCircle(newCircle) {
		const { data, error } = await this.service.db
			.from('circle')
			.insert([
				newCircle
			])
			.select();
		if(error) {
			return error
		}
		return this.fetchCircles();
	}

	async removeCircle(id) {
		const { error } = await this.service.db
			.from('yk_okt6_circle')
			.delete()
			.eq('circle_id', id)
		if(error) {
			return error
		}
		return this.fetchCircles();
	}
}
