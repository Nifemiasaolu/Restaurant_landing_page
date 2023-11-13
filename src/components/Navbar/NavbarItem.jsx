function NavbarItem({item}) {
  return (
    <li className="p-opensans hover:text-lightGrey mr-4">
      <a href={item.id}>{item.title}</a>
    </li>
  )
}

export default NavbarItem
