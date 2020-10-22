import { Test, TestingModule } from '@nestjs/testing';
import { SimpsonapiController } from './simpsonapi.controller';

describe('SimpsonapiController', () => {
  let controller: SimpsonapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpsonapiController],
    }).compile();

    controller = module.get<SimpsonapiController>(SimpsonapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
