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
var lucide_react_1 = require("lucide-react"); // Adicionei Scale
var Contato = function () {
    var _a = (0, react_1.useState)(''), nome = _a[0], setNome = _a[1];
    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(''), mensagem = _c[0], setMensagem = _c[1];
    var _d = (0, react_1.useState)(false), enviando = _d[0], setEnviando = _d[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var resposta, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setEnviando(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch('https://localhost:7298/contato', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ nome: nome, email: email, mensagem: mensagem, assunto: "Contato pelo Site" })
                        })];
                case 2:
                    resposta = _a.sent();
                    if (resposta.ok) {
                        alert("Mensagem enviada! Entraremos em contato.");
                        setNome('');
                        setEmail('');
                        setMensagem('');
                    }
                    else {
                        alert("Erro ao enviar.");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    alert("Erro de conexão.");
                    return [3 /*break*/, 5];
                case 4:
                    setEnviando(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (
    // Container externo para dar espaçamento do topo e centralizar
    react_1.default.createElement("div", { className: "max-w-5xl mx-auto px-4 py-16 min-h-screen flex items-center" },
        react_1.default.createElement("div", { className: "w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row" },
            react_1.default.createElement("div", { className: "bg-slate-900 text-white p-10 md:w-2/5 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h2", { className: "text-3xl font-serif font-bold mb-6 text-amber-500" }, "Fale Conosco"),
                    react_1.default.createElement("p", { className: "text-slate-300 mb-8 leading-relaxed" }, "Estamos prontos para atender sua demanda jur\u00EDdica com agilidade e excel\u00EAncia."),
                    react_1.default.createElement("div", { className: "space-y-6" },
                        react_1.default.createElement("div", { className: "flex items-center gap-4" },
                            react_1.default.createElement("div", { className: "bg-slate-800 p-3 rounded-full" },
                                react_1.default.createElement(lucide_react_1.Phone, { size: 20, className: "text-amber-500" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", { className: "text-xs text-slate-400 uppercase font-bold" }, "Telefone"),
                                react_1.default.createElement("p", null, "(11) 9999-9999"))),
                        react_1.default.createElement("div", { className: "flex items-center gap-4" },
                            react_1.default.createElement("div", { className: "bg-slate-800 p-3 rounded-full" },
                                react_1.default.createElement(lucide_react_1.Mail, { size: 20, className: "text-amber-500" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", { className: "text-xs text-slate-400 uppercase font-bold" }, "E-mail"),
                                react_1.default.createElement("p", null, "contato@juris.com"))),
                        react_1.default.createElement("div", { className: "flex items-center gap-4" },
                            react_1.default.createElement("div", { className: "bg-slate-800 p-3 rounded-full" },
                                react_1.default.createElement(lucide_react_1.MapPin, { size: 20, className: "text-amber-500" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("p", { className: "text-xs text-slate-400 uppercase font-bold" }, "Localiza\u00E7\u00E3o"),
                                react_1.default.createElement("p", null, "Av. Paulista, 1000 - SP"))))),
                react_1.default.createElement("div", { className: "mt-12 pt-8 border-t border-slate-800" },
                    react_1.default.createElement("p", { className: "text-xs text-slate-500 text-center" }, "Segunda a Sexta \u2022 09:00 \u00E0s 18:00"))),
            react_1.default.createElement("div", { className: "p-10 md:w-3/5 bg-white" },
                react_1.default.createElement("div", { className: "flex flex-col items-center mb-8" },
                    react_1.default.createElement("div", { className: "bg-amber-50 p-4 rounded-full mb-4" },
                        react_1.default.createElement(lucide_react_1.Scale, { size: 48, className: "text-amber-600" })),
                    react_1.default.createElement("h3", { className: "text-2xl font-serif font-bold text-slate-800" }, "Envie sua Mensagem"),
                    react_1.default.createElement("p", { className: "text-slate-500 text-center text-sm mt-2 max-w-xs" }, "Preencha o formul\u00E1rio abaixo e retornaremos o mais breve poss\u00EDvel.")),
                react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-5" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "block text-sm font-bold text-slate-700 mb-1" }, "Nome Completo"),
                        react_1.default.createElement("input", { value: nome, onChange: function (e) { return setNome(e.target.value); }, className: "w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition", placeholder: "Ex: Dr. Jo\u00E3o Silva", required: true })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "block text-sm font-bold text-slate-700 mb-1" }, "E-mail Profissional"),
                        react_1.default.createElement("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition", placeholder: "Ex: joao@email.com", required: true })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "block text-sm font-bold text-slate-700 mb-1" }, "Como podemos ajudar?"),
                        react_1.default.createElement("textarea", { rows: 4, value: mensagem, onChange: function (e) { return setMensagem(e.target.value); }, className: "w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none", placeholder: "Descreva sua d\u00FAvida ou solicita\u00E7\u00E3o...", required: true })),
                    react_1.default.createElement("button", { disabled: enviando, className: "w-full bg-amber-600 text-white p-4 rounded-lg font-bold hover:bg-amber-700 shadow-lg shadow-amber-600/20 flex justify-center items-center gap-2 transition transform active:scale-95" }, enviando ? "Enviando..." : react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(lucide_react_1.Send, { size: 20 }),
                        " Enviar Solicita\u00E7\u00E3o")))))));
};
exports.default = Contato;
//# sourceMappingURL=Contato.js.map