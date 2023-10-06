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
	async fetchPhoneCalls() {
		const { data, error } = await this.service.db.from('phone_calls').select('*');
		return error || data;
	}

	async insertPhoneCall(newCall) {
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

	createCircleTable(): Array<CircleDto>{
		let circleArray: Array<CircleDto> = [];

		circlesKpis.forEach(kpi => {
			if(!exist(kpi.circle, circleArray)){
				circleArray.push({
					"circleId": randomUUID(),
					"circleName": kpi.circle
				})
			}
		})
		fs.writeFileSync('./src/features/misc-circles-kpis/data/circles.json', JSON.stringify(circleArray))
		console.log("array of circles = ", circleArray);
		return circleArray;
	}
}

function exist(circle: string, circleArray: Array<CircleDto>) {
const found = circleArray.find(crcl => {
	return crcl.circleName === circle;
})
	return found !== undefined;
}
