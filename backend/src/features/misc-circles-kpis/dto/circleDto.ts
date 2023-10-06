import { ApiProperty } from '@nestjs/swagger';

export class CircleDto {
    @ApiProperty()
    circleId: string;
    @ApiProperty()
    circleName: string;
}
