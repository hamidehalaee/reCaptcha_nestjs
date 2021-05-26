import { Body, Injectable,Req, Res } from '@nestjs/common';
import * as request from 'request';
import {stringify} from 'querystring';
@Injectable()
export class AppService {
  // async captcha(Body) {
  //   if(!Body.captcha === undefined || Body.captcha === '' || Body.captcha === null){
  //     return { success: false, msg: 'Please select captcha' };
  //   } 
  //   const secretKey = "6Ldki-0aAAAAAJg7DYt3PE-yJGh5Z8bVYuxwJeVu";
  //   // const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}&remoteip=${req.connection.remoteAddress}`;
  //   const query = stringify({
  //     secret: secretKey,
  //     response: Body.captcha,
  //     remoteip: Body.connection.remoteAddress
  //   });

  //   const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;

  //   // Make a request to verifyURL
  //   const body = await fetch(verifyURL).then(res => res.json());

  //   // If not successful
  //   if (body.success !== undefined && !body.success)
  //     return { success: false, msg: 'Failed captcha verification' };

  //   // If successful
  //     return { success: true, msg: 'Captcha passed' };
  // }
}
