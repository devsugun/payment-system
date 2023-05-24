import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
export declare class DatabaseConnection implements MongooseOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createMongooseOptions(): MongooseModuleOptions;
}
