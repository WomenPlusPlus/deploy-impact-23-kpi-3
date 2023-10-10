import {Body, Controller, Get, Param, Put} from '@nestjs/common';
import {CirclesService} from './circles.service';

@Controller('circles')
export class CirclesController {
	constructor(private service: CirclesService) {
	}

	@Get('')
	getAllCircles() {
		return this.service.fetchCircles();
	}

	@Get('/:id')
	getCircle(@Param() param) {
		return this.service.getCircle(param.id);
	}

	@Put('add')
	createOrUpdateCircle(@Body() data) {
		return this.service.createOrUpdateCircle(data);
	}

	/*@Delete('/:id')
	addCircle(@Param() param) {
		return this.service.removeCircle(param.id);
	}*/
}
