import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsIn,
} from 'class-validator';

export class KpiCreationDto {
  @IsArray()
  circles: number[];

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['HOURLY', 'DAILY', 'MONTHLY', 'QUARTERLY', 'YEARLY'])
  periodicity: string;

  @IsNotEmpty()
  @IsString()
  unit: string;

  @IsOptional()
  @IsString()
  archived_at?: string;

  @IsOptional()
  @IsString()
  closed_at?: string;
}
