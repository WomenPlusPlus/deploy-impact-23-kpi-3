import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiscCirclesKpisModule } from './features/misc-circles-kpis/misc-circles-kpis.module';
import { KpiModule } from './features/kpi/kpi.module';
import { CirclesModule } from './features/circles/circles.module';
import {DbConnectionModule} from './core/db-connection/db-connection.module';
import {UsersModule} from "./features/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    DbConnectionModule,
    MiscCirclesKpisModule,
    KpiModule,
    CirclesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
