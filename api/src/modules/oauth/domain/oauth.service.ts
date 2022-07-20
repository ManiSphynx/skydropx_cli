import { Injectable } from '@nestjs/common';

import { OauthRepository } from '../infrastructure/repositories/oauth.repository';

@Injectable()
export class OauthService {
  constructor(private readonly oauthRepository: OauthRepository) {}
}
