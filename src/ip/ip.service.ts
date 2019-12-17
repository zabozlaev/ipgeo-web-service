import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as geoip from 'geoip-lite';
import { IpInfoResponse } from './dtos/ipInfoResponse';

@Injectable()
export class IpService {
  getInformation(ip: string): IpInfoResponse {
    const data = geoip.lookup(ip);

    if (!data) {
      throw new HttpException('No ip info received', HttpStatus.NOT_FOUND);
    }

    const { country, city, ll } = data;
    const [latitude, longitude] = ll;

    const lat = latitude.toString();
    const lng = longitude.toString();

    return { country, city, lat, lng };
  }
}
