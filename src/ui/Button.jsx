
function Button({ children, type }) {
  const base = `bg-golden font-['Cormont_Upright'] rounded-[4px] 
  cursor-pointer border-none  text-base 
  font-bold leading-7 tracking-wider text-black 
  outline-none `

  const styles= {
    primary: base + `px-4 py-1 lg:text-base lg:leading-[20px]`,
    small: base + `px-3 text-xs mt-4 rounded-[3px]`,
    footer: base + `px-3 text-xs mt-4 rounded-[3px] md:mt-0`,
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