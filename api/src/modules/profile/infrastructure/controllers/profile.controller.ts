import { Controller, UseFilters, UseInterceptors, ValidationPipe } from '@nestjs/common';

import { ProfileService } from '../../domain/profile.service';

/* verify that this is the name of the controller you want */
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
}