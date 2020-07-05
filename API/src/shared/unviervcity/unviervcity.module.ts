import { Module } from '@nestjs/common';
import { UnviervcityService } from './unviervcity.service';
import { UnviervcityController } from './unviervcity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UnivercitySchema } from 'src/models/internships.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Univercity', schema: UnivercitySchema }]),
  ],
  providers: [UnviervcityService],
  controllers: [UnviervcityController]
})
export class UnviervcityModule {}
