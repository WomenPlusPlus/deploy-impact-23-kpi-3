import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";

export class UserDto {
    @ApiProperty()
    id: string = randomStringGenerator();
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    role: string;
    @ApiPropertyOptional()
    updated_at: string;
    @ApiPropertyOptional()
    updated_by: string;
}