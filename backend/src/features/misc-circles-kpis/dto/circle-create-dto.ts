import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";

export class CircleCreateDto {
    @ApiProperty()
    circle_id: string = randomStringGenerator(); //chould be changed to int generator
    @ApiProperty()
    circle_name: string;
    @ApiProperty()
    inserted_at: string; // delete ?
    @ApiPropertyOptional()
    updated_at: string;
    @ApiPropertyOptional()
    updated_by: string;
    @ApiPropertyOptional() // delet ?
    closed_at: string;
}
