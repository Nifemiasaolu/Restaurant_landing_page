function WineItem({ wine }) {
  return (
    <li>
      <div className="flex-center">
        <p className="text-golden">{wine.title}</p>
        <span className="mx-2 text-lightGrey">-------</span>
        <small className="text-white">{wine.price}</small>
      </div>

      <div className="text-lightGrey">{wine.tags}</div>
    </li>
  );
}

export default WineItem;
// ///