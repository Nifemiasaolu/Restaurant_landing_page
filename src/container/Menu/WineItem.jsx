function WineItem({ wine }) {
  return (
    <li className="mt-4">
      <div className="flex items-center justify-between">
        <p className="text-golden">{wine.title}</p>

        <div className="mx-4 h-[1px] w-[40px] bg-golden " />

        <div className="text-white ">{wine.price}</div>
      </div>

      <div className="p-opensans text-lightGrey">{wine.tags}</div>
    </li>
  );
}

export default WineItem;
// ///
