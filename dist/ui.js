"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Intro_1 = __importDefault(require("./Intro"));
const GitHubSearch_1 = __importDefault(require("./GitHubSearch"));
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Intro_1.default, null),
        react_1.default.createElement(GitHubSearch_1.default, null)));
};
module.exports = App;
exports.default = App;
