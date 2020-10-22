import { Test, TestingModule } from '@nestjs/testing';
import { SimpsonapiService } from './simpsonapi.service';

describe('SimpsonapiService', () => {
  let service: SimpsonapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpsonapiService],
    }).compile();

    service = module.get<SimpsonapiService>(SimpsonapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
