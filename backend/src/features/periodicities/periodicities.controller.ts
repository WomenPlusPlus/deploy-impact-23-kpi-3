import {Controller, Get, HttpException, HttpStatus} from '@nestjs/common';
import {PeriodicitiesService} from '../periodicities/periodicities.service';

@Controller('periodicities')
export class PeriodicitiesController {
	constructor(private service: PeriodicitiesService) {
	}

	@Get('')
	async getAllPeriodicities() {
		const {error, data} = await this.service.fetchPeriodicities();
		if(error) {
			throw new HttpException(error.message, HttpStatus.FORBIDDEN);
		}
		return data;
	}
}
