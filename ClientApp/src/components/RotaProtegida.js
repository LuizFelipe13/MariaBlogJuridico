"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var RotaProtegida = function (_a) {
    var children = _a.children;
    var token = localStorage.getItem('token-blog'); // Verifica se tem o token salvo
    if (!token) {
        // Se não tiver token, chuta para o login
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: "/login", replace: true });
    }
    // Se tiver, mostra o conteúdo (ex: Dashboard)
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = RotaProtegida;
//# sourceMappingURL=RotaProtegida.js.map