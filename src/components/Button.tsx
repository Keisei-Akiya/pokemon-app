interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ text, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        m-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded
        cursor-pointer transition-transform active:translate-y-1
        disabled:bg-gray-500 disabled:cursor-not-allowed
    "
    >
      {text}
    </button>
  );
}
