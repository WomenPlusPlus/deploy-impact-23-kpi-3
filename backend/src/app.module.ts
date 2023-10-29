import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KpiModule } from './features/kpi/kpi.module';
import { CirclesModule } from './features/circles/circles.module';
import { UnitsModule } from './features/units/units.module';
import { PeriodicitiesModule } from './features/periodicities/periodicities.module';
import { ShopModule } from './features/shop/shop.module';
import {DbConnectionModule} from './core/db-connection/db-connection.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DbConnectionModule,
    KpiModule,
    CirclesModule,
    UnitsModule,
    PeriodicitiesModule,
    ShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
