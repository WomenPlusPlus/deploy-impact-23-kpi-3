import { Module, Global } from '@nestjs/common';
import { DbConnectionService } from './db-connection.service';

@Global()
@Module({
  providers: [DbConnectionService],
  exports: [DbConnectionService],
})
export class DbConnectionModule {}
