import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CircleDto {
	@ApiProperty()
	circle_id: string;
	@ApiProperty()
	circle_name: string;
	@ApiPropertyOptional()
	circle_description: string;
	@ApiProperty()
	inserted_at: string;
	@ApiPropertyOptional()
	updated_at: string;
	@ApiPropertyOptional()
	closed_at: string;
}
