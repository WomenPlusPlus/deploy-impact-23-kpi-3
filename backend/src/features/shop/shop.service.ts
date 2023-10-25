import { Injectable } from '@nestjs/common';
import { DbConnectionService } from '../../core/db-connection/db-connection.service';

@Injectable()
export class ShopService {
  constructor(private service: DbConnectionService) {}

  async getElectronicsTurnover(): Promise<any[]> {
    const { data, error } = await this.service.db.rpc(
      'get_electronics_turnover',
    );

    if (error) {
      console.error('RPC Error:', error);
      throw new Error('Error fetching electronics turnover data.');
    }

    return data;
  }
}
