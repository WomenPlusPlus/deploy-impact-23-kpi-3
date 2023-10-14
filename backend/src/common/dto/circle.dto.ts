import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";

export class CircleDto {
	@ApiProperty()
	id: string = randomStringGenerator();
	@ApiProperty()
	name: string;
	@ApiPropertyOptional()
	updated_at: string;
	@ApiPropertyOptional()
	updated_by: string;
}

