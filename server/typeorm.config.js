"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'desegun',
    password: 'Domcat-1013@#@',
    database: 'mongodb',
    entities: ['src/**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.default = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map