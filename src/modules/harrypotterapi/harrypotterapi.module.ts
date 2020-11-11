import { HttpModule, Module } from '@nestjs/common';
import { HarrypotterapiController } from './harrypotterapi.controller';
import { HarrypotterapiService } from './harrypotterapi.service';

@Module({
  imports: [HttpModule],
  controllers: [HarrypotterapiController],
  providers: [HarrypotterapiService]
})
export class HarrypotterapiModule {}
