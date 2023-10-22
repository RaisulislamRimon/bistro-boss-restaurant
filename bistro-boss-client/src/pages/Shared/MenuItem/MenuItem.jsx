const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 mb-12">
      <img
        style={{ borderRadius: "0 300px 300px 400px" }}
        className="w-[100px]"
        src={image}
        alt={name}
      />
      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
