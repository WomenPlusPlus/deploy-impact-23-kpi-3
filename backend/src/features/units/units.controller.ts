import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Put} from '@nestjs/common';
import {UnitsService} from '../units/units.service';

@Controller('units')
export class UnitsController {
	constructor(private service: UnitsService) {
	}

	@Get('')
	async getAllUnits() {
		const {error, data} = await this.service.fetchUnits();
		if(error) {
			throw new HttpException(error.message, HttpStatus.FORBIDDEN);
		}
		return data;
	}

	@Get('/:id')
	getUnit(@Param() param) {
		return this.service.getUnit(param.id);
	}

	@Put('add')
	createOrUpdateUnit(@Body() data) {
		return this.service.createOrUpdateUnit(data);
	}

	@Delete('/:id')
	addUnit(@Param() param) {
		return this.service.removeUnit(param.id);
	}
}
