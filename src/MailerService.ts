import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class ExampleService {
  constructor(private readonly mailerService: MailerService) {}
  
  public example(): void {
    this
      .mailerService
      .sendMail({
        to: 'leeruigan@gmail.com', // sender address
        from: '158097628@qq.com', // list of receivers
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then(() => {})
      .catch(() => {});
  }
  
  public example2(): void {
    this
      .mailerService
      .sendMail({
        to: 'leeruigan@gmail.com',
        from: '158097628@qq.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'welcome', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then(() => {})
      .catch(() => {});
  }
  
  public example3(): void {
    this
      .mailerService
      .sendMail({
        to: 'leeruigan@gmail.com',
        from: '158097628@qq.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: __dirname + '/welcome', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then(() => {})
      .catch(() => {});
  }
}