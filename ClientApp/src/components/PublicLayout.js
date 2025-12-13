"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
var PublicLayout = function (_a) {
    var children = _a.children;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "min-h-screen bg-slate-50 font-sans" },
        react_1.default.createElement("nav", { className: "bg-slate-900 text-white shadow-lg" },
            react_1.default.createElement("div", { className: "max-w-6xl mx-auto px-4" },
                react_1.default.createElement("div", { className: "flex justify-between items-center h-20" },
                    react_1.default.createElement("div", { onClick: function () { return navigate('/'); }, className: "flex items-center gap-2 cursor-pointer hover:text-amber-500 transition" },
                        react_1.default.createElement(lucide_react_1.Scale, { size: 32, className: "text-amber-500" }),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("h1", { className: "text-2xl font-serif font-bold leading-none" }, "JurisBlog"),
                            react_1.default.createElement("span", { className: "text-xs text-slate-400 tracking-widest uppercase" }, "Direito & Justi\u00E7a"))),
                    react_1.default.createElement("div", { className: "hidden md:flex space-x-8 items-center" },
                        react_1.default.createElement("button", { onClick: function () { return navigate('/'); }, className: "hover:text-amber-500 transition" }, "Home"),
                        react_1.default.createElement("button", { onClick: function () { return navigate('/sobre'); }, className: "hover:text-amber-500 transition" }, "Sobre o Escrit\u00F3rio"),
                        react_1.default.createElement("button", { onClick: function () { return navigate('/contato'); }, className: "hover:text-amber-500 transition" }, "Contato"),
                        react_1.default.createElement("button", { onClick: function () { return navigate('/admin'); }, className: "bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 transition" },
                            react_1.default.createElement(lucide_react_1.UserCircle, { size: 18 }),
                            " \u00C1rea do Advogado"))))),
        react_1.default.createElement("main", { className: "flex-1 bg-slate-50" }, children),
        react_1.default.createElement("footer", { className: "bg-slate-200 text-slate-600 text-center py-8 mt-auto border-t border-slate-300" },
            react_1.default.createElement("p", null, "\u00A9 2025 JurisBlog - Todos os direitos reservados."),
            react_1.default.createElement("p", { className: "text-sm mt-2" }, "OAB/SP 123.456"))));
};
exports.default = PublicLayout;
//# sourceMappingURL=PublicLayout.js.map