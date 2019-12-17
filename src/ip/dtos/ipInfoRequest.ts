import { IsIP } from 'class-validator';

export class IpInfoRequest {
  @IsIP()
  ip: string;
}
