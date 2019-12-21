import { Test } from '@nestjs/testing';
import { IpController } from './ip.controller';
import { IpService } from './ip.service';
import { HttpException } from '@nestjs/common';
import { IpInfoResponse } from './dtos/ipInfoResponse';

describe('IpController', () => {
  let ipController: IpController;
  let ipService: IpService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [IpController],
      providers: [IpService],
    }).compile();

    ipController = module.get<IpController>(IpController);
    ipService = module.get<IpService>(IpService);
  });

  it('should throw error because of invalid ip adress', () => {
    const ip = 'Bad Ip';

    try {
      ipController.geo({ ip });
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
    }
  });

  it('should pass the data because ip adress is valid', () => {
    const ip = '178.213.240.40';

    const result: IpInfoResponse = {
      lng: 'Some longtitude',
      lat: 'Some lattitude',
      country: 'Some Country',
      city: 'Some City',
    };

    jest.spyOn(ipService, 'getInformation').mockImplementation(() => result);

    const data = ipController.geo({ ip });

    expect(data).toEqual(result);
  });
});
