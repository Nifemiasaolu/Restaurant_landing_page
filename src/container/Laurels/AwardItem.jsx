function AwardItem({ award: { imgUrl, title, subtitle } }) {
  return (
    <li className="w-fit flex flex-1  justify-start items-start ">
      <img src={imgUrl} alt="award img" className="w-[30px] aspect-square"/>

      <div className="flex flex-col justify-center  ml-4">
        <p className="text-golden w-fit">{title}</p>
        <p className="text-lightGrey">{subtitle}</p>
      </div>
    </li>
  );
}

export default AwardItem;
