"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
function InfoItem({ label, children, color = '#0ea5e9' }) {
    return (react_1.default.createElement(ink_1.Box, { width: "100%" },
        react_1.default.createElement(ink_1.Text, null,
            label,
            ": ",
            react_1.default.createElement(ink_1.Text, { color: color }, children))));
}
exports.default = InfoItem;
