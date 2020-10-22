import { Module } from '@nestjs/common';
import { SimpsonapiController } from './simpsonapi.controller';
import { SimpsonapiService } from './simpsonapi.service';

@Module({
  controllers: [SimpsonapiController],
  providers: [SimpsonapiService]
})
export class SimpsonapiModule {}
