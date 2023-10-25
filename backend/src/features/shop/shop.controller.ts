import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('electronics-turnover')
  async getElectronicsTurnover() {
    return await this.shopService.getElectronicsTurnover();
  }
}
