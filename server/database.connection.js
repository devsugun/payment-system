"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config/config.service");
let DatabaseConnection = class DatabaseConnection {
    constructor(configService) {
        this.configService = configService;
    }
    createMongooseOptions() {
        const dbHost = this.configService.get('DB_HOST');
        const dbPort = this.configService.get('DB_PORT');
        const dbName = this.configService.get('DB_NAME');
        return {
            uri: `mongodb://${dbHost}:${dbPort}/${dbName}`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
};
DatabaseConnection = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], DatabaseConnection);
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=database.connection.js.map