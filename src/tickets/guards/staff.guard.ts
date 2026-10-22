import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class StaffGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const staffKey = request.headers['x-staff-key'];
    if (staffKey !== 'yourdesk-staff-secret') {
      throw new ForbiddenException('Staff access required');
    }

    return true;
  }
}
