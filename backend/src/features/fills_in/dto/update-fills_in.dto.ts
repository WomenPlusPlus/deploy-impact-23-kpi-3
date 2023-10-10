import { PartialType } from '@nestjs/mapped-types';
import { CreateFillsInDto } from './create-fills_in.dto';

export class UpdateFillsInDto extends PartialType(CreateFillsInDto) {}
