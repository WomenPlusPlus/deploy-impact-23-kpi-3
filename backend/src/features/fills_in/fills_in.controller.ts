import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FillsInService } from './fills_in.service';
import { CreateFillsInDto } from './dto/create-fills_in.dto';
import { UpdateFillsInDto } from './dto/update-fills_in.dto';

@Controller('fills-in')
export class FillsInController {
  constructor(private readonly fillsInService: FillsInService) {}

  @Post()
  create(@Body() createFillsInDto: CreateFillsInDto) {
    return this.fillsInService.create(createFillsInDto);
  }

  @Get()
  findAll() {
    return this.fillsInService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fillsInService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFillsInDto: UpdateFillsInDto) {
    return this.fillsInService.update(+id, updateFillsInDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fillsInService.remove(+id);
  }
}
