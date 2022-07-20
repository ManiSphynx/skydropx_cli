import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { OauthEntity } from '../../domain/models/entities/oauth.entity';

@Injectable()
export class OauthRepository {
  constructor(@InjectModel(OauthEntity.name) private readonly model: Model<OauthEntity>) {}
}