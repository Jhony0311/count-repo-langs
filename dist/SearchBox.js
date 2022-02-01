"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_text_input_1 = __importDefault(require("ink-text-input"));
function GitHubSearch({ username, onChange, onSubmit }) {
    return (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, null, "Enter a GitHub username: ")),
        react_1.default.createElement(ink_text_input_1.default, { value: username, onChange: onChange, onSubmit: onSubmit })));
}
exports.default = GitHubSearch;
