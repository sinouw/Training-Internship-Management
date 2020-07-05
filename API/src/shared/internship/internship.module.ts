import { Module } from '@nestjs/common';
import { InternshipService } from './internship.service';
import { InternshipController } from './internship.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InternshipSchema } from 'src/models/internships.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Internship', schema: InternshipSchema }]),
  ],
  providers: [InternshipService],
  controllers: [InternshipController]
})
export class InternshipModule {}
