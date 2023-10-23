import { IsNumber, IsDateString } from 'class-validator';

export class AddValueDto {
  @IsNumber()
  value: number;

  @IsDateString()
  date: Date;
}
