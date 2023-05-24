"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    id: String,
    name: String,
    phoneNumber: String,
    password: String,
    balance: Number,
    transactions: [mongoose_1.Schema.Types.Mixed],
});
//# sourceMappingURL=user.schema.js.map