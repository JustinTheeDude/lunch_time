interface InputProps {
    inputPlaceholder: string,
    className?: string,
};

const Input = ({ inputPlaceholder, className }: InputProps) => {
    return (
      <input 
        className={`relative outline-none rounded py-3 px-3 w-full bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline ${className}`} 
        type="text" 
        placeholder={inputPlaceholder}/>
    );
};

export default Input;