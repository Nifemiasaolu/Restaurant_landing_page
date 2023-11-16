
function Button({ children, type }) {
  const base = `bg-golden font-['Cormont_Upright'] rounded-[4px] 
  cursor-pointer border-none  text-base 
  font-bold leading-7 tracking-wider text-black 
  outline-none `

  const styles= {
    primary: base + `px-6 py-2 lg:text-base lg:leading-[20px]`,
    small: base + `px-3 text-xs mt-4 rounded-[3px]`,
  } 

  return (
    <button
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;

////