
import { Injectable, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, defaultAdminDoc, defaultRhDoc, defaultIntDoc, defaultEmpDoc } from 'src/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService implements OnModuleInit {

  onModuleInit() {
    this.createDefaultAdmin()
  }
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) { }

  async createDefaultAdmin() {
    debugger
    const admin = await this.userModel.findOne({ username: "admin" });
    const rhadmin = await this.userModel.findOne({ username: "rhadmin" });    
    const intadmin = await this.userModel.findOne({ username: "intadmin" });    
    const employee = await this.userModel.findOne({ username: "employee" });    
    
    if (!admin) {
      let globalAdminBody = await this.userModel(defaultAdminDoc);
      console.log("newUser : ", globalAdminBody)
      globalAdminBody.save();
    }

    if (!rhadmin) {
      let rhAdminbody = await this.userModel(defaultRhDoc);
      console.log("newUser : ", rhAdminbody)
      rhAdminbody.save();
    }
    
    if (!intadmin) {
      let intAdminBody = await this.userModel(defaultIntDoc);
      console.log("newUser : ", intAdminBody)
      intAdminBody.save();
    }
    
    if (!employee) {
      let employeeBody = await this.userModel(defaultEmpDoc);
      console.log("newUser : ", employeeBody)
      employeeBody.save();
    }

  }

  async getFullProfil(user) {
    const userId = user._id
    const result = await this.userModel.aggregate([
      {
        '$match': {
          '_id': Types.ObjectId(userId)
        }
      },
      {
        '$project': {
          'password': 0,
        }
      },
    ])

    return result[0]
  }

  async validateUserMongo(usern: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username: usern });
    const match = await bcrypt.compare(pass, user.password);
    if (user && match) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // post a single user
  async create(createUserDTO: any): Promise<User> {
    const newUser = await this.userModel(createUserDTO);
    return newUser.save();
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user._id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getHelloAdmin() {
    return "You are in the admin panel"
  }
}


