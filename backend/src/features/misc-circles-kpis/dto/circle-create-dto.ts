import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";

export class CircleCreateDto {
    @ApiProperty()
    circle_id: string = randomStringGenerator();
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
<<<<<<< HEAD

=======
>>>>>>> origin/features-yk
}
