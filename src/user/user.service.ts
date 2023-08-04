import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id) {
    return await this.userModel.findById(id);
  }

  async deleteOne(id: string) {
    return await this.userModel.findByIdAndRemove(id);
  }

  async updateOne(id, user: User) {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
