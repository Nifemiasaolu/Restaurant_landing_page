function CocktailItem({ cocktail }) {
  return (
    <li className="mt-4">
      <div className="flex items-center justify-between">
      <div className="w-[100%]">


        <p className="text-golden">{cocktail.title}</p>
      </div>
      
<div className="w-[100%]">


        <div className="w-[40px] h-[1px] bg-golden mx-4 " />
   
</div>
        <div className="text-white">{cocktail.price}</div>
      </div>

      <div className="text-lightGrey p-opensans w-[100%]">{cocktail.tags}</div>
    </li>
  );
}

export default CocktailItem;
// ///