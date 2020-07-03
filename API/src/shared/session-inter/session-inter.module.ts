import { Module } from '@nestjs/common';
import { SessionInterService } from './session-inter.service';
import { SessionInterController } from './session-inter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionInterSchema } from 'src/models/sessionInter.model';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: 'SessionInter', schema: SessionInterSchema }]),
  ],
  providers: [SessionInterService],
  controllers: [SessionInterController]
})
export class SessionInterModule {}
