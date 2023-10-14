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
			.eq('id', id);
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
	
	async updateCircle(id, updateCircle) { //need to be corrected
		const { data, error } = await this.service.db
			.from('circle')
			.update(updateCircle)
			.eq('id', id)
			.select();
		if(error) {
			return error
		}
		return this.fetchCircles();
	}

	async removeCircle(id) {
		const { error } = await this.service.db
			.from('circle')
			.delete()
			.eq('id', id)
		if(error) {
			return error
		}
		return this.fetchCircles();
	}
}
