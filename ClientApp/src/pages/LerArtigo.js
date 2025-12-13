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
var lucide_react_1 = require("lucide-react");
var LerArtigo = function () {
    var id = (0, react_router_dom_1.useParams)().id; // Pega o ID da URL (ex: /artigo/2)
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(null), artigo = _a[0], setArtigo = _a[1];
    (0, react_1.useEffect)(function () {
        var buscarArtigo = function () { return __awaiter(void 0, void 0, void 0, function () {
            var resposta, dados, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("https://localhost:7298/artigos/".concat(id))];
                    case 1:
                        resposta = _a.sent();
                        if (!resposta.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, resposta.json()];
                    case 2:
                        dados = _a.sent();
                        setArtigo(dados);
                        return [3 /*break*/, 4];
                    case 3:
                        alert("Artigo não encontrado!");
                        navigate('/');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("Erro:", error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        buscarArtigo();
    }, [id, navigate]);
    if (!artigo)
        return react_1.default.createElement("div", { className: "p-10 text-center" }, "Carregando...");
    return (react_1.default.createElement("div", { className: "max-w-3xl mx-auto bg-white shadow-sm border border-slate-100 my-12 rounded-lg overflow-hidden" },
        react_1.default.createElement("div", { className: "p-8 border-b border-slate-100" },
            react_1.default.createElement("button", { onClick: function () { return navigate('/'); }, className: "flex items-center text-slate-500 hover:text-amber-600 mb-6 transition" },
                react_1.default.createElement(lucide_react_1.ArrowLeft, { size: 20, className: "mr-2" }),
                " Voltar"),
            react_1.default.createElement("h1", { className: "text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight" }, artigo.titulo),
            react_1.default.createElement("div", { className: "flex items-center gap-6 text-sm text-slate-500" },
                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                    react_1.default.createElement(lucide_react_1.Calendar, { size: 16 }),
                    new Date(artigo.dataPublicacao).toLocaleDateString()),
                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                    react_1.default.createElement(lucide_react_1.User, { size: 16 }),
                    react_1.default.createElement("span", { className: "font-semibold text-amber-600" }, artigo.autor)))),
        artigo.urlImagem && (react_1.default.createElement("div", { className: "w-full h-64 md:h-96 overflow-hidden bg-slate-100" },
            react_1.default.createElement("img", { src: artigo.urlImagem, alt: artigo.titulo, className: "w-full h-full object-cover" }))),
        react_1.default.createElement("div", { className: "p-8 prose prose-slate max-w-none" },
            react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: artigo.conteudo } }))));
};
exports.default = LerArtigo;
//# sourceMappingURL=LerArtigo.js.map