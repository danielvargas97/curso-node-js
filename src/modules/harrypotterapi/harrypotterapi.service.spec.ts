import { Test, TestingModule } from '@nestjs/testing';
import { HarrypotterapiService } from './harrypotterapi.service';

describe('HarrypotterapiService', () => {
  let service: HarrypotterapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HarrypotterapiService],
    }).compile();

    service = module.get<HarrypotterapiService>(HarrypotterapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
