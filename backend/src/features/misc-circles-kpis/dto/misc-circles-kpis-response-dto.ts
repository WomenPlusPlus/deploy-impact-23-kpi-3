import { ApiProperty } from '@nestjs/swagger';

export class MiscCirclesKpisResponseDto {
	@ApiProperty()
	circle: string;
	@ApiProperty()
	kpi: string;
	@ApiProperty()
	periodicity: string;
	@ApiProperty()
	range: string;
	@ApiProperty()
	period_year: number;
	@ApiProperty()
	period_month: number;
	@ApiProperty()
	value: number | string;
}