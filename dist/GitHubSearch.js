"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const axios_1 = __importDefault(require("axios"));
const SearchBox_1 = __importDefault(require("./SearchBox"));
const LangList_1 = __importDefault(require("./LangList"));
const types_1 = require("./types");
function GitHubSearch() {
    const [username, setUsername] = (0, react_1.useState)('');
    const [status, setStatus] = (0, react_1.useState)(types_1.STATUS.IDLE);
    const [langs, setLangs] = (0, react_1.useState)();
    async function handleSubmit() {
        setStatus(types_1.STATUS.PENDING);
        try {
            const { data: repos } = await axios_1.default.get(`https://api.github.com/users/${username}/repos`);
            const langsPerRepo = await Promise.all(repos.map(async (repo) => {
                return await axios_1.default.get(repo.languages_url).then((res) => res.data);
            }));
            const langCount = langsPerRepo.reduce((count, repoLangs) => {
                const languages = Object.keys(repoLangs);
                return languages.reduce((acc, lang) => {
                    if (acc[lang]) {
                        return {
                            ...acc,
                            [lang]: (acc[lang] || 0) + 1,
                        };
                    }
                    return {
                        ...acc,
                        [lang]: 1,
                    };
                }, count);
            }, {});
            setLangs(langCount);
            setStatus(types_1.STATUS.RESOLVED);
        }
        catch (err) {
            setStatus(types_1.STATUS.REJECTED);
        }
    }
    const isStarting = status !== types_1.STATUS.RESOLVED && status !== types_1.STATUS.REJECTED;
    const isSuccess = status === types_1.STATUS.RESOLVED;
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" }, isStarting ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SearchBox_1.default, { username: username, onChange: setUsername, onSubmit: handleSubmit }),
        status === types_1.STATUS.PENDING && (react_1.default.createElement(ink_1.Text, null,
            react_1.default.createElement(ink_1.Text, { color: "green" },
                react_1.default.createElement(ink_spinner_1.default, null)),
            ' Searching on GH')))) : (react_1.default.createElement(react_1.default.Fragment, null, isSuccess ? (react_1.default.createElement(LangList_1.default, { username: username, langs: langs })) : (react_1.default.createElement(ink_1.Text, null, "Sorry, your username could not be found or hitted API rate limit"))))));
}
exports.default = GitHubSearch;
