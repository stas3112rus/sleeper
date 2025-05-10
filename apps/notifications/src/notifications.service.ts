import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NotifyEmailDto } from 'apps/notifications/src/dto/notify-email.dto';
import nodemailer from 'nodemailer';

@Injectable()
export class NotificationsService {
  constructor(private readonly configService: ConfigService) {}

  private readonly transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAUTH2',
      user: this.configService.get('SMTP_USER'),
      clientId: this.configService.get('GOOGLE_OATH_CLIENT_ID'),
      clientSecret: this.configService.get('GOOGLE_OATH_CLIENT_SECRET'),
      refreshToken: this.configService.get('GOOGLE_OATH_REFRESH_TOKEN'),
    },
  });

  async notifyEmail({ email }: NotifyEmailDto) {
    await this.transporter.sendMail({
      from: this.configService.get('SMTP_USER'),
      to: email,
      subject: 'Sleepr notifications',
      text: 'Test text',
    });
  }
}
