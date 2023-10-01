import { Module } from '@nestjs/common';
import { MiscCirclesKpisController } from './misc-circles-kpis.controller';
import { MiscCirclesKpisService } from './misc-circles-kpis.service';
import {DbConnectionModule} from '../../core/db-connection/db-connection.module';

@Module({
  imports: [DbConnectionModule],
  controllers: [MiscCirclesKpisController],
  providers: [MiscCirclesKpisService]
})
export class MiscCirclesKpisModule {}
