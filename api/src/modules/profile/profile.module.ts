import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileController } from './infrastructure/controllers/profile.controller'; 
import { ProfileService } from './domain/profile.service'; 
import { ProfileRepository } from './infrastructure/repositories/profile.repository';
import { ProfileEntity, ProfileSchema } from './domain/models/entities/profile.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProfileEntity.name,
        schema: ProfileSchema,
      },
    ]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
})
export class Profile {}