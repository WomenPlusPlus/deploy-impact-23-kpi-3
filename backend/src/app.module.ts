import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiscCirclesKpisModule } from './features/misc-circles-kpis/misc-circles-kpis.module'

@Module({
	imports: [MiscCirclesKpisModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
