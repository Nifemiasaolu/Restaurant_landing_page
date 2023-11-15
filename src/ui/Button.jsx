
function Button({ children, type }) {
  const base = `bg-golden font-['Cormont_Upright'] rounded-[4px] 
  cursor-pointer border-none  text-base 
  font-bold leading-7 tracking-wider text-black 
  outline-none `

  const styles= {
    primary: base + `px-6 py-2 lg:text-xl lg:leading-[50px]`,
    // small: 
  } 

  // const type = ""

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