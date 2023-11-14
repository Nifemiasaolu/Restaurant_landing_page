
function Button({ children }) {
  return (
    <button
      className="bg-crimson font-['Cormont_Upright'] rounded-[4px] 
    cursor-pointer border-none px-6 py-2 text-base 
    font-bold leading-7 tracking-wider text-black 
    outline-none lg:text-xl lg:leading-[50px]"
    >
      {children}
      
    </button>
  );
}

export default Button;

////