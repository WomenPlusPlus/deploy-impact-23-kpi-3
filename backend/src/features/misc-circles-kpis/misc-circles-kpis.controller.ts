import { Controller, Get } from '@nestjs/common';
import {MiscCirclesKpisService} from './misc-circles-kpis.service';
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';

@Controller('misc-circles-kpis')
export class MiscCirclesKpisController {
	constructor(private service: MiscCirclesKpisService) {
	}
	@Get('fake')
	getFakeSample() {
		return this.service.fetchFakeSample();
	}
	@Get()
	getInitialSample(): Array<MiscCirclesKpisResponseDto> {
		return this.service.fetchInitialSample();
	}
}
