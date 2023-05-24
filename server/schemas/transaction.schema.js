"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TransactionSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    senderId: { type: String, required: true },
    recipientId: { type: String, required: true },
    amount: { type: Number, required: true },
});
//# sourceMappingURL=transaction.schema.js.map