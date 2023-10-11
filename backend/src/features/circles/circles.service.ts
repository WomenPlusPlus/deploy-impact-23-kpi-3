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
			.from('circle')
			.select('*');
		return error || data;
	}

	async getCircle(id) {
		const { data, error } = await this.service.db
			.from('circle')
			.select('*')
			.eq('circle_id', id);
		return error || data;
	}

	async createCircle(newCircle) {
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
	
	async updateCircle(id, updateCircle: updateCircleDto) { //need to be corrected
		const { data, error } = await this.service.db
			.from('circle')
			.update(updateCircle)
			.eq('circle_id', id)
			.select();
		if(error) {
			return error
		}
		return this.fetchCircles();
	}

	/*async removeCircle(id) {
		const { error } = await this.service.db
			.from('circle')
			.delete()
			.eq('circle_id', id)
		if(error) {
			return error
		}
		return this.fetchCircles();
	}*/
}
