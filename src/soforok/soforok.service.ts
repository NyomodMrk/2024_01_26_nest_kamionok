import { Injectable } from '@nestjs/common';
import { CreateSoforokDto } from './dto/create-soforok.dto';
import { UpdateSoforokDto } from './dto/update-soforok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SoforokService {
  constructor(private readonly db: PrismaService) {}

  create(createSoforokDto: CreateSoforokDto) {
    return this.db.soforok.create({
      data: createSoforokDto
    })
  }

  findAll() {
    return this.db.soforok.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} soforok`;
  }

  update(id: number, updateSoforokDto: UpdateSoforokDto) {
    return this.db.soforok.update({
      data: updateSoforokDto,
      where: { id }
    })
  }

  remove(id: number) {
    return this.db.soforok.delete({
      where: { id }
    })
  }
}
