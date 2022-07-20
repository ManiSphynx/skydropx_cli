import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProfileEntity } from '../../domain/models/entities/profile.entity';

@Injectable()
export class ProfileRepository {
  constructor(@InjectModel(ProfileEntity.name) private readonly model: Model<ProfileEntity>) {}
}