import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiscCirclesKpisModule } from './features/misc-circles-kpis/misc-circles-kpis.module';
import { KpiModule } from './features/kpi/kpi.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MiscCirclesKpisModule,
    KpiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
