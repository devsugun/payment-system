import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql', // Replace with your desired database type
  host: 'localhost', // Replace with your database host
  port: 3306, // Replace with your database port
  username: 'desegun', // Replace with your database username
  password: 'Domcat-1013@#@', // Replace with your database password
  database: 'mongodb', // Replace with your database name
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
};

export default typeOrmConfig;
