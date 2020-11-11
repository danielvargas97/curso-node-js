import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeapiModule } from './modules/pokeapi/pokeapi.module';
import { SimpsonapiModule } from './modules/simpsonapi/simpsonapi.module';
import { RequestPokeapiService } from './shared/request-pokeapi/request-pokeapi.service';
import { HarrypotterapiModule } from './modules/harrypotterapi/harrypotterapi.module';

@Module({
  imports: [PokeapiModule, SimpsonapiModule, HarrypotterapiModule],
  controllers: [AppController],
  providers: [AppService, RequestPokeapiService],
})
export class AppModule {}
