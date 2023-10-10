import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";

export class CircleCreateUpdateDto {
    @ApiProperty()
    circle_id: string = randomStringGenerator();
    @ApiProperty()
    circle_name: string;
    @ApiPropertyOptional()
    updated_at: string;
    @ApiPropertyOptional()
    updated_by: string;

}
