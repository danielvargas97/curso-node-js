import { ApiTags } from '@nestjs/swagger';
import { Test, TestingModule } from '@nestjs/testing';
import { HarrypotterapiController } from './harrypotterapi.controller';


describe('HarrypotterapiController', () => {
  let controller: HarrypotterapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarrypotterapiController],
    }).compile();

    controller = module.get<HarrypotterapiController>(HarrypotterapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
