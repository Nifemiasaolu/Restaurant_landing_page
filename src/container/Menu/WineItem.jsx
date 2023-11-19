function WineItem({ wine }) {
  return (
    <li className="mt-4">
      <div className="flex items-center justify-between">
        <div className="w-[100%]">

        <p className="text-golden">{wine.title}</p>
        </div>

        <div className="w-[100%]">


        <div className="mx-4 h-[1px] w-[40px] bg-golden " />
        </div>

        <div className="text-white ">{wine.price}</div>
      </div>

      <div className="p-opensans text-lightGrey">{wine.tags}</div>
    </li>
  );
}

export default WineItem;
// ///
