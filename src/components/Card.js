import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Card = ({ pokemon }) => {
    return (_jsxs("div", { className: "text-left bg-transparent text-slate-50 rounded-xl shadow-lg p-4 flex flex-col hover:scale-105 transition-transform border border-gray-800", children: [_jsx("h3", { className: "text-2xl font-extrabold text-center drop-shadow-lg tracking-wide mb-3 uppercase", children: pokemon.name }), _jsx("div", { className: "flex items-center justify-center mb-4 bg-gray-900 rounded-full", children: _jsx("img", { src: pokemon.sprites.front_default, alt: "" }) }), _jsxs("div", { className: "cardTypes", children: [_jsx("div", { children: "\u30BF\u30A4\u30D7" }), pokemon.types.map((type, idx) => {
                        return (_jsx("div", { children: _jsx("span", { className: "typeName", children: type.type.name }) }, type.type.name + idx));
                    })] }), _jsxs("div", { className: "cardInfo", children: [_jsx("div", { className: "cardData", children: _jsxs("p", { className: "title", children: ["\u91CD\u3055: ", pokemon.weight] }) }), _jsx("div", { className: "cardData", children: _jsxs("p", { className: "title", children: ["\u9AD8\u3055: ", pokemon.height] }) }), _jsxs("div", { className: "cardData", children: [_jsx("div", { children: "\u30A2\u30D3\u30EA\u30C6\u30A3" }), pokemon.abilities.map((ability, idx) => {
                                return (_jsx("div", { children: _jsx("span", { children: ability.ability.name }) }, ability.ability.name + idx));
                            })] })] })] }));
};
