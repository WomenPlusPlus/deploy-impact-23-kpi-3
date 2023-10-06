import {Body, Controller, Delete, Get, Param, Put} from '@nestjs/common';
import {MiscCirclesKpisService} from './misc-circles-kpis.service';
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';
import {KpiDto} from '../kpi/kpi.dto';

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
	@Get('phone-calls')
	getPhoneCalls() {
		return this.service.fetchPhoneCalls();
	}
	@Put('add-phone-call')
	addPhoneCall(@Body() data) {
		return this.service.insertPhoneCall(data);
	}
	@Delete('delete-phone-call/:id')
	removePhoneCall(@Param() param) {
		return this.service.deletePhoneCall(param.id);
	}
	@Get('circles')
	getAllCircles(): Array<CircleDto>  {
		return this.service.createCircleTable();
	}
}
