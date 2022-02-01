"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const InfoItem_1 = __importDefault(require("./InfoItem"));
function RepoComp({ full_name, html_url }) {
    return (react_1.default.createElement(ink_1.Box, { marginY: 1, flexDirection: "column", width: "100%" },
        react_1.default.createElement(InfoItem_1.default, { label: "Name" }, full_name),
        react_1.default.createElement(InfoItem_1.default, { label: "Url" }, html_url)));
}
exports.default = RepoComp;
