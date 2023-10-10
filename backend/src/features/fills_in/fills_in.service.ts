import { Injectable } from '@nestjs/common';
import { CreateFillsInDto } from './dto/create-fills_in.dto';
import { UpdateFillsInDto } from './dto/update-fills_in.dto';

@Injectable()
export class FillsInService {
  create(createFillsInDto: CreateFillsInDto) {
    return 'This action adds a new fillsIn';
  }

  findAll() {
    return `This action returns all fillsIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fillsIn`;
  }

  update(id: number, updateFillsInDto: UpdateFillsInDto) {
    return `This action updates a #${id} fillsIn`;
  }

  remove(id: number) {
    return `This action removes a #${id} fillsIn`;
  }
}
