import { Injectable } from '@nestjs/common';

import { ProfileRepository } from '../infrastructure/repositories/profile.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}
}
