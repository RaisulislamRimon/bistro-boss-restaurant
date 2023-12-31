const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-700 text-white absolute right-0 mr-4 mt-4 px-4 rounded-md">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-justify">{recipe}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Add to cart</button> */}
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
