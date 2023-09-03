"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const node_path_1 = __importDefault(require("node:path"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
exports.app = (0, express_1.default)();
mongoose_1.default.connect('mongodb+srv://fredbneves95:E5eqp3CpFQrMLjN0@waiter-app-db.i7fkcrz.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
    const port = process.env.PORT || 3001;
    exports.app.use(express_1.default.json());
    exports.app.use((0, cors_1.default)());
    exports.app.use(router_1.router);
    exports.app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
    exports.app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})
    .catch(() => console.log('Erro ao conectar no MongoDB'));
