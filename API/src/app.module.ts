import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './shared/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './core/config/config.module';
import { ConfigService } from './core/config/config.service';
import { TrainingCenterModule } from './shared/training-center/training-center.module';
import { SessionInterModule } from './shared/session-inter/session-inter.module';
import { SessionEmpModule } from './shared/session-emp/session-emp.module';
import { InternshipModule } from './shared/internship/internship.module';
import { UnviervcityModule } from './shared/unviervcity/unviervcity.module';
import { LevelModule } from './shared/level/level.module';


@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // uri: `mongodb://${configService.get('DB_URI')}/${configService.get('DB_NAME')}`,
        uri: `mongodb+srv://${configService.get('DB_USER')}:${configService.get('DB_PWD')}@${configService.get('DB_URI')}/${configService.get('DB_NAME')}?${configService.get('DB_PARAMS')}`,
        useNewUrlParser: true
      }),
      inject: [ConfigService]
    }),

    AuthModule,
    UsersModule,
    ConfigModule,
    TrainingCenterModule,
    SessionInterModule,
    SessionEmpModule,
    InternshipModule,
    UnviervcityModule,
    LevelModule
  ],
  controllers: [AppController],
  providers: [
  ],
})
export class AppModule {}
