import { Controller, Get, Post, Req, Res,Render, Header,Body,ExecutionContext } from '@nestjs/common';
import { AppService } from './app.service';
import {stringify} from 'querystring';
import fetch from 'node-fetch';
// import { Request } from 'express';
// import { Response } from 'supertest';
import {Response , Request} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async cute(@Body() body){ console.log(body) }

  @Post('subscribe')
  async captcha(@Body() body){
      
      console.log(body.captcha)
    if(!body.captcha === undefined || body.captcha === '' || body.captcha === null){
      return { success: false, msg: 'Please select captcha' };
    } 
    
    const secretKey = "6LftJfEaAAAAADnbLYmC9M0YYEdYV2RzYar4JeSX";

    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.captcha}`
    
    const verifyURL = `https://google.com/recaptcha/api/siteverify?${verificationURL}`;
    
    // Make a request to verifyURL
    const Body = await fetch(verificationURL).then(res => res.json());
    console.log("555555555555",Body);
    // If not successful
    if (Body.success !== undefined && !Body.success)
      return { success: false, msg: 'Failed captcha verification' };

    // If successful
      return { success: true, msg: 'Captcha passed' };
  }
}
