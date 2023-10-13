import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class UnitDto {
	@ApiProperty()
	unit: string;
	@ApiPropertyOptional()
	min: number;
	@ApiPropertyOptional()
	max: string;
	@ApiPropertyOptional()
	updated_at: string;
	@ApiPropertyOptional()
	updated_by: string;
}