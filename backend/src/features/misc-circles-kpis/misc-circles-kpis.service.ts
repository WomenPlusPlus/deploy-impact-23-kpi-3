import { Injectable } from '@nestjs/common';
import {circlesKpis} from './data/misc-circles-kpis-data'
import {fakeData} from './data/fakeData'
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';
import {DbConnectionService} from '../../core/db-connection/db-connection.service';
import {CircleCreateDto} from "./dto/circle-create-dto";
import * as fs from "fs";


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

	fillCircleTable(): Array<CircleCreateDto>{
		const circleArray: Array<CircleCreateDto> = [];

		circlesKpis.forEach(kpi => {
			if(!exist(kpi.circle, circleArray)){
				circleArray.push({
					"circle_id": "",
					"circle_name": kpi.circle,
					"circle_description": kpi.circle,
					"inserted_at": new Date().toISOString(),
					"updated_at": '',
					"closed_at": ''
				})
			}
		})
		fs.writeFileSync('./src/features/misc-circles-kpis/data/circles.json', JSON.stringify(circleArray))
		console.log("array of circles = ", circleArray);
		return circleArray;
	}
	async fetchCircles() {
		const { data, error } = await this.service.db.from('yk_okt6_circles').select('*');
		return error || data;
	}

	async insertCircle(newCircle) {
		console.log(newCircle);
		const { data, error } = await this.service.db
			.from('yk_okt6_circles')
			.insert([
				newCircle
			])
			.select()
		console.log(data);
		return error || data;
	}
}

function exist(circle: string, circleArray: Array<CircleCreateDto>) {
const found = circleArray.find(crcl => {
	return crcl.circle_name === circle;
})
	return found !== undefined;
}
