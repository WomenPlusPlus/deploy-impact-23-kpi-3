import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CirclesService} from './circles.service';

@Controller('circles')
export class CirclesController {
	constructor(private service: CirclesService) {
	}

	@Get('')
	async getAllCircles() {
		const {error, data} = await this.service.fetchCircles();
		if(error) {
			throw new HttpException(error.message, HttpStatus.FORBIDDEN);
		}
		return data;
	}

	@Get('/:id')
	getCircle(@Param() param) {
		return this.service.getCircle(param.id);
	}

	@Put('add')
	createOrUpdateCircle(@Body() data) {
		return this.service.createOrUpdateCircle(data);
	}

	@Delete('/:id')
	addCircle(@Param() param) {
		return this.service.removeCircle(param.id);
	}
}
