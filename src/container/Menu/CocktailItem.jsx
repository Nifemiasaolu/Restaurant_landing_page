function CocktailItem({ cocktail }) {
  return (
    <li className="mt-4">
      <div className="flex items-center justify-between">
        <div className="w-[100%]">
          <p className="text-golden">{cocktail.title}</p>
        </div>

        <div className="w-[100%]">
          <div className="mx-4 h-[1px] w-[60px] bg-golden " />
        </div>

        <div className="w-[20%]"> 
        <div className="text-white">{cocktail.price}</div>
        </div>
      </div>

      <div className="p-opensans w-[100%] text-lightGrey">{cocktail.tags}</div>
    </li>
  );
}

export default CocktailItem;
// ///
