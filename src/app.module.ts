import { Module } from '@nestjs/common';
import { IpModule } from './ip/ip.module';

@Module({
  imports: [IpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
