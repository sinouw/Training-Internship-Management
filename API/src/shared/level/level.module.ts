import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LevelSchema } from 'src/models/internships.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Level', schema: LevelSchema }]),
  ],
  providers: [LevelService],
  controllers: [LevelController]
})
export class LevelModule {}
