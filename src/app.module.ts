import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from 'util/secrets';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(MONGO_URI)],
})
export class AppModule {}
