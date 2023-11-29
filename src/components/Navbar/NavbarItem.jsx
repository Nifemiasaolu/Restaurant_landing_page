function NavbarItem({ item, onClick }) {
  return (
    <li
      className="p-opensans m-4 cursor-pointer font-['Cormorant_Upright']
     text-golden hover:text-white sm:mr-2 sm:font-['Open_sans']
      sm:text-white sm:hover:text-lightGrey sm:text-xs lg:text-sm"
     
    >
      <a href={item.id} onClick={onClick}>{item.title}</a>
    </li>
  );
}

export default NavbarItem;
