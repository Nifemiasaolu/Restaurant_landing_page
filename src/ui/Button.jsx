function Button({ children }) {
  return (
    <button className="bg-crimson font rounded-1px cursor-pointer border-none px-6 py-2 text-base font-bold leading-7 tracking-wider text-black outline-none">
      {children}
    </button>
  );
}

export default Button;
