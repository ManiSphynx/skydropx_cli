import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OauthController } from './infrastructure/controllers/oauth.controller'; 
import { OauthService } from './domain/oauth.service'; 
import { OauthRepository } from './infrastructure/repositories/oauth.repository';
import { OauthEntity, OauthSchema } from './domain/models/entities/oauth.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OauthEntity.name,
        schema: OauthSchema,
      },
    ]),
  ],
  controllers: [OauthController],
  providers: [OauthService, OauthRepository],
})
export class Oauth {}