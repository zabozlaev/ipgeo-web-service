import { Test } from '@nestjs/testing';
import { IpService } from './ip.service';
import { HttpException } from '@nestjs/common';

describe('IpService', () => {
  let ipService: IpService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [IpService],
    }).compile();

    ipService = module.get<IpService>(IpService);
  });

  it('Should return valid ipInfo with correct city', () => {
    const data = ipService.getInformation('91.244.254.196');

    const { city } = data;

    expect(data).not.toBeNull();
    expect(city).toBe('Kazan’');
  });

  it('Should throw error because no info would be found', () => {
    try {
      ipService.getInformation('192.168.1.1');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.status).toBe(404);
    }
  });
});
