import { PartialType } from '@nestjs/mapped-types';
import { CreateSoforokDto } from './create-soforok.dto';

export class UpdateSoforokDto extends PartialType(CreateSoforokDto) {}
