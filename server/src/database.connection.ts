import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';



@Injectable()
export class DatabaseConnection implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const dbHost = this.configService.get('DB_HOST');
    const dbPort = this.configService.get('DB_PORT');
    const dbName = this.configService.get('DB_NAME');

    return {
      uri: `mongodb://${dbHost}:${dbPort}/${dbName}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
