import { HttpModule, Module} from '@nestjs/common';
import { PokeapiController } from './pokeapi.controller';
import { PokeapiService } from './pokeapi.service';
@Module({
  imports: [HttpModule],
  controllers: [PokeapiController],
  providers: [PokeapiService]
})
export class PokeapiModule {}
