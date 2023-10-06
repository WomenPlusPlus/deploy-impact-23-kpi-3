import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MiscCirclesKpisService} from './misc-circles-kpis.service';
import {MiscCirclesKpisResponseDto} from './dto/misc-circles-kpis-response-dto';
import {CircleCreateDto} from "./dto/circle-create-dto";

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

	@Get('all-circles')
	getAllCirclesList() {
		return this.service.fetchCircles();
	}

	@Get('circles')
	getAllCircles(): Array<CircleCreateDto>  {
		return this.service.fillCircleTable();
	}

	@Post('add-new-circle')
	addCircle(@Body() data) {
		return this.service.insertCircle(data);
	}
}
