import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiscCirclesKpisModule } from './features/misc-circles-kpis/misc-circles-kpis.module';
import { KpiModule } from './features/kpi/kpi.module';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MiscCirclesKpisModule,
    KpiModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
