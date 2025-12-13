"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Login = function () {
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), senha = _b[0], setSenha = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var resposta, dados, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch('https://localhost:7298/auth/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: email, senha: senha })
                        })];
                case 2:
                    resposta = _a.sent();
                    if (!resposta.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, resposta.json()];
                case 3:
                    dados = _a.sent();
                    // Salva o token no navegador (localStorage)
                    localStorage.setItem('token-blog', dados.token); //
                    localStorage.setItem('usuario-nome', dados.nome); // <--- SALVA O NOME
                    alert("Bem-vindo(a), " + dados.nome);
                    navigate('/admin');
                    return [3 /*break*/, 5];
                case 4:
                    alert("Email ou senha incorretos.");
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    alert("Erro de conexão.");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "min-h-screen flex items-center justify-center bg-slate-100" },
        react_1.default.createElement("div", { className: "bg-white p-8 rounded-lg shadow-md w-96" },
            react_1.default.createElement("h1", { className: "text-2xl font-bold mb-6 text-center text-slate-800" }, "Acesso Restrito"),
            react_1.default.createElement("form", { onSubmit: handleLogin, className: "space-y-4" },
                react_1.default.createElement("input", { type: "email", placeholder: "E-mail", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full p-2 border rounded" }),
                react_1.default.createElement("input", { type: "password", placeholder: "Senha", value: senha, onChange: function (e) { return setSenha(e.target.value); }, className: "w-full p-2 border rounded" }),
                react_1.default.createElement("button", { className: "w-full bg-slate-900 text-white p-2 rounded hover:bg-slate-800" }, "Entrar")),
            react_1.default.createElement("button", { onClick: function () { return navigate('/'); }, className: "w-full mt-4 text-sm text-slate-500 hover:underline" }, "Voltar ao Site"))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map