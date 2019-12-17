import { Module } from '@nestjs/common';
import { IpService } from './ip.service';
import { IpController } from './ip.controller';

@Module({
  providers: [IpService],
  controllers: [IpController],
})
export class IpModule {}
