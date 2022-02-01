"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
function Intro() {
    return (react_1.default.createElement(ink_1.Box, { marginBottom: 4, padding: 2, borderStyle: "double", borderColor: "#06b6d4", alignItems: "center", justifyContent: "center", width: "50%" },
        react_1.default.createElement(ink_1.Text, null,
            react_1.default.createElement(ink_1.Text, { bold: true }, "Interview assignment"),
            react_1.default.createElement(ink_1.Newline, null),
            react_1.default.createElement(ink_1.Text, null,
                "Made by",
                ' ',
                react_1.default.createElement(ink_1.Text, { bold: true, color: "#60a5fa" }, "Jonathan Ortega")))));
}
exports.default = Intro;
