import { Module, HttpModule } from '@nestjs/common';
import { SimpsonapiController } from './simpsonapi.controller';
import { SimpsonapiService } from './simpsonapi.service';

@Module({
  imports: [HttpModule],
  controllers: [SimpsonapiController],
  providers: [SimpsonapiService]
})
export class SimpsonapiModule {}
