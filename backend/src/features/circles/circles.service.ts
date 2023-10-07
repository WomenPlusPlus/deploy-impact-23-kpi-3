import { Injectable } from '@nestjs/common';
import {CircleDto} from '../../common/dto/circle.dto';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';
import {PostgrestError} from '@supabase/supabase-js';

@Injectable()
export class CirclesService {
	constructor(private service: DbConnectionService) {
	}

	async fetchCircles(): Promise<PostgrestError | CircleDto[]>{
		const { data, error } = await this.service.db
			.from('yk_okt6_circles')
			.select('*');
		return error || data;
	}

	async getCircle(id) {
		const { data, error } = await this.service.db
			.from('yk_okt6_circles')
			.select('*')
			.eq('circle_id', id);
		return error || data;
	}

	async createOrUpdateCircle(newCircle) {
		const { data, error } = await this.service.db
			.from('yk_okt6_circles')
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
			.from('yk_okt6_circles')
			.delete()
			.eq('circle_id', id)
		if(error) {
			return error
		}
		return this.fetchCircles();
	}
}
