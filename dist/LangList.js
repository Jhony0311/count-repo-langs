"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const InfoItem_1 = __importDefault(require("./InfoItem"));
function LangList({ username, langs }) {
    return (react_1.default.createElement(ink_1.Box, { marginY: 2, flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, { width: "100%" },
            react_1.default.createElement(ink_1.Text, null,
                "Languages used by ",
                react_1.default.createElement(ink_1.Text, { color: "#10b981" }, username),
                " on public repos")),
        react_1.default.createElement(ink_1.Box, { width: "100%", marginY: 1, flexDirection: "column" }, langs ? (Object.entries(langs).map(([lang, count]) => react_1.default.createElement(InfoItem_1.default, { label: lang }, `${count}`))) : (react_1.default.createElement(ink_1.Text, null, "No languages found")))));
}
exports.default = LangList;
