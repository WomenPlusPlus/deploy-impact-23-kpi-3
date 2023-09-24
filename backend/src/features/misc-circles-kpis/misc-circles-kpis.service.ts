import { Injectable } from '@nestjs/common';
import {circlesKpis} from './data/misc-circles-kpis-data'
import {fakeData} from './data/fakeData'
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';

@Injectable()
export class MiscCirclesKpisService {
	fetchInitialSample(): Array<MiscCirclesKpisResponseDto> {
		return circlesKpis;
	}
	fetchFakeSample() {
		return fakeData;
	}
}
