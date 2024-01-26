import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoforokService } from './soforok.service';
import { CreateSoforokDto } from './dto/create-soforok.dto';
import { UpdateSoforokDto } from './dto/update-soforok.dto';

@Controller('soforok')
export class SoforokController {
  constructor(private readonly soforokService: SoforokService) {}

  @Post()
  create(@Body() createSoforokDto: CreateSoforokDto) {
    return this.soforokService.create(createSoforokDto);
  }

  @Get()
  findAll() {
    return this.soforokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soforokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoforokDto: UpdateSoforokDto) {
    return this.soforokService.update(+id, updateSoforokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soforokService.remove(+id);
  }
}
