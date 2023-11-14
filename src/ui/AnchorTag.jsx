function AnchorTag({ children, href }) {
  const className = `ease-in-out hover:border-b-solid mx-4 no-underline 
    transition-all duration-300 hover:border-b-[1px] 
    hover:border-b-golden sm:text-xs lg:text-sm md:mr-2`;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default AnchorTag;
