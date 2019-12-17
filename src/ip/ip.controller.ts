import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { IpService } from './ip.service';
import { ValidationPipe } from '../core/pipes/ValidationPipe';
import { IpInfoRequest } from './dtos/ipInfoRequest';
import { IpInfoResponse } from './dtos/ipInfoResponse';

@Controller('/')
export class IpController {
  constructor(private readonly ipService: IpService) {}

  @UsePipes(ValidationPipe)
  @Get('/')
  geo(@Query() { ip }: IpInfoRequest): IpInfoResponse {
    return this.ipService.getInformation(ip);
  }
}
