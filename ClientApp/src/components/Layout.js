"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
var Layout = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(true), isSidebarOpen = _b[0], setIsSidebarOpen = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var location = (0, react_router_dom_1.useLocation)();
    // Função de Logout com Confirmação
    var handleLogout = function () {
        // Só executa se o usuário clicar em "OK" no alerta
        if (window.confirm("Tem certeza que você quer sair?")) {
            // 1. Remove o token e o nome do usuário
            localStorage.removeItem('token-blog');
            localStorage.removeItem('usuario-nome');
            // 2. Redireciona para o login
            navigate('/login');
        }
    };
    return (react_1.default.createElement("div", { className: "flex h-screen bg-slate-50" },
        react_1.default.createElement("div", { className: "".concat(isSidebarOpen ? 'w-64' : 'w-20', " bg-slate-900 text-white transition-all duration-300 flex flex-col") },
            react_1.default.createElement("div", { className: "p-4 flex items-center justify-between border-b border-slate-700" },
                isSidebarOpen && react_1.default.createElement("h1", { className: "font-serif text-xl font-bold text-amber-500" }, "JurisBlog"),
                react_1.default.createElement("button", { onClick: function () { return setIsSidebarOpen(!isSidebarOpen); }, className: "p-1 hover:bg-slate-800 rounded" },
                    react_1.default.createElement(lucide_react_1.Menu, { size: 24 }))),
            react_1.default.createElement("nav", { className: "flex-1 p-4 space-y-2" },
                react_1.default.createElement(NavItem, { icon: react_1.default.createElement(lucide_react_1.BookOpen, { size: 20 }), text: "Meus Artigos", isOpen: isSidebarOpen, active: location.pathname === '/admin' || location.pathname === '/', onClick: function () { return navigate('/admin'); } }),
                react_1.default.createElement(NavItem, { icon: react_1.default.createElement(lucide_react_1.PenTool, { size: 20 }), text: "Novo Artigo", isOpen: isSidebarOpen, active: location.pathname === '/novo', onClick: function () { return navigate('/novo'); } }),
                react_1.default.createElement(NavItem, { icon: react_1.default.createElement(lucide_react_1.MessageSquare, { size: 20 }), text: "Fale Conosco", isOpen: isSidebarOpen, active: location.pathname === '/contato', onClick: function () { return navigate('/contato'); } }),
                react_1.default.createElement(NavItem, { icon: react_1.default.createElement(lucide_react_1.Settings, { size: 20 }), text: "Configura\u00E7\u00F5es", isOpen: isSidebarOpen, onClick: function () { return alert("Em construção!"); } })),
            react_1.default.createElement("div", { className: "p-4 border-t border-slate-700" },
                react_1.default.createElement(NavItem, { icon: react_1.default.createElement(lucide_react_1.LogOut, { size: 20 }), text: "Sair", isOpen: isSidebarOpen, onClick: handleLogout }))),
        react_1.default.createElement("main", { className: "flex-1 overflow-auto p-8" },
            react_1.default.createElement("div", { className: "max-w-5xl mx-auto" }, children))));
};
// Componente auxiliar NavItem
var NavItem = function (_a) {
    var icon = _a.icon, text = _a.text, isOpen = _a.isOpen, _b = _a.active, active = _b === void 0 ? false : _b, onClick = _a.onClick;
    return (react_1.default.createElement("div", { onClick: onClick, className: "flex items-center gap-4 p-3 rounded cursor-pointer transition-colors ".concat(active ? 'bg-amber-600 text-white' : 'hover:bg-slate-800 text-slate-300') },
        icon,
        isOpen && react_1.default.createElement("span", { className: "whitespace-nowrap font-medium" }, text)));
};
exports.default = Layout;
//# sourceMappingURL=Layout.js.map