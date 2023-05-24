import { ConfigService as NestConfigService } from '@nestjs/config';
export declare class ConfigService {
    private readonly nestConfigService;
    constructor(nestConfigService: NestConfigService);
    get(key: string): string;
    getInt(key: string): number;
    getBoolean(key: string): boolean;
}
