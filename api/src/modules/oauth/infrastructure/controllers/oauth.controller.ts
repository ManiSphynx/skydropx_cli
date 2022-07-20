import { Controller, UseFilters, UseInterceptors, ValidationPipe } from '@nestjs/common';

import { OauthService } from '../../domain/oauth.service';

/* verify that this is the name of the controller you want */
@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}
}