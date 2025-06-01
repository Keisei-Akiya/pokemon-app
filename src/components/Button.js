import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ text, onClick, disabled = false }) {
    return (_jsx("button", { onClick: onClick, disabled: disabled, className: "\n        m-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded\n        cursor-pointer transition-transform active:translate-y-1\n        disabled:bg-gray-500 disabled:cursor-not-allowed\n    ", children: text }));
}
