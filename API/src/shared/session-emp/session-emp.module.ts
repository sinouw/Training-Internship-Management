import { Module } from '@nestjs/common';
import { SessionEmpService } from './session-emp.service';
import { SessionEmpController } from './session-emp.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionEmpSchema } from 'src/models/session_emp.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SessionEmp', schema: SessionEmpSchema }]),
  ],
  providers: [SessionEmpService],
  controllers: [SessionEmpController]
})
export class SessionEmpModule { }
