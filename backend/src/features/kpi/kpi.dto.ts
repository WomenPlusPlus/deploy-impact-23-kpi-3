import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class KpiDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}
