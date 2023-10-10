import { Injectable } from '@nestjs/common';
import {circlesKpis} from './data/misc-circles-kpis-data'
import {fakeData} from './data/fakeData'
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';



@Injectable()
export class MiscCirclesKpisService {
	constructor(private service: DbConnectionService) {
	}
	fetchInitialSample(): Array<MiscCirclesKpisResponseDto> {
		return circlesKpis;
	}
	fetchFakeSample() {
		return fakeData;
	}
	async fetchPhoneCallsRpcPlSql() {
		const { data, error } = await this.service.db.rpc('all_phone_calls_plsql');
		return error || data;
	}
	async fetchPhoneCallsRpc() {
		const { data, error } = await this.service.db.rpc('get_all_phone_calls');
		return error || data;
	}
	async fetchTasksJoinMembersRpc() {
		const { data, error } = await this.service.db.rpc('get_tasks_teammembers');
		return error || data;
	}
	async fetchPhoneCalls() {
		const { data, error } = await this.service.db.from('phone_calls').select('*');
		return error || data;
	}

	async insertPhoneCall(newCall) {
		console.log(newCall);
		const { data, error } = await this.service.db
			.from('phone_calls')
			.insert([
				newCall
			])
			.select()
		return error || data;
	}

	async deletePhoneCall(id) {
		const { error } = await this.service.db
			.from('phone_calls')
			.delete()
			.eq('id', id)
		return error;
	}
}