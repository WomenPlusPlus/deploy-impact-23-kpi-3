import { Module } from '@nestjs/common';
import {PeriodicitiesController} from '../periodicities/periodicities.controller';
import {PeriodicitiesService} from '../periodicities/periodicities.service';

@Module({
	providers: [PeriodicitiesService],
	controllers: [PeriodicitiesController]
})
export class PeriodicitiesModule {}
