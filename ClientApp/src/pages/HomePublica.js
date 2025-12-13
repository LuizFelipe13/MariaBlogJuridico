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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
var HomePublica = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)([]), artigos = _a[0], setArtigos = _a[1];
    var _b = (0, react_1.useState)(''), termoBusca = _b[0], setTermoBusca = _b[1];
    var carregarArtigos = function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (termo) {
            var url, resposta, dados, error_1;
            if (termo === void 0) { termo = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        url = termo
                            ? "https://localhost:7298/artigos?termo=".concat(encodeURIComponent(termo))
                            : 'https://localhost:7298/artigos';
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        resposta = _a.sent();
                        if (!resposta.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, resposta.json()];
                    case 2:
                        dados = _a.sent();
                        setArtigos(dados);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Erro:", error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    (0, react_1.useEffect)(function () {
        carregarArtigos();
    }, []);
    var handleBuscar = function (e) {
        e.preventDefault();
        carregarArtigos(termoBusca);
    };
    return (react_1.default.createElement("div", { className: "min-h-screen font-sans" },
        react_1.default.createElement("div", { className: "relative h-[500px] w-full flex items-center justify-center text-white" },
            react_1.default.createElement("div", { className: "absolute inset-0 bg-cover bg-center z-0", style: {
                    // Nova imagem: Martelo da justiça e livros (Unsplash)
                    backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop")',
                    filter: 'brightness(0.3)' // Um pouco mais escuro para destacar o texto
                } }),
            react_1.default.createElement("div", { className: "relative z-10 text-center px-4 max-w-4xl mx-auto mt-10" },
                react_1.default.createElement("h1", { className: "text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg" }, "Insights Jur\u00EDdicos Modernos"),
                react_1.default.createElement("p", { className: "text-xl md:text-2xl text-slate-200 mb-10 font-light drop-shadow-md" }, "Um canal confi\u00E1vel e pr\u00E1tico com tudo o que voc\u00EA precisa saber sobre seus direitos."),
                react_1.default.createElement("form", { onSubmit: handleBuscar, className: "flex max-w-lg mx-auto bg-white rounded-full overflow-hidden p-1 shadow-2xl transform hover:scale-105 transition duration-300" },
                    react_1.default.createElement("input", { type: "text", placeholder: "Pesquisar artigo (ex: Trabalhista)", className: "flex-1 px-6 py-3 text-slate-700 outline-none placeholder:text-slate-400", value: termoBusca, onChange: function (e) { return setTermoBusca(e.target.value); } }),
                    react_1.default.createElement("button", { type: "submit", className: "bg-amber-600 hover:bg-amber-700 text-white rounded-full p-3 px-6 font-bold flex items-center gap-2 transition" },
                        react_1.default.createElement(lucide_react_1.Search, { size: 20 }),
                        " ",
                        react_1.default.createElement("span", { className: "hidden md:inline" }, "Pesquisar"))))),
        react_1.default.createElement("div", { className: "max-w-6xl mx-auto px-4 py-16" },
            react_1.default.createElement("h2", { className: "text-3xl font-serif font-bold text-slate-800 mb-8 border-l-4 border-amber-600 pl-4" }, "\u00DAltimas Publica\u00E7\u00F5es"),
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, artigos.map(function (artigo) { return (react_1.default.createElement("div", { key: artigo.id, className: "bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col group overflow-hidden" },
                react_1.default.createElement("div", { className: "h-56 bg-slate-200 relative overflow-hidden" }, artigo.urlImagem ? (react_1.default.createElement("img", { src: artigo.urlImagem, alt: artigo.titulo, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })) : (react_1.default.createElement("div", { className: "w-full h-full flex items-center justify-center text-slate-400 bg-slate-100" },
                    react_1.default.createElement("span", { className: "font-serif text-5xl opacity-20" }, "\u2696\uFE0F")))),
                react_1.default.createElement("div", { className: "p-6 flex-1 flex flex-col" },
                    react_1.default.createElement("div", { className: "flex items-center gap-4 text-xs text-slate-500 mb-3" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1" },
                            react_1.default.createElement(lucide_react_1.Calendar, { size: 14, className: "text-amber-600" }),
                            new Date(artigo.dataPublicacao).toLocaleDateString()),
                        react_1.default.createElement("div", { className: "flex items-center gap-1" },
                            react_1.default.createElement(lucide_react_1.User, { size: 14, className: "text-amber-600" }),
                            artigo.autor || "Jurídico")),
                    react_1.default.createElement("h3", { className: "text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition" }, artigo.titulo),
                    react_1.default.createElement("p", { className: "text-slate-600 text-sm line-clamp-3 mb-4 flex-1" },
                        artigo.conteudo.replace(/<[^>]+>/g, '').substring(0, 100),
                        "..."),
                    react_1.default.createElement("button", { onClick: function () { return navigate("/artigo/".concat(artigo.id)); }, className: "text-amber-600 font-bold hover:text-amber-800 flex items-center gap-2 text-sm transition mt-auto" },
                        "LER ARTIGO COMPLETO ",
                        react_1.default.createElement(lucide_react_1.ArrowRight, { size: 16 }))))); })),
            artigos.length === 0 && (react_1.default.createElement("div", { className: "text-center py-20 bg-white rounded-lg border border-slate-200" },
                react_1.default.createElement("p", { className: "text-slate-500 text-lg mb-2" }, "Nenhum artigo encontrado para sua busca."),
                react_1.default.createElement("button", { onClick: function () { setTermoBusca(''); carregarArtigos(''); }, className: "text-amber-600 font-bold hover:underline" }, "Limpar filtros e ver tudo"))))));
};
exports.default = HomePublica;
//# sourceMappingURL=HomePublica.js.map